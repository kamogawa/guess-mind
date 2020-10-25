import { getSocket } from "./sockets";

const messages = document.getElementById("jsMessages");
const sendMsg = document.getElementById("jsSendMsg");

const appedMsg = (text, nickname) => {
  const li = document.createElement("li");
  li.innerHTML = `
    <span class="author ${nickname ? "out" : "slef"}">
    ${nickname ? nickname : "You"}
    </span>: ${text}
  `;
  messages.appendChild(li);
};

const handleSendMsg = (event) => {
  event.preventDefault();
  const input = sendMsg.querySelector("input");
  const { value } = input;
  getSocket().emit(window.events.sendMsg, { message: value });
  input.value = "";
  appedMsg(value);
};

export const handleNewMessage = ({ message, nickname }) => {
  appedMsg(message, nickname);
};

if (sendMsg) {
  sendMsg.addEventListener("submit", handleSendMsg);
}
