import { Router } from "express";
import { get_categoria, get_categorias } from "../Controllers/categoria.controller";
import { post_categoria } from "../Controllers/categoria.controller";
import { put_categoria } from "../Controllers/categoria.controller";
import { delete_categoria } from "../Controllers/categoria.controller";

const router_categoria = Router();

router_categoria.get(`/`, get_categorias);
router_categoria.get(`/:id`, get_categoria);
router_categoria.post(`/`, post_categoria);
router_categoria.put(`/:id`, put_categoria);
router_categoria.delete(`/:id`, delete_categoria);

export default router_categoria;