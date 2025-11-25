import { Router } from "express";
import { get_endereco, get_enderecos } from "../Controllers/endereco.controller";
import { post_endereco } from "../Controllers/endereco.controller";
import { put_endereco } from "../Controllers/endereco.controller";
import { delete_endereco } from "../Controllers/endereco.controller";

const router_endereco = Router();

router_endereco.get(`/`, get_enderecos);
router_endereco.get(`/:id`, get_endereco);
router_endereco.post(`/`, post_endereco);
router_endereco.put(`/:id`, put_endereco);
router_endereco.delete(`/:id`, delete_endereco);

export default router_endereco;