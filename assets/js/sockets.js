import { handleDisconnected, handleNewUser } from "./notifications";

let socket = null;

export const getSocket = () => socket;

export const updateSocket = (_socket) => {
  socket = _socket;
};

export const initSockets = (_socket) => {
  const { events } = window;
  updateSocket(_socket);
  _socket.on(events.newUser, handleNewUser);
  _socket.on(events.disconnected, handleDisconnected);
};
