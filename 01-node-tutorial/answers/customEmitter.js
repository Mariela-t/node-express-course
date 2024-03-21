// const EventEmitter = require('events');

// const customerEmitter = new EventEmitter()

// customerEmitter.on('response', () => {
//     console.log(`data recieved `)
// })
// customerEmitter.on("response", () => {
//   console.log(`some other logic `);
// });

// customerEmitter.emit('response')

const EventEmitter = require("events");
const emitter = new EventEmitter();
setInterval(() => {
  emitter.emit("timer", "hi there");
}, 5000);
emitter.on("timer", (msg) => console.log(msg));  