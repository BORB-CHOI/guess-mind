import { join } from "path";
import express from "express";
import socketIO from "socket.io";

const PORT = 2002;

const app = express();
app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));

app.use(express.static(join(__dirname, "static")));

app.get("/", (req,res) => res.render("home"));

const handleListening = () =>
console.log(`✅ Server running: http://localhost:${PORT}`);

const HTTPserver = app.listen(PORT, handleListening);

const io = socketIO(HTTPserver);