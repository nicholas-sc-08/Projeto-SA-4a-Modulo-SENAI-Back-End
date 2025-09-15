import { Router } from "express";
import { get_pedido, get_pedidos, post_pedido, put_pedido } from "../Controllers/pedido.controller";

const router_pedido = Router();

router_pedido.get(`/`, get_pedidos);
router_pedido.get(`/:id`, get_pedido);
router_pedido.post(`/`, post_pedido);
router_pedido.put(`/:id`, put_pedido);

export default router_pedido;