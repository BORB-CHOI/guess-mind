import { join } from "path";
import express from "express";
import socketIO from "socket.io";
import logger from "morgan";
import socketController from "./socketController";
import events from "./events";

const PORT = 2002;

const app = express();
app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));

app.use(logger("dev"));
app.use(express.static(join(__dirname, "static")));

app.get("/", (req, res) =>
  res.render("home", { events: JSON.stringify(events) })
);

const handleListening = () =>
  console.log(`✅ Server running: http://localhost:${PORT}`);

const HTTPserver = app.listen(PORT, handleListening);

const io = socketIO.listen(HTTPserver); // 서버에 socketIO를 올림 그리고 이벤트를 사용하기 위해 변수에 저장

io.on("connection", (socket) => socketController(socket));
// 소켓은 객체이기 때문에 socket.potato 같이 이론적으로 추가적인 옵션(정보)를 담아 줄 수 있다.
