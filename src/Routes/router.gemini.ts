import { FastifyInstance } from "fastify";
import { textController } from "../Controllers/gemini.controller";
import { autenticar_token } from "../middlewares/auth.middleware";

export default async function router_gemini(app: FastifyInstance) {

    app.post("/ai/generate", { preHandler: autenticar_token }, textController);
};