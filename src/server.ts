import app from "./app";
import { conect_mongo } from "./Mongo/mongo";

const port: string = process.env.PORT as string;

conect_mongo().then((): void => {
    
    app.listen(port, (): void => console.log(`Servidor HTTP rodando com sucesso`));
});