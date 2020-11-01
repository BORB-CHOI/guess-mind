import { handleDisconnected, handleNewUser } from "./notifications";
import { handleNewMessage } from "./chat";

let socket = null;

export const updateSocket = (_socket) => {
  socket = _socket;
};

export const initSockets = (_socket) => {
  const { events } = window;
  updateSocket(_socket);
  _socket.on(events.newUser, handleNewUser);
  _socket.on(events.disconnected, handleDisconnected);
  _socket.on(events.newMsg, handleNewMessage);
};

export const getSocket = () => socket;
