import http from "http";
import { Server } from "socket.io";
import app from "./app";
import { connectDb, disconnectDb } from "./db";

const port = parseInt(process.env.PORT || "3000");

const server = http.createServer(app);


const io = new Server(server,{
	cors: {
	origin: "http://localhost:3000",
	},
  });

let count=0;
io.on("connection", (socket) => {
	count++;
// console.log("someone connected");
io.emit("incomingUsers",count);
socket.on("disconnect",()=>{
	count--;
	io.emit("incomingUsers",count);
	// console.log("someone left");
});
	});

server.on("listening", () => {
	const addr = server.address();
	const bind = typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`;
	// eslint-disable-next-line no-console
	console.log(`Listening on ${bind}`);
});

process.on("SIGTERM", () => server.close(() => disconnectDb()));

connectDb().then(() => server.listen(port));
