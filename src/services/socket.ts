const io = require('socket.io-client');

const URL = 'http://localhost:3333';
const socket = io(URL, { autoConnect: false });

socket.onAny((event: any, ...args: any) => {
  console.log(event, args);
});

export default socket;
