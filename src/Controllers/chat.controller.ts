import { FastifyRequest, FastifyReply } from "fastify";
import { chat_schema, chat_update_schema } from "../Services/Chat/chat.validation";
import * as chatServices from "../Services/Chat/chat.service";
import { GetId } from "../types/IFastify";

export async function get_chats(req: FastifyRequest, reply: FastifyReply) {

    try {

        const chats = await chatServices.buscar_chats();

        if (!chats) {

            reply.status(404).send({ message: `Chats não foram encontrados!` });
        } else {

            reply.status(200).send(chats);
        };

    } catch (erro: any) {

        reply.status(500).send({ message: erro.message });
    };
};

export async function get_chat(req: FastifyRequest<{ Params: GetId }>, reply: FastifyReply) {

    try {

        const { id } = req.params;
        const chat = await chatServices.buscar_chat_pelo_id(String(id));

        if (!chat) {

            reply.status(200).send(chat);
        };

    } catch (erro: any) {

        reply.status(500).send({ message: erro.message });
    };
};

export async function post_chat(req: FastifyRequest, reply: FastifyReply) {

    try {

        const data = req.body;
        const chat_validado = chat_schema.parse(data);

        if (!chat_validado) {

            reply.status(401).send({ message: `Chat não está válido para cadastro!` });
        } else {

            const chat_criado = await chatServices.cadastrar_chat(chat_validado);
            reply.status(201).send(chat_criado);
        };

    } catch (erro: any) {

        reply.status(500).send({ message: erro.message });
    };
};

export async function put_chat(req: FastifyRequest<{ Params: GetId }>, reply: FastifyReply) {

    try {

        const { id } = req.params;
        const data = req.body;
        const chat_validado = chat_update_schema.parse(data);

        if (!chat_validado) {

            reply.status(401).send({ message: `Formato inválido para atualizar!` });
        } else {

            const chat_atualizado = await chatServices.atualizar_chat(String(id), chat_validado);
            reply.status(200).send(chat_atualizado);
        };

    } catch (erro: any) {

        reply.status(500).send({ message: erro.message });
    };
};

export async function delete_chat(req: FastifyRequest<{ Params: GetId }>, reply: FastifyReply) {

    try {

        const { id } = req.params;
        await chatServices.deletar_chat(String(id));
        reply.status(200).send({ message: `Chat deletado com sucesso!` });

    } catch (erro: any) {

        reply.status(500).send({ message: erro.message });
    };
};