import { FastifyInstance } from "fastify";
import * as EstoqueController from "../Controllers/estoque.controller";

export default async function router_estoque(app: FastifyInstance) {

    app.post("/", EstoqueController.post_estoque);
    app.get("/", EstoqueController.get_estoques);
    app.get("/:id", EstoqueController.get_estoque);
    app.put("/:id", EstoqueController.put_estoque);
    app.delete("/:id", EstoqueController.delete_estoque);
};