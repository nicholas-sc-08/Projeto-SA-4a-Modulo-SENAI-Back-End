import { Router } from "express";
import { login } from "../Controllers/auth.controller";

const router_auth: Router = Router();
router_auth.post("/login", login);

export default router_auth;