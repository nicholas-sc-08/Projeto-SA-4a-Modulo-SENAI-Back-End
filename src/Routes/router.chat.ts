import { Router } from "express";
import { get_chats, get_chat } from "../Controllers/chat.controller";
import { post_chat } from "../Controllers/chat.controller";
import { put_chat } from "../Controllers/chat.controller";
import { delete_chat } from "../Controllers/chat.controller";

const router_chat = Router();

router_chat.get(`/`, get_chats);
router_chat.get(`/:id`, get_chat);
router_chat.post(`/`, post_chat);
router_chat.put(`/:id`, put_chat);
router_chat.delete(`/:id`, delete_chat);

export default router_chat;