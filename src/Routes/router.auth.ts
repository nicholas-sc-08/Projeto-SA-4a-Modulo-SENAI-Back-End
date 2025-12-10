import { FastifyInstance } from "fastify";
import { login } from "../Controllers/auth.controller";

export default async function router_auth(app: FastifyInstance){

    app.get("/login", login);
};