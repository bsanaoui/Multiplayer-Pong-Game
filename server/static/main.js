// const app = new Vue({
//     el: '#app',
//     data: {
//      title: 'Room',
//      name: 'Soukaina',
//      text: '',
//      messages: [],
//      socket: null
//     },
//     methods: {
//         sendMessage() {
//         if(this.validateInput()) {
//             const message = {
//             name: this.name,
//             text: this.text
//             }
//             this.socket.emit('SendMessageRoom', message)
//             this.text = ''
//             }
//         },
//         joinRoom1(){
//             console.log(this.socket);
//             const message = {
//             name: this.name,
//             text: this.text
//             }
//             console.log("Joineddddddddddddd room1");
//             this.socket.emit('JoinRoom1', message);
//         },
//         joinRoom2(){
//             console.log(this.socket.emit);
//             this.socket.emit('ExceptClients');
//             console.log("except");
//         },
//         receivedMessage(message) {
//         this.messages.push(message)
//         },
//         joinedRoom1(message) {
//             this.messages.push(message)
//         },
//         validateInput() {
//         return this.name.length > 0 && this.text.length > 0
//         },
//     },
//     created() {
//         this.socket = io('http://localhost:3333/')
//         this.socket.on('msgToClient', (message) => {
//         console.log("Message to client");   
//         this.receivedMessage(message)
//      })
//     },
//    })



const app = new Vue({
    el: '#app',
    data: {
     title: 'Room',
     name: 'Soukaina',
     text: '',
     messages: [],
     socket: null
    },
    methods: {
        sendMessage() {
        if(this.validateInput()) {
            const message = {
            name: this.name,
            text: this.text
            }
            this.socket.emit('SendMessageRoom', message)
            this.text = ''
            }
        },
        joinRoom1(){
            console.log(this.socket);
            const message = {
            name: this.name,
            text: this.text
            }
            console.log("Joineddddddddddddd room1");
            this.socket.emit('JoinRoom1', message);
        },
        joinRoom2(){
            console.log(this.socket.emit);
            this.socket.emit('ExceptClients');
            console.log("except");
        },
        receivedMessage(message) {
        this.messages.push(message)
        },
        joinedRoom1(message) {
            this.messages.push(message)
        },
        validateInput() {
        return this.name.length > 0 && this.text.length > 0
        },
    },
    created() {
        this.socket = io('http://localhost:3333/')
        this.socket.on('msgToClient', (message) => {
        console.log("Message to client");   
        this.receivedMessage(message)
     })
    },
   })