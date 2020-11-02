import { handleDisconnected, handleNewUser } from "./notifications";
import { handleNewMessage } from "./chat";
import { handleBeganPath, handleFilled, handleStrokedPath } from "./paint";

let socket = null;

export const initSockets = (_socket) => {
  const { events } = window;
  socket = _socket;
  socket.on(events.newUser, handleNewUser);
  socket.on(events.disconnected, handleDisconnected);
  socket.on(events.newMsg, handleNewMessage);
  socket.on(events.beganPath, handleBeganPath);
  socket.on(events.strokedPath, handleStrokedPath);
  socket.on(events.filled, handleFilled);
};

export const getSocket = () => socket;
