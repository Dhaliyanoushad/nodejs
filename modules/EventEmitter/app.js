const EventEmitter = require("events");
const Logger = require("./logger");

const logger = new Logger();

// register a listener
logger.on("messageLogged", (e) => {
  console.log("Listener called!!", e);
});

logger.log("message");
