import { FastifyRequest, FastifyReply } from "fastify";
import * as ServicoProduto from "../Services/Produto/produto.service";
import { produto_schema, produto_update_schema } from "../Services/Produto/produto.validation";
import { GetId } from "../types/IFastify";

export async function get_produtos(req: FastifyRequest, reply: FastifyReply) {

    try {

        const produtos = await ServicoProduto.buscar_produtos();
        return reply.send(produtos);

    } catch (erro: any) {

        return reply.status(500).send({ message: erro.message });
    };
};

export async function get_produto_id(req: FastifyRequest<{ Params: GetId }>, reply: FastifyReply) {

    try {

        const { id } = req.params;
        const produto = await ServicoProduto.buscar_produto_id(String(id));

        if (!produto) {

            return reply.status(404).send({ message: `Produto não encontrado!` });
        } else {

            return reply.send(produto);
        };

    } catch (erro: any) {

        return reply.status(500).send({ message: erro.message });
    };
};

export async function post_produto(req: FastifyRequest, reply: FastifyReply) {

    try {

        const data_produto = produto_schema.parse(req.body);
        const novo_produto = await ServicoProduto.criar_produto(data_produto);
        return reply.status(201).send(novo_produto);

    } catch (erro: any) {

        return reply.status(500).send({ message: erro.message });
    };
};

export async function put_produto(req: FastifyRequest<{ Params: GetId }>, reply: FastifyReply) {

    try {

        const { id } = req.params;
        const data_produto = produto_update_schema.parse(req.body);
        const produto_atualizado = await ServicoProduto.atualizar_produto(String(id), data_produto);

        if (!produto_atualizado) {

            return reply.status(404).send({ message: `Produto não encontrado!` });
        } else {

            return reply.status(200).send(produto_atualizado);
        };

    } catch (erro: any) {

        return reply.status(500).send({ message: erro.message })
    };
};

export async function delete_produto(req: FastifyRequest<{ Params: GetId }>, reply: FastifyReply) {

    try {

        const { id } = req.params;
        const produto = await ServicoProduto.deletar_produto(String(id));
        return reply.send({ message: `Produto deletado com sucesso!` });

    } catch (erro: any) {

        return reply.status(500).send({ message: erro.message });
    };
};