import { Router } from "express";
import { get_sacola_brecho, get_sacolas_brechos } from "../Controllers/sacola_brecho.controller";
import { post_sacola_brecho } from "../Controllers/sacola_brecho.controller";
import { put_sacola_brecho } from "../Controllers/sacola_brecho.controller";
import { delete_sacola_brecho } from "../Controllers/sacola_brecho.controller";

const router_sacola_brecho = Router();

router_sacola_brecho.get(`/`, get_sacolas_brechos);
router_sacola_brecho.get(`/:id`, get_sacola_brecho);
router_sacola_brecho.post(`/`, post_sacola_brecho);
router_sacola_brecho.put(`/:id`, put_sacola_brecho);
router_sacola_brecho.delete(`/:id`, delete_sacola_brecho);

export default router_sacola_brecho;