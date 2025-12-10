import { FastifyInstance } from "fastify";
import { get_marcas, get_marca } from "../Controllers/marcas.controller";
import { post_marca } from "../Controllers/marcas.controller";
import { put_marca } from "../Controllers/marcas.controller";
import { delete_marca } from "../Controllers/marcas.controller";

export default async function router_marca(app: FastifyInstance) {

    app.get(`/`, get_marcas);
    app.get(`/:id`, get_marca);
    app.post(`/`, post_marca);
    app.put(`/:id`, put_marca);
    app.delete(`/:id`, delete_marca);
};