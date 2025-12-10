import { FastifyRequest, FastifyReply } from "fastify";
import { pedido_completo_schema, pedido_completo_schema_update } from "../Services/Pedido/pedido_completo.validation";
import * as ServicePedido from "../Services/Pedido/pedido.services";
import { IPayload, IPayloadUpdate } from "../types/IPayload.types";
import { GetId } from "../types/IFastify";
import { Params } from "zod/v4/core/api.cjs";

export async function get_pedidos(req: FastifyRequest, reply: FastifyReply) {

    try {

        const pedidos = await ServicePedido.buscar_pedidos();

        if (!pedidos) {

            reply.status(404).send({ message: `Pedidos não encontrados!` });
        } else {

            reply.status(200).send(pedidos);
        };

    } catch (erro: any) {

        reply.status(500).send({ message: erro.message });
    };
};

export async function get_pedido(req: FastifyRequest<{ Params: GetId }>, reply: FastifyReply) {

    try {

        const { id } = req.params;
        const pedido = await ServicePedido.buscar_pedido_pelo_id(String(id));

        if (!pedido) {

            reply.status(404).send({ message: `Pedido não encontrado!` });
        } else {

            reply.status(200).send(pedido);
        };

    } catch (erro: any) {

        reply.status(500).send({ message: erro.message });
    };
};

export async function post_pedido(req: FastifyRequest<{ Body: IPayload }>, reply: FastifyReply) {

    try {

        const { payload } = req.body;

        const payload_completo: IPayload = {

            payload,
            callbackUrl: `http://localhost:3333/callback`
        };

        const validar_pedido = pedido_completo_schema.parse(payload_completo);

        if (!validar_pedido) {

            reply.status(401).send({ message: `Pedido não está válido para cadastrar` });
        } else {

            const pedido_enviado = await ServicePedido.enviar_pedido(payload_completo);
            reply.status(201).send(pedido_enviado);
        };

    } catch (erro: any) {

        return reply.status(500).send({ message: erro.message });
    };
};

export async function put_pedido(req: FastifyRequest<{ Params: GetId, Body: IPayloadUpdate }>, reply: FastifyReply) {

    try {

        const { id } = req.params;
        const data = req.body;
        const validar_pedido = pedido_completo_schema_update.parse(data);

        if (!validar_pedido) {

            reply.status(401).send({ message: `Formato do pedido não está valido para atualizar!` });
        } else {

            const pedido = await ServicePedido.atualizar_pedido(String(id), data);
            reply.status(200).send(pedido);
        };

    } catch (erro: any) {

        reply.status(500).send({ message: erro.message });
    };
};

export async function delete_pedido(req: FastifyRequest<{ Params: GetId }>, reply: FastifyReply) {

    try {

        const { id } = req.params;
        const deletar_pedido = await ServicePedido.deletar_pedido(String(id));
        reply.status(200).send({ message: `Pedido excluído com sucesso!` });

    } catch (erro: any) {

        reply.status(500).send({ message: erro.message });
    };
};