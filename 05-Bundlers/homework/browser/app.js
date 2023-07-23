//Refactoring the code with require and module.exports
//1. delete inmmediate invoked functions
// (function () {
//var whiteboard = window.whiteboard;
var whiteboard = require("./whiteboard");
//var socket = window.io(window.location.origin);
var io = require("socket.io-client"); //Cuando requerimos algo instalado con nodemodules no necesitamos poner el path
var socket = io(window.location.origin);

socket.on("connect", function () {
  console.log("Connected!");
});

socket.on("load", function (strokes) {
  strokes.forEach(function (stroke) {
    var start = stroke.start;
    var end = stroke.end;
    var color = stroke.color;
    whiteboard.draw(start, end, color, false);
  });
});

socket.on("draw", function (start, end, color) {
  whiteboard.draw(start, end, color, false);
});

whiteboard.on("draw", function (start, end, color) {
  socket.emit("draw", start, end, color);
});
// })();
