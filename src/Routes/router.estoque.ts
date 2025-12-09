import { Router } from "express";
import * as EstoqueController from "../Controllers/estoque.controller";
import { autenticar_token } from "../middlewares/auth.middleware";

const router_estoque = Router();

router_estoque.post("/", EstoqueController.post_estoque);
router_estoque.get("/", EstoqueController.get_estoques);
router_estoque.get("/:id", EstoqueController.get_estoque);
router_estoque.put("/:id", EstoqueController.put_estoque);
router_estoque.delete("/:id", EstoqueController.delete_estoque);

export default router_estoque;