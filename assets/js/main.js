/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import { handleMessageNotification } from "./chat"

const socket = io("/");

function sendMessage(message) {
  socket.emit("newMessage", { message });
  console.log(`You: ${message}`)
}

function setNickName(nickname) {
  socket.emit("setNickname", { nickname })
}

socket.on("messageNotifi", handleMessageNotification)
