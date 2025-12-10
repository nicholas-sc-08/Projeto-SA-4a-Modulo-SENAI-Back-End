import { FastifyRequest, FastifyReply } from "fastify";
import { categoria_schema, categoria_update_schema } from "../Services/Categoria/categoria.validation";
import * as categoriaService from "../Services/Categoria/categoria.service";
import { GetId } from "../types/IFastify";

export async function get_categorias(req: FastifyRequest, reply: FastifyReply) {

    try {

        const categorias = await categoriaService.buscar_categorias();

        if (!categorias) {

            reply.status(404).send({ message: `Categorias não encontradas!` });
        } else {

            reply.status(200).send(categorias);
        };

    } catch (erro: any) {

        reply.status(500).send({ message: erro.message });
    };
};

export async function get_categoria(req: FastifyRequest<{ Params: GetId }>, reply: FastifyReply) {

    try {

        const { id } = req.params;
        const categoria = await categoriaService.buscar_categoria_id(String(id));

        if (!categoria) {

            reply.status(404).send({ message: `Erro ao encontrar a Categoria pelo ID!` });
        } else {

            reply.status(200).send(categoria);
        };

    } catch (erro: any) {

        reply.status(500).send({ message: erro.message });
    };
};

export async function post_categoria(req: FastifyRequest, reply: FastifyReply) {

    try {

        const data = req.body;
        const categoria_validada = categoria_schema.parse(data);

        if (!categoria_validada) {

            reply.status(401).send({ message: `Categoria não tem um formato válido!` });
        } else {

            const categoria_cadastrada = await categoriaService.cadastrar_categoria(categoria_validada);
            reply.status(201).send(categoria_cadastrada);
        };

    } catch (erro: any) {

        reply.status(500).send({ message: erro.message });
    };
};

export async function put_categoria(req: FastifyRequest<{ Params: GetId }>, reply: FastifyReply) {

    try {

        const { id } = req.params;
        const data = req.body;
        const categoria_validada = categoria_update_schema.parse(data);

        if (!categoria_validada) {

            reply.status(401).send({ message: `Categoria não tem um formato válido para atualizar!` });
        } else {

            const categoria_atualizada = await categoriaService.atualizar_categoria(String(id), categoria_validada);
            reply.status(200).send(categoria_atualizada);
        };

    } catch (erro: any) {

        console.error(erro);
        reply.status(500).send({ message: erro.message });
    };
};

export async function delete_categoria(req: FastifyRequest<{ Params: GetId }>, reply: FastifyReply) {

    try {

        const { id } = req.params;
        await categoriaService.deletar_categoria(String(id));
        reply.status(200).send({ message: `Categoria deletada com sucesso!` });

    } catch (erro: any) {

        reply.status(500).send({ message: erro.message });
    };
};