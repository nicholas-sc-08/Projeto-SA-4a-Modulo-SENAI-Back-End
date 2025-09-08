import { Router } from "express";
import { get_marcas, get_marca } from "../Controllers/marcas.controller";
import { post_marca } from "../Controllers/marcas.controller";
import { put_marca } from "../Controllers/marcas.controller";
import { delete_marca } from "../Controllers/marcas.controller";

const router_marca = Router();

router_marca.get(`/`, get_marcas);
router_marca.get(`/:id`, get_marca);
router_marca.post(`/`, post_marca);
router_marca.put(`/:id`, put_marca);
router_marca.delete(`/:id`, delete_marca);

export default router_marca;