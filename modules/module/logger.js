var url = "http://mylogger.io/log";

function log(message) {
  // send an http request
  console.log(message);
}
// two ways to add to module.exports
exports.log = log;
module.exports.endPoint = url;

console.log(exports);
console.log(module);
console.log(__dirname);
console.log(__filename);
