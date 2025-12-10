import { FastifyInstance } from "fastify";
import { get_endereco, get_enderecos } from "../Controllers/endereco.controller";
import { post_endereco } from "../Controllers/endereco.controller";
import { put_endereco } from "../Controllers/endereco.controller";
import { delete_endereco } from "../Controllers/endereco.controller";
import { autenticar_token } from "../middlewares/auth.middleware";
import { ICreateEndereco, IEndereco, IUpdateEndereco } from "../types/IEndereco.types";
import { GetId } from "../types/IFastify";

export default async function router_endereco(app: FastifyInstance) {

    app.get("/", { preHandler: autenticar_token }, get_enderecos);
    app.post<{ Body: ICreateEndereco }>("/", post_endereco);
    app.get<{ Params: GetId }>(`/:id`, { preHandler: autenticar_token }, get_endereco);
    app.put<{ Params: GetId, Body: IUpdateEndereco }>(`/:id`, { preHandler: autenticar_token }, put_endereco);
    app.delete<{ Params: GetId }>(`/:id`, { preHandler: autenticar_token }, delete_endereco);
};