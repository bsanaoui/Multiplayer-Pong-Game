import { IsString } from "class-validator/cjs/decorator/typechecker/IsString";


export class dm_msg{
    @IsString()
    from: string;
    @IsString()
    to: string;
    @IsString()
    msg: string;
}