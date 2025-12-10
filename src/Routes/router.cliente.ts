import { FastifyInstance } from "fastify";
import { get_clientes, get_cliente_id } from "../Controllers/cliente.controller";
import { post_cliente } from "../Controllers/cliente.controller";
import { put_cliente } from "../Controllers/cliente.controller";
import { delete_cliente } from "../Controllers/cliente.controller";
import { autenticar_token } from "../middlewares/auth.middleware";
import { GetId } from "../types/IFastify";
import { ICreateCliente, IUpdateCliente } from "../types/ICliente.types";

export default async function router_cliente(app: FastifyInstance) {

    app.get(`/`, get_clientes);
    app.get<{ Params: GetId }>(`/:id`, { preHandler: autenticar_token }, get_cliente_id);
    app.post<{ Body: ICreateCliente }>(`/`, { preHandler: autenticar_token }, post_cliente);
    app.put<{ Params: GetId, Body: IUpdateCliente }>(`/:id`, { preHandler: autenticar_token }, put_cliente);
    app.delete<{ Params: GetId }>(`/:id`, { preHandler: autenticar_token }, delete_cliente);
};