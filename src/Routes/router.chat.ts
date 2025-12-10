import { FastifyInstance } from "fastify";
import { get_chats, get_chat } from "../Controllers/chat.controller";
import { post_chat } from "../Controllers/chat.controller";
import { put_chat } from "../Controllers/chat.controller";
import { delete_chat } from "../Controllers/chat.controller";
import { autenticar_token } from "../middlewares/auth.middleware";
import { GetId } from "../types/IFastify";
import { ICreateChat, IUpdateChat } from "../types/IChat.types";

export default async function router_chat(app: FastifyInstance) {

    app.get(`/`, { preHandler: autenticar_token }, get_chats);
    app.get<{ Params: GetId }>(`/:id`, { preHandler: autenticar_token }, get_chat);
    app.post<{ Body: ICreateChat }>(`/`, { preHandler: autenticar_token }, post_chat);
    app.put<{ Params: GetId, Body: IUpdateChat }>(`/:id`, { preHandler: autenticar_token }, put_chat);
    app.delete<{ Params: GetId }>(`/:id`, { preHandler: autenticar_token }, delete_chat)
};