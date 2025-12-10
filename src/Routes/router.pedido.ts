import { Router } from "express";
import { delete_pedido, get_pedido, get_pedidos, post_pedido, put_pedido } from "../Controllers/pedido.controller";
import { autenticar_token } from "../middlewares/auth.middleware";
import { FastifyInstance } from "fastify";
import { GetId } from "../types/IFastify";
import { IPayload, IPayloadUpdate } from "../types/IPayload.types";

export default async function router_pedido(app: FastifyInstance) {

    app.get(`/`, { preHandler: autenticar_token }, get_pedidos);
    app.get<{ Params: GetId }>(`/:id`, { preHandler: autenticar_token }, get_pedido);
    app.post<{ Body: IPayload }>(`/`, { preHandler: autenticar_token }, post_pedido);
    app.put<{ Params: GetId, Body: IPayloadUpdate }>(`/:id`, { preHandler: autenticar_token }, put_pedido);
    app.delete<{ Params: GetId }>(`/:id`, { preHandler: autenticar_token }, delete_pedido);
};