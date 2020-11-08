import { disableChat, enableChat } from "./chat";
import {
  disableCanvas,
  enableCanvas,
  hideControls,
  resetCanvas,
  showContorls,
} from "./paint";

const board = document.getElementById("jsPBoard");
const title = document.getElementById("jsTitle");
const timer = document.getElementById("jsTimer");

const addPlayers = (players) => {
  board.innerHTML = "";
  players.forEach((player) => {
    const playerElement = document.createElement("span");
    playerElement.innerText = `${player.nickname}: ${player.point}`;
    board.appendChild(playerElement);
  });
};

const setTitle = (text) => {
  title.innerText = text;
};

export const handlePlayerUpdate = ({ sockets }) => addPlayers(sockets);
export const handleGameStarted = () => {
  setTitle("It's a game where you match answers through chat!");
  disableCanvas();
  hideControls();
};
export const handlePainterNotif = ({ word }) => {
  setTitle(`You are painter, paint: ${word}`);
  enableCanvas();
  showContorls();
  disableChat();
};

export const handleGameEnded = () => {
  setTitle("Game ended.");
  disableCanvas();
  hideControls();
  enableChat();
  resetCanvas();
};

export const handleGameStarting = () => {
  setTitle("Game will start soon...");
};

export const handleCurrentTime = ({ time }) => {
  timer.innerText = time;
};
