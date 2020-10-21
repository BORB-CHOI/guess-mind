(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleMessageNotif = handleMessageNotif;

function handleMessageNotif(data) {
  var message = data.message,
      nickname = data.nickname;
  console.log("".concat(nickname, ": ").concat(message));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsiaGFuZGxlTWVzc2FnZU5vdGlmIiwiZGF0YSIsIm1lc3NhZ2UiLCJuaWNrbmFtZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBTyxTQUFTQSxrQkFBVCxDQUE0QkMsSUFBNUIsRUFBa0M7QUFBQSxNQUMvQkMsT0FEK0IsR0FDVEQsSUFEUyxDQUMvQkMsT0FEK0I7QUFBQSxNQUN0QkMsUUFEc0IsR0FDVEYsSUFEUyxDQUN0QkUsUUFEc0I7QUFFdkNDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixXQUFlRixRQUFmLGVBQTRCRCxPQUE1QjtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZU1lc3NhZ2VOb3RpZihkYXRhKSB7XHJcbiAgY29uc3QgeyBtZXNzYWdlLCBuaWNrbmFtZSB9ID0gZGF0YTtcclxuICBjb25zb2xlLmxvZyhgJHtuaWNrbmFtZX06ICR7bWVzc2FnZX1gKTtcclxufVxyXG4iXX0=
},{}],2:[function(require,module,exports){
"use strict";

var _chat = require("./chat");

var socket = io("/");

function sendMessage(message) {
  socket.emit("newMessage", {
    message: message
  });
  console.log("You: ".concat(message));
}

function setNickname(nickname) {
  socket.emit("setNickname", {
    nickname: nickname
  });
}

socket.on("messageNotif", _chat.handleMessageNotif);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfM2ZjODljOGIuanMiXSwibmFtZXMiOlsic29ja2V0IiwiaW8iLCJzZW5kTWVzc2FnZSIsIm1lc3NhZ2UiLCJlbWl0IiwiY29uc29sZSIsImxvZyIsInNldE5pY2tuYW1lIiwibmlja25hbWUiLCJvbiIsImhhbmRsZU1lc3NhZ2VOb3RpZiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLEVBQUUsQ0FBQyxHQUFELENBQWpCOztBQUVBLFNBQVNDLFdBQVQsQ0FBcUJDLE9BQXJCLEVBQThCO0FBQzVCSCxFQUFBQSxNQUFNLENBQUNJLElBQVAsQ0FBWSxZQUFaLEVBQTBCO0FBQUVELElBQUFBLE9BQU8sRUFBRUE7QUFBWCxHQUExQjtBQUNBRSxFQUFBQSxPQUFPLENBQUNDLEdBQVIsZ0JBQW9CSCxPQUFwQjtBQUNEOztBQUVELFNBQVNJLFdBQVQsQ0FBcUJDLFFBQXJCLEVBQStCO0FBQzdCUixFQUFBQSxNQUFNLENBQUNJLElBQVAsQ0FBWSxhQUFaLEVBQTJCO0FBQUVJLElBQUFBLFFBQVEsRUFBUkE7QUFBRixHQUEzQjtBQUNEOztBQUVEUixNQUFNLENBQUNTLEVBQVAsQ0FBVSxjQUFWLEVBQTBCQyx3QkFBMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoYW5kbGVNZXNzYWdlTm90aWYgfSBmcm9tIFwiLi9jaGF0XCI7XHJcblxyXG5jb25zdCBzb2NrZXQgPSBpbyhcIi9cIik7XHJcblxyXG5mdW5jdGlvbiBzZW5kTWVzc2FnZShtZXNzYWdlKSB7XHJcbiAgc29ja2V0LmVtaXQoXCJuZXdNZXNzYWdlXCIsIHsgbWVzc2FnZTogbWVzc2FnZSB9KTtcclxuICBjb25zb2xlLmxvZyhgWW91OiAke21lc3NhZ2V9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldE5pY2tuYW1lKG5pY2tuYW1lKSB7XHJcbiAgc29ja2V0LmVtaXQoXCJzZXROaWNrbmFtZVwiLCB7IG5pY2tuYW1lIH0pO1xyXG59XHJcblxyXG5zb2NrZXQub24oXCJtZXNzYWdlTm90aWZcIiwgaGFuZGxlTWVzc2FnZU5vdGlmKTtcclxuIl19
},{"./chat":1}]},{},[2])