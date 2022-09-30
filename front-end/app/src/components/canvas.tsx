import React, { useEffect, useRef } from "react";
import './Game/canvas.css'
import { io, Socket } from "socket.io-client";
import { RootState } from "../store";
import { useSelector } from "react-redux";
import { ModeEnum } from "../store/gameReducer";
import { Mode } from "@mui/icons-material";

type Cmds = {
	room		: string;
	key_up		: boolean;
	key_down	: boolean;
}

type	Player = {
	id		: string,
	x		: number;
	y		: number;
	w		: number;
	h		: number;
	score	: number;
	scorpos	: number;
	cmds?	: Cmds;
	room?	:string;
}

type Ball = {
	x 		: number;
	y 		: number;
	r 		: number;
	speed	: number;
	velX	: number;
	velY	: number;
}

let socket: Socket;

let width = window.innerWidth * 0.9;
let height = width / 2;
let cof		:number;
let room	:string = '';
// let players:any = {};
let P1 = {} as Player;	// = {id: '', x: 0, y: 0, w: 0, h:0, score: 0, scorpos: 0};
let P2 = {} as Player;	// = {id: '', x: 0, y: 0, w: 0, h:0, score: 0, scorpos: 0};



let  ball:Ball = {
	x		: 0,
	y		: 0,
	r		: 0,
	speed	: 0, 
	velX	: 0,
	velY	: 0,
}

let player_cmd: Cmds = {room: room, key_up : false, key_down: false};
let gameover: boolean = false;


let drawRect = (	ctx	:	CanvasRenderingContext2D,
					x	:	number,
					y	:	number,
					w	:	number,
					h	:	number,
					c	:	string )
:void =>					
{
	ctx.fillStyle = c;
	ctx.fillRect(x, y, w, h);
}

let  drawScore = (	ctx		:	CanvasRenderingContext2D,
	score	:	number,
	x		:	number,
	y		:	number,
	color	:	string )
	:void =>
	{
		ctx.fillStyle = color;
	let font_size = window.innerWidth / 15;
	ctx.font = font_size + 'px oxygen';
	ctx.fillText(`${score}`, x, y);
}

let drawGameOver = (ctx:CanvasRenderingContext2D) => {
	let font_size = window.innerWidth / 15;
	ctx.font = font_size + 'px oxygen';
	ctx.fillText('GAME OVER', width/2 - font_size*3, height/2 + font_size/4);
}

let drawBall = (	ctx	: CanvasRenderingContext2D,
	ball: Ball )
	:void =>					
	{
		ctx.fillStyle = "white";
		ctx.beginPath();
		ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2, false);
		ctx.closePath();
		ctx.fill();
	}
	
	let drawNet = (ctx:CanvasRenderingContext2D):void =>
	{
		for (let i:number = ctx.canvas.height / 35; i < ctx.canvas.height; i+= ctx.canvas.height / 8)
		{
			drawRect(ctx, (ctx.canvas.width/2) - (ctx.canvas.width / 400), i, ctx.canvas.width / 200, ctx.canvas.height / 15, "#cbcbcb");
		}
	}
	
	let drawGame = (	ctx : CanvasRenderingContext2D):void => {
	ctx!.canvas.width = width;
	ctx!.canvas.height = height;
	drawRect(ctx, 0, 0, width, height, "black");
	if (P1.x !== 0)
	{
		drawRect(ctx, P1.x * cof, P1.y * cof, P1.w * cof, P1.h * cof, 'white');
		drawScore(ctx, P1.score, (P1.scorpos * (width / 4) - (width / 30)), height / 4, "#cbcbcb");
		// let p : keyof typeof players;
		// for (p in players)
		// {
		// 	drawRect(ctx, players[p].x * cof, players[p].y * cof, players[p].w * cof, players[p].h * cof, 'white');
		// 	drawScore(ctx, players[p].score, (players[p].scorpos * (width / 4) - (width / 30)), height / 4, "#cbcbcb");
		// }
	}
	if (P2.x !== 0)
	{
		drawRect(ctx, P2.x * cof, P2.y * cof, P2.w * cof, P2.h * cof, 'white');
		drawScore(ctx, P2.score, (P2.scorpos * (width / 4) - (width / 30)), height / 4, "#cbcbcb");
	}
	drawNet(ctx);
	if (gameover)
		drawGameOver(ctx);
	if (!gameover)
		drawBall(ctx, ball);
}

