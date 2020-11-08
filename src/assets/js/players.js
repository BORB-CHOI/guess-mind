import { disableChat, enableChat } from "./chat";
import {
  disableCanvas,
  enableCanvas,
  hideControls,
  resetCanvas,
  showContorls,
} from "./paint";

const board = document.getElementById("jsPBoard");
const notifs = document.getElementById("jsNotifs");

const addPlayers = (players) => {
  board.innerHTML = "";
  players.forEach((player) => {
    const playerElement = document.createElement("span");
    playerElement.innerText = `${player.nickname}: ${player.point}`;
    board.appendChild(playerElement);
  });
};

const setNotifs = (text) => {
  notifs.innerText = text;
};

export const handlePlayerUpdate = ({ sockets }) => addPlayers(sockets);
export const handleGameStarted = () => {
  setNotifs("");
  disableCanvas();
  hideControls();
};
export const handlePainterNotif = ({ word }) => {
  setNotifs(`You are painter, paint: ${word}`);
  enableCanvas();
  showContorls();
  disableChat();
};

export const handleGameEnded = () => {
  setNotifs("Game ended");
  disableCanvas();
  hideControls();
  enableChat();
  resetCanvas();
};

export const handleGameStarting = () => {
  setNotifs("Game will start soon");
};
