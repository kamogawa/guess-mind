import events from "./events";

const socketController = (socket) => {
  socket.on("newMessage", ({ message }) => {
    socket.broadcast.emit("messageNotifi", {
      message,
      nickname: socket.nickname || "Anon",
    });
  });
  socket.on(events.setNickname, ({ nickname }) => {
    socket.nickname = nickname;
    socket.broadcast.emit(events.newUser, { nickname });
  });
};

export default socketController;
