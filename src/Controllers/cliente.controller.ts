import { FastifyRequest, FastifyReply } from "fastify";
import * as ServicoCliente from "../Services/Cliente/cliente.service";
import { cliente_schema, cliente_update_schema } from "../Services/Cliente/cliente.validation";
import { ICreateCliente, IUpdateCliente } from "../types/ICliente.types";
import { GetId } from "../types/IFastify";

export async function get_clientes(req: FastifyRequest, reply: FastifyReply) {

    try {

        const clientes = await ServicoCliente.buscar_clientes();

        if (!clientes) {

            return reply.status(404).send({ message: `Clientes não Encontrado!` });
        } else {

            return reply.status(200).send(clientes);
        };

    } catch (erro: any) {

        return reply.status(500).send({ message: erro.message });
    };
};

export async function get_cliente_id(req: FastifyRequest<{ Params: GetId }>, reply: FastifyReply) {

    try {

        const { id } = req.params;
        const cliente = await ServicoCliente.buscar_cliente_id(String(id));

        if (!cliente) {

            return reply.status(404).send({ message: `Cliente não encontrado` });
        } else {

            return reply.status(200).send(cliente);
        };

    } catch (erro: any) {

        return reply.status(500).send({ message: erro.message });
    };
};

export async function post_cliente(req: FastifyRequest<{ Body: ICreateCliente }>, reply: FastifyReply) {

    try {

        req.body.data_de_nascimento = new Date(req.body.data_de_nascimento);

        const cliente = cliente_schema.parse(req.body);
        const novo_cliente = await ServicoCliente.cadastrar_cliente(cliente);
        reply.status(201).send(novo_cliente);

    } catch (erro: any) {

        return reply.status(500).send({ message: erro.message });
    };
};

export async function put_cliente(req: FastifyRequest<{ Params: GetId, Body: IUpdateCliente }>, reply: FastifyReply) {

    try {

        const { id } = req.params;
        const cliente = cliente_update_schema.parse(req.body);
        const cliente_atualizado = await ServicoCliente.atualizar_cliente(String(id), cliente);

        if (!cliente_atualizado) {

            return reply.status(404).send({ message: `Cliente não encontrado` });

        } else {

            return reply.status(200).send(cliente_atualizado);
        };

    } catch (erro: any) {

        return reply.status(500).send({ message: erro.message });
    };
};

export async function delete_cliente(req: FastifyRequest<{ Params: GetId }>, reply: FastifyReply) {

    try {

        const { id } = req.params;
        await ServicoCliente.deletar_cliente(String(id));
        return reply.status(200).send({ message: `Cliente deletado com sucesso!` });

    } catch (erro: any) {

        return reply.status(500).send({ meesage: erro.message });
    };
};