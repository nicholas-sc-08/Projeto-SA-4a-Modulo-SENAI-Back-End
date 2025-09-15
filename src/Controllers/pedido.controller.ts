import { Request, Response } from "express";
import { pedido_completo_schema, pedido_completo_schema_update } from "../Services/Pedido/pedido_completo.validation";
import * as ServicePedido from "../Services/Pedido/pedido.services";
import { IPayload } from "../types/IPayload.types";

export async function get_pedidos(req: Request, res: Response) {

    try {

        const pedidos = await ServicePedido.buscar_pedidos();

        if(!pedidos) {

            res.status(404).json({message: `Pedidos não encontrados!`});
        } else {

            res.status(200).json(pedidos);
        };
        
    } catch (erro: any) {
      
        res.status(500).json({message: erro.message});
    };
};

export async function get_pedido(req: Request, res: Response) {

    try {

        const { id } = req.params;
        const pedido = await ServicePedido.buscar_pedido_pelo_id(id);

        if(!pedido) {

            res.status(404).json({message: `Pedido não encontrado!`});
        } else {

            res.status(200).json(pedido);
        };
        
    } catch (erro: any) {
      
        res.status(500).json({message: erro.message});
    };
};

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

            const pedido_enviado = await ServicePedido.enviar_pedido(validar_pedido);
            res.status(201).json(pedido_enviado);
        };

    } catch (erro: any) {

        return res.status(500).json({ message: erro.message });
    };
};

export async function put_pedido(req: Request, res: Response) {

    try {

        const { id } = req.params;
        const data = req.body;
        const validar_pedido = pedido_completo_schema_update.parse(data);

        if(!validar_pedido) {

            res.status(401).json({message: `Formato do pedido não está valido para atualizar!`});
        } else {

            const pedido = await ServicePedido.atualizar_pedido(id, data);
            res.status(200).json(pedido);
        };
        
    } catch (erro: any) {
      
        res.status(500).json({message: erro.message});
    };
};