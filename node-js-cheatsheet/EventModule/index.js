// registering for the event to be fired only one time using once
const EventEmitter = require("events");

const event = new EventEmitter();
event.on("sayMyName", () => {
  console.log("your name is ridsa");
});
event.emit("sayMyName"); // always fire event after defining it

// create an event emitter instance and register a couple of call backs
event.on("sayMyName", () => {
  console.log("your name is ridsa");
});
event.on("sayMyName", () => {
  console.log("your name is ridsa1");
});
event.on("sayMyName", () => {
  console.log("your name is ridsa2");
});
event.emit("sayMyName");

// registering for the events with callback parameters
event.on("checkpage", (sc, msg) => {
  console.log(`status code is ${sc} and page is ${msg}`);
});
event.emit("checkpage", 200, "ok");
