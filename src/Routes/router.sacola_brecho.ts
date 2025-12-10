import { FastifyInstance } from "fastify";
import { get_sacola_brecho, get_sacolas_brechos } from "../Controllers/sacola_brecho.controller";
import { post_sacola_brecho } from "../Controllers/sacola_brecho.controller";
import { put_sacola_brecho } from "../Controllers/sacola_brecho.controller";
import { delete_sacola_brecho } from "../Controllers/sacola_brecho.controller";
import { autenticar_token } from "../middlewares/auth.middleware";
import { GetId } from "../types/IFastify";
import { ICreateSacolaBrecho, IUpdateSacolaBrecho } from "../types/ISacola.types";

export default async function router_sacola_brecho(app: FastifyInstance) {

    app.get(`/`, { preHandler: autenticar_token }, get_sacolas_brechos);
    app.get<{ Params: GetId }>(`/:id`, { preHandler: autenticar_token }, get_sacola_brecho);
    app.post<{ Body: ICreateSacolaBrecho }>(`/`, { preHandler: autenticar_token }, post_sacola_brecho);
    app.put<{ Params: GetId, Body: IUpdateSacolaBrecho }>(`/:id`, { preHandler: autenticar_token }, put_sacola_brecho);
    app.delete<{ Params: GetId }>(`/:id`, { preHandler: autenticar_token }, delete_sacola_brecho);
};