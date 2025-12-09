import { Router } from "express";
import { get_produtos, get_produto_id } from "../Controllers/produto.controller";
import { post_produto } from "../Controllers/produto.controller";
import { put_produto } from "../Controllers/produto.controller";
import { delete_produto } from "../Controllers/produto.controller";
import { autenticar_token } from "../middlewares/auth.middleware";

const router_produto = Router();

router_produto.get(`/`, get_produtos);
router_produto.use(autenticar_token);
router_produto.get(`/:id`, get_produto_id);
router_produto.post(`/`, post_produto);
router_produto.put(`/:id`, put_produto);
router_produto.delete(`/:id`, delete_produto);

export default router_produto;