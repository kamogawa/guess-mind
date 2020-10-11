/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
const socket = io("/");

function sendMessage(message) {
  socket.emit("newMessage", { message });
  console.log(`You: ${message}`)
}

function setNickName(nickname) {
  socket.emit("setNickname", { nickname })
}

function handleMessageNotification(data) {
  const { message, nickname } = data;
  console.log(`${nickname}: ${message}`);
}

socket.on("messageNotifi", handleMessageNotification)
