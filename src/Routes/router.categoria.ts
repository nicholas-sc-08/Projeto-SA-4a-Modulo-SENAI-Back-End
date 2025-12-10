import { FastifyInstance } from "fastify";
import { get_categoria, get_categorias } from "../Controllers/categoria.controller";
import { post_categoria } from "../Controllers/categoria.controller";
import { put_categoria } from "../Controllers/categoria.controller";
import { delete_categoria } from "../Controllers/categoria.controller";

export default async function router_categoria(app: FastifyInstance){

    app.get(`/`, get_categorias);
    app.get(`/:id`, get_categoria);
    app.post(`/`, post_categoria);
    app.put(`/:id`, put_categoria);
    app.delete(`/:id`, delete_categoria);
};