let fadeOut = (ctx: CanvasRenderingContext2D, text:string) => {
	let alpha = 1.0,   // full opacity
		interval = setInterval(function () {
			drawGame(ctx);
			ctx.fillStyle = "rgba(255, 255, 255, " + alpha + ")";
			let font_size = width / 7;
			ctx.font = font_size + 'px oxygen';
			ctx.fillText(text, (width/2)-(width/30)  , height/2+height/14);
			alpha = alpha - 0.05; // decrease opacity (fade out)
			if (alpha < 0) {
				clearInterval(interval);
			}
		}, 50); 
}

let countdown = (ctx :CanvasRenderingContext2D) => {
	fadeOut(ctx, '3');
	drawGame(ctx);
	setTimeout(() => {
		fadeOut(ctx, '2');
		drawGame(ctx);
	}, 1000);
	setTimeout(() => {
		fadeOut(ctx, '1');
		drawGame(ctx);
		gameover = false;
	}, 2000);
}

let emit_cmds = (player_cmd:Cmds, gameover:boolean) => {
	let p_c = player_cmd;
	p_c.room = room;
	console.log(room);
	if (!gameover)
		socket.emit('usr_cmd', p_c);
}

let commands = (canvas: HTMLCanvasElement, player_cmd: Cmds) => {
	let keypressed = false;
	window!.addEventListener('keydown', function(event) {
		if (event.keyCode === 38){
			keypressed = true;
			player_cmd.key_up = true;
		}
		if (event.keyCode === 40) {
			keypressed = true;
			player_cmd.key_down = true;
		}
		if (keypressed === true)
		{
			emit_cmds(player_cmd, gameover);
			keypressed = false;
		}
	}, false);
	window!.addEventListener('keyup', function(event) {
		if (event.keyCode === 38) {
			if (player_cmd.key_up === true)
				{keypressed = true;}
			player_cmd.key_up = false
		}
		if (event.keyCode === 40) {
			if (player_cmd.key_down === true)
				{keypressed = true;}
			player_cmd.key_down = false;
		}
		if (keypressed === true)
		{
			emit_cmds(player_cmd, gameover);
			keypressed = false;
		}
	}, false);
}

let updateBalldisplay = (ball:Ball): void =>
{
	ball.x *= cof;
	ball.y *= cof;
	ball.r *= cof;
	ball.speed *= cof;
	ball.velX *= cof;
	ball.velY *= cof;
}

let getMode = (mode:ModeEnum):string => {
	switch (mode) {
		case ModeEnum.mode1 : return("1");
		case ModeEnum.mode2 : return("2");
		case ModeEnum.mode3 : return("3");
		default:
			return("");
	}
}

const Canvas = () => {
	const match_info = useSelector((state: RootState) => state.game);
	const  player_info = useSelector((state: RootState) => state.user);
	const mode:string = getMode(match_info.mode);
	const invite = ''
	const watching = match_info.room;
	if (!socket)
		socket = io('http://localhost:3333/game', {auth : {mode: mode, info: player_info, invite: invite, room: watching}});

	socket!.emit('size_change', width);
  
	const canvasRef = useRef<HTMLCanvasElement>(null)
	
	useEffect(() => {
		const canvas = canvasRef!.current;
		const ctx = canvas!.getContext('2d');
		if (!ctx)
		return;
		ctx.font = 'oxygen';

		socket.on('update', (size, c) => {
			width = size;
			height = width / 2;
			cof = c;
			drawGame(ctx);
		})

		socket.on('start_game', () => {
			countdown(ctx);
			if (mode !== '3')
				commands(canvas!, player_cmd);
		})

		socket.on('game_over', () => {
			gameover = true;
			room = '';
			drawGame(ctx);
		})

		socket.on('update_connections', (p1: Player, p2 :Player, b: Ball) => {
			// players = p;
			P1 = p1;
			P2 = p2;
			if (room === '')
				room = P1.room!;
			ball = b;
			updateBalldisplay(ball);
			drawGame(ctx);
		})
		
		function handleResize() {
			const canvas = canvasRef!.current;
			const ctx = canvas!.getContext('2d');

			let new_width = window.innerWidth * 0.9;
			socket.emit('size_change', new_width);
			socket.on('update', (size, c) => {
				width = size;
				height = width /2;
				cof = c;
				drawGame(ctx!);
			})
		}
		
		window.addEventListener('resize', handleResize)
		return () => {
			socket.off('size_change');
			socket.off('update_connections');
			window.removeEventListener('resize', handleResize)
		}
	});
	
	return <canvas id='game' ref={canvasRef}/>
};

export default Canvas;