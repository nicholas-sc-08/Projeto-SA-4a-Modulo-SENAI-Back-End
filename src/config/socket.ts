import { Server } from "socket.io";
import http from "http";

export function set_up_socket(server: http.Server) {

    const io = new Server(server, { cors: { origin: "http://localhost:3000/", methods: ["GET", "POST"] } });

    io.on("connection", socket => {

        console.log("Novo cliente conectado", socket.id);

        socket.on("mensagem", msg => {

            console.log("Mensagem recebida: ", msg);
            socket.broadcast.emit("mensagem", msg);
        });

        socket.on("disconnect", () => {

            console.log("Cliente desconectado", socket.id);
        });
        
        socket.on("enviar_mensagem", (mensagem) => {
            console.log("Mensagem recebida do frontend:", mensagem);

            // Envia para todos os clientes conectados, inclusive o remetente
            socket.broadcast.emit("receber_mensagem", mensagem);
        });
    });

    return io;
};