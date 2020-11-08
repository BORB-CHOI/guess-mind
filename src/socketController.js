import chooseWord from "./words";
import events from "./events";

let sockets = [];
let inProgress = false;
let painter = null;
let word = null;
let timeout = null;
let interval = null;
let time = 60;

const choosePainter = () => sockets[Math.floor(Math.random() * sockets.length)];

const socketController = (socket, io) => {
  const broadcast = (event, data) => socket.broadcast.emit(event, data);

  const superBroadcast = (event, data) => io.emit(event, data);

  const sendPlayerUpdate = () =>
    superBroadcast(events.playerUpdate, { sockets });

  const sendTime = () => {
    superBroadcast(events.currentTime, { time });
    time -= 1;
  };

  const startGame = () => {
    if (sockets.length > 1) {
      if (inProgress === false) {
        if (timeout) {
          clearTimeout(timeout);
        }
        if (interval) {
          clearInterval(interval);
          time = 60;
        }
        inProgress = true;
        painter = choosePainter();
        word = chooseWord();
        superBroadcast(events.gameStarting);
        setTimeout(() => {
          sendTime();
          superBroadcast(events.gameStarted);
          io.to(painter.id).emit(events.painterNotif, { word });
          // eslint-disable-next-line no-use-before-define
          timeout = setTimeout(endGame, 61000);
          interval = setInterval(sendTime, 1000);
        }, 5000);
      }
    }
  };

  const endGame = () => {
    inProgress = false;
    superBroadcast(events.gameEnded);
    if (timeout) {
      clearTimeout(timeout);
    }
    if (interval) {
      clearInterval(interval);
      time = 60;
    }
    setTimeout(() => startGame(), 2000);
  };

  const addPoints = (id) => {
    sockets = sockets.map((_socket) => {
      if (_socket.id === id) {
        _socket.point += 10;
      }
      return _socket;
    });
    sendPlayerUpdate();
    endGame();
  };

  // Set Nickname

  socket.on(events.setNickname, ({ nickname }) => {
    socket.nickname = nickname;
    sockets.push({ id: socket.id, point: 0, nickname });
    broadcast(events.newUser, { nickname });
    sendPlayerUpdate();
    setTimeout(() => startGame(), 2000);
  });

  // Disconnect

  socket.on(events.disconnect, () => {
    sockets = sockets.filter((_socket) => _socket.id !== socket.id);
    broadcast(events.disconnected, { nickname: socket.nickname });
    sendPlayerUpdate();
    if (sockets.length === 1) {
      endGame();
    } else if (painter) {
      if (socket.id === painter.id) {
        endGame();
      }
    }
  });

  // Send Message

  socket.on(events.sendMsg, ({ message }) => {
    if (message === word) {
      superBroadcast(events.newMsg, {
        message: `Winner is ${socket.nickname}, word was '${word}'`,
        nickname: "Bot",
      });
      addPoints(socket.id);
    } else {
      broadcast(events.newMsg, { message, nickname: socket.nickname });
    }
  });

  // Begin Path

  socket.on(events.beginPath, ({ x, y }) =>
    broadcast(events.beganPath, { x, y })
  );

  // Stroke Path

  socket.on(events.strokePath, ({ x, y, color }) =>
    broadcast(events.strokedPath, { x, y, color })
  );

  // Fill

  socket.on(events.fill, ({ color }) => broadcast(events.filled, { color }));
};

export default socketController;
