import { Router } from "express";
import { get_pedidos, post_pedido } from "../Controllers/pedido.controller";

const router_pedido = Router();

router_pedido.get(`/`, get_pedidos);
router_pedido.post(`/`, post_pedido);

export default router_pedido;