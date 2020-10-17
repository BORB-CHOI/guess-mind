const socket = io("/");

socket.on("hello", () => console.log("Somebody said hello"));
setTimeout(() => socket.emit("helloServer"), 4000); 