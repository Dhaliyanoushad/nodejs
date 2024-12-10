const fs = require("fs");

// Synchronous
const files = fs.readdirSync("../");
console.log("Result Sync: ", files);

// Asynchronous
fs.readdir("./", function (err, files) {
  if (err) console.log("Error: ", err);
  else console.log("Result Async: ", files);
});
