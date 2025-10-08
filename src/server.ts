import app from "./app";
import { conect_mongo } from "./Mongo/mongo";
import http from "http";
import { set_up_socket } from "./config/socket";

const port: string = process.env.PORT as string;
const server = http.createServer(app);
set_up_socket(server);

conect_mongo().then((): void => {
    
    server.listen(port, (): void => console.log(`Servidor HTTP rodando com sucesso`));
});