import { Router } from "express";
import { get_clientes, get_cliente_id } from "../Controllers/cliente.controller";
import { post_cliente } from "../Controllers/cliente.controller";
import { put_cliente } from "../Controllers/cliente.controller";
import { delete_cliente } from "../Controllers/cliente.controller";
import { autenticar_token } from "../middlewares/auth.middleware";

const router_cliente = Router();

router_cliente.get(`/`, get_clientes);
router_cliente.get(`/:id`, get_cliente_id);
router_cliente.post(`/`, post_cliente);
router_cliente.use(autenticar_token);
router_cliente.put(`/:id`, put_cliente);
router_cliente.delete(`/:id`, delete_cliente);

export default router_cliente;