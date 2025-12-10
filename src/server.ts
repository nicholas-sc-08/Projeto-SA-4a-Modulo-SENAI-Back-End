import app from "./app";
import { conect_mongo } from "./Mongo/mongo";
import http from "http";
import { set_up_socket } from "./config/socket";

const port: string = process.env.PORT as string;

conect_mongo().then((): void => {

    app.listen({ port: Number(port) }, (): void => console.log(`Servidor HTTP rodando com sucesso`));
});