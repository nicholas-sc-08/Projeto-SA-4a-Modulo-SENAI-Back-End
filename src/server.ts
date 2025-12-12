import app from "./app";
import { conect_mongo } from "./Mongo/mongo";
import http from "http";

const port: number = Number(process.env.PORT);

conect_mongo().then((): void => {

    app.listen({ port, host: '0.0.0.0' }, (): void => console.log(`Servidor HTTP rodando com sucesso`));
});