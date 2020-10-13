import events from "./events";

const socketController = (socket) => {
  socket.on("newMessage", ({ message }) => {
    socket.broadcast.emit("messageNotifi", {
      message,
      nickname: socket.nickname || "Anon",
    });
  });
  socket.on(events.setNickname, ({ nickname }) => {
    console.log(nickname);
    socket.nickname = nickname;
  });
};

export default socketController;
