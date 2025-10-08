import { Request, Response } from "express";
import { chat_schema, chat_update_schema } from "../Services/Chat/chat.validation";
import * as chatServices from "../Services/Chat/chat.service";

export async function get_chats(req: Request, res: Response) {

    try {

        const chats = await chatServices.buscar_chats();

        if (!chats) {

            res.status(404).json({ message: `Chats não foram encontrados!` });
        } else {

            res.status(200).json(chats);
        };

    } catch (erro: any) {

        res.status(500).json({ message: erro.message });
    };
};

export async function get_chat(req: Request, res: Response) {

    try {

        const { id } = req.params;
        const chat = await chatServices.buscar_chat_pelo_id(id);

        if (!chat) {

            res.status(200).json(chat);
        };

    } catch (erro: any) {

        res.status(500).json({ message: erro.message });
    };
};

export async function post_chat(req: Request, res: Response) {

    try {

        const data = req.body;
        const chat_validado = chat_schema.parse(data);

        if (!chat_validado) {

            res.status(401).json({ message: `Chat não está válido para cadastro!` });
        } else {

            const chat_criado = await chatServices.cadastrar_chat(chat_validado);
            res.status(201).json(chat_criado);
        };

    } catch (erro: any) {

        res.status(500).json({ message: erro.message });
    };
};

export async function put_chat(req: Request, res: Response) {

    try {

        const { id } = req.params;
        const data = req.body;
        const chat_validado = chat_update_schema.parse(data);

        if (!chat_validado) {

            res.status(401).json({ message: `Formato inválido para atualizar!` });
        } else {

            const chat_atualizado = await chatServices.atualizar_chat(id, chat_validado);
            res.status(200).json(chat_atualizado);
        };

    } catch (erro: any) {

        res.status(500).json({ message: erro.message });
    };
};

export async function delete_chat(req: Request, res: Response) {

    try {

        const { id } = req.params;
        const chat_deletado = await chatServices.deletar_chat(id);
        res.status(200).json({ message: `Chat deletado com sucesso!` });

    } catch (erro: any) {

        res.status(500).json({ message: erro.message });
    };
};