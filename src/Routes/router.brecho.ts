import { get_brecho, get_brechos } from "../Controllers/brecho.controller";
import { post_brecho } from "../Controllers/brecho.controller";
import { put_brecho } from "../Controllers/brecho.controller";
import { delete_brecho } from "../Controllers/brecho.controller";
import { autenticar_token } from "../middlewares/auth.middleware";
import { FastifyInstance } from "fastify";
import { ICreateBrecho, IUpdateBrecho } from "../types/IBrecho.types";
import { GetId } from "../types/IFastify";

export default async function router_brecho(app: FastifyInstance) {

    app.get(`/`, get_brechos);
    app.get<{ Params: GetId }>(`/:id`, { preHandler: autenticar_token }, get_brecho);
    app.post<{ Body: ICreateBrecho }>(`/`, post_brecho);
    app.put<{ Params: GetId, Body: IUpdateBrecho }>(`/:id`, { preHandler: autenticar_token }, put_brecho);
    app.delete<{ Params: GetId }>(`/:id`, { preHandler: autenticar_token }, delete_brecho);
};