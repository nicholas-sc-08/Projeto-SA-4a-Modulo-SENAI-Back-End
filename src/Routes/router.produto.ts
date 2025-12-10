import { Router } from "express";
import { get_produtos, get_produto_id } from "../Controllers/produto.controller";
import { post_produto } from "../Controllers/produto.controller";
import { put_produto } from "../Controllers/produto.controller";
import { delete_produto } from "../Controllers/produto.controller";
import { autenticar_token } from "../middlewares/auth.middleware";
import { FastifyInstance } from "fastify";
import { GetId } from "../types/IFastify";
import { IUpdateProduto } from "../types/IProduto.types";

export default async function router_produto(app: FastifyInstance) {

    app.get(`/`, get_produtos);
    app.get<{ Params: GetId }>(`/:id`, { preHandler: autenticar_token }, get_produto_id);
    app.post(`/`, { preHandler: autenticar_token }, post_produto);
    app.put<{ Params: GetId, Body: IUpdateProduto }>(`/:id`, { preHandler: autenticar_token }, put_produto);
    app.delete<{ Params: GetId }>(`/:id`, { preHandler: autenticar_token }, delete_produto);
};