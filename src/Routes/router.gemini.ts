import { Router } from "express";
import { textController } from "../Controllers/gemini.controller";

const router_gemini: Router = Router();

router_gemini.post("/ai/generate", textController);

export default router_gemini;