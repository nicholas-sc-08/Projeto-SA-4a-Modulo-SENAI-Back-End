import { Router } from "express";
import { get_brecho, get_brechos } from "../Controllers/brecho.controller";
import { post_brecho } from "../Controllers/brecho.controller";
import { put_brecho } from "../Controllers/brecho.controller";
import { delete_brecho } from "../Controllers/brecho.controller";
import { autenticar_token } from "../middlewares/auth.middleware";


const router_brecho = Router();

router_brecho.post(`/`, post_brecho);
router_brecho.get(`/`, get_brechos);
router_brecho.get(`/:id`, get_brecho);
router_brecho.use(autenticar_token);
router_brecho.put(`/:id`, put_brecho);
router_brecho.delete(`/:id`, delete_brecho);

export default router_brecho;