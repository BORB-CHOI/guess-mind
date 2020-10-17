import { join } from "path";
import express from "express";
import socketIO from "socket.io";
import logger from "morgan";

const PORT = 2002;

const app = express();
app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));

app.use(logger("dev"));
app.use(express.static(join(__dirname, "static")));

app.get("/", (req,res) => res.render("home"));

const handleListening = () =>
console.log(`✅ Server running: http://localhost:${PORT}`);

const HTTPserver = app.listen(PORT, handleListening);

const io = socketIO.listen(HTTPserver); //서버에 socketIO를 올림 그리고 이벤트를 사용하기 위해 변수에 저장

// let sockets = [];

io.on("connection", (socket) => {
    // sockets.push(socket.id);
    setTimeout(() => socket.broadcast.emit("hello"), 5000);
    socket.on("helloServer", () => console.log("The client said hello."));
}); 

// setInterval(() => console.log(sockets), 1000);
