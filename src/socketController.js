import events from "../events";

const socketController = (socket) => {
  socket.on(events.setNickname, ({ nickname }) => {
    console.log(nickname);
    // eslint-disable-next-line no-param-reassign
    socket.nickname = nickname;
  });
};

export default socketController;
