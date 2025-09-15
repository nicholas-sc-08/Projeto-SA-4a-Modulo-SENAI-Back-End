import { Router } from "express";
import { post_pedido } from "../Controllers/pedido.controller";

const router_pedido = Router();

router_pedido.post(`/`, post_pedido);

export default router_pedido;