import { Router } from "express";
import { textController } from "../Controllers/gemini.controller";
import { autenticar_token } from "../middlewares/auth.middleware";

const router_gemini: Router = Router();

router_gemini.use(autenticar_token);
router_gemini.post("/ai/generate", textController);

export default router_gemini;