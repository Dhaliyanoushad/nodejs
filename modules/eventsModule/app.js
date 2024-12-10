const EventEmitter = require("events");

const emitter = new EventEmitter();

// register a listener
emitter.on("messageLogged", (e) => {
  console.log("Listener called!!", e);
});

// raise an event
emitter.emit("messageLogged", { id: 1, url: "https//" });
