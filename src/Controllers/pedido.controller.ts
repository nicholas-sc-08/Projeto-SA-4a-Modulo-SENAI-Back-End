import { Request, Response } from "express";
import { pedido_completo_schema } from "../Services/Pedido/pedido_completo.validation";
import { enviar_pedido } from "../Services/Pedido/pedido.services";
import { IPayload } from "../types/IPayload.types";

export async function post_pedido(req: Request, res: Response) {

    try {

        const { payload } = req.body;

        const payload_completo: IPayload = {
            
            payload,
            callbackUrl: `http://localhost:3333/callback`
        };

        const validar_pedido = pedido_completo_schema.parse(payload_completo);

        if (!validar_pedido) {

            res.status(401).json({ message: `Pedido não está válido para cadastrar` });
        } else {


            const pedido_enviado = await enviar_pedido(validar_pedido);
            res.status(201).json(pedido_enviado);
        };

    } catch (erro: any) {

        return res.status(500).json({ message: erro.message });
    };
};