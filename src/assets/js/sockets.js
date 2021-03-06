import { handleDisconnected, handleNewUser } from "./notifications";
import { handleNewMessage } from "./chat";
import { handleBeganPath, handleFilled, handleStrokedPath } from "./paint";
import {
  handleCurrentTime,
  handleGameEnded,
  handleGameStarted,
  handleGameStarting,
  handlePainterNotif,
  handlePlayerUpdate,
} from "./players";

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
  socket.on(events.playerUpdate, handlePlayerUpdate);
  socket.on(events.gameStarted, handleGameStarted);
  socket.on(events.painterNotif, handlePainterNotif);
  socket.on(events.gameEnded, handleGameEnded);
  socket.on(events.gameStarting, handleGameStarting);
  socket.on(events.currentTime, handleCurrentTime);
};

export const getSocket = () => socket;
