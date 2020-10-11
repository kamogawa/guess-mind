(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleMessageNotification = handleMessageNotification;

function handleMessageNotification(data) {
  var message = data.message,
      nickname = data.nickname;
  console.log("".concat(nickname, ": ").concat(message));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsiaGFuZGxlTWVzc2FnZU5vdGlmaWNhdGlvbiIsImRhdGEiLCJtZXNzYWdlIiwibmlja25hbWUiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQU8sU0FBU0EseUJBQVQsQ0FBbUNDLElBQW5DLEVBQXlDO0FBQUEsTUFDdENDLE9BRHNDLEdBQ2hCRCxJQURnQixDQUN0Q0MsT0FEc0M7QUFBQSxNQUM3QkMsUUFENkIsR0FDaEJGLElBRGdCLENBQzdCRSxRQUQ2QjtBQUU5Q0MsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLFdBQWVGLFFBQWYsZUFBNEJELE9BQTVCO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gaGFuZGxlTWVzc2FnZU5vdGlmaWNhdGlvbihkYXRhKSB7XG4gIGNvbnN0IHsgbWVzc2FnZSwgbmlja25hbWUgfSA9IGRhdGE7XG4gIGNvbnNvbGUubG9nKGAke25pY2tuYW1lfTogJHttZXNzYWdlfWApO1xufVxuIl19
},{}],2:[function(require,module,exports){
"use strict";

var _chat = require("./chat");

/* eslint-disable prettier/prettier */

/* eslint-disable no-undef */
var socket = io("/");

function sendMessage(message) {
  socket.emit("newMessage", {
    message: message
  });
  console.log("You: ".concat(message));
}

function setNickName(nickname) {
  socket.emit("setNickname", {
    nickname: nickname
  });
}

socket.on("messageNotifi", _chat.handleMessageNotification);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfYTMwNTEwMzAuanMiXSwibmFtZXMiOlsic29ja2V0IiwiaW8iLCJzZW5kTWVzc2FnZSIsIm1lc3NhZ2UiLCJlbWl0IiwiY29uc29sZSIsImxvZyIsInNldE5pY2tOYW1lIiwibmlja25hbWUiLCJvbiIsImhhbmRsZU1lc3NhZ2VOb3RpZmljYXRpb24iXSwibWFwcGluZ3MiOiI7O0FBRUE7O0FBRkE7O0FBQ0E7QUFHQSxJQUFNQSxNQUFNLEdBQUdDLEVBQUUsQ0FBQyxHQUFELENBQWpCOztBQUVBLFNBQVNDLFdBQVQsQ0FBcUJDLE9BQXJCLEVBQThCO0FBQzVCSCxFQUFBQSxNQUFNLENBQUNJLElBQVAsQ0FBWSxZQUFaLEVBQTBCO0FBQUVELElBQUFBLE9BQU8sRUFBUEE7QUFBRixHQUExQjtBQUNBRSxFQUFBQSxPQUFPLENBQUNDLEdBQVIsZ0JBQW9CSCxPQUFwQjtBQUNEOztBQUVELFNBQVNJLFdBQVQsQ0FBcUJDLFFBQXJCLEVBQStCO0FBQzdCUixFQUFBQSxNQUFNLENBQUNJLElBQVAsQ0FBWSxhQUFaLEVBQTJCO0FBQUVJLElBQUFBLFFBQVEsRUFBUkE7QUFBRixHQUEzQjtBQUNEOztBQUVEUixNQUFNLENBQUNTLEVBQVAsQ0FBVSxlQUFWLEVBQTJCQywrQkFBM0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBwcmV0dGllci9wcmV0dGllciAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbmltcG9ydCB7IGhhbmRsZU1lc3NhZ2VOb3RpZmljYXRpb24gfSBmcm9tIFwiLi9jaGF0XCJcblxuY29uc3Qgc29ja2V0ID0gaW8oXCIvXCIpO1xuXG5mdW5jdGlvbiBzZW5kTWVzc2FnZShtZXNzYWdlKSB7XG4gIHNvY2tldC5lbWl0KFwibmV3TWVzc2FnZVwiLCB7IG1lc3NhZ2UgfSk7XG4gIGNvbnNvbGUubG9nKGBZb3U6ICR7bWVzc2FnZX1gKVxufVxuXG5mdW5jdGlvbiBzZXROaWNrTmFtZShuaWNrbmFtZSkge1xuICBzb2NrZXQuZW1pdChcInNldE5pY2tuYW1lXCIsIHsgbmlja25hbWUgfSlcbn1cblxuc29ja2V0Lm9uKFwibWVzc2FnZU5vdGlmaVwiLCBoYW5kbGVNZXNzYWdlTm90aWZpY2F0aW9uKVxuIl19
},{"./chat":1}]},{},[2])