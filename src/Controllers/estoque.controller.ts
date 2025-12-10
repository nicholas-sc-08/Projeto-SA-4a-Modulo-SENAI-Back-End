import * as EstoqueServices from "../Services/Estoque/estoque.service";
import { estoque_schema, estoque_update_schema } from "../Services/Estoque/estoque.validation";
import { FastifyRequest, FastifyReply } from "fastify";
import { GetId } from "../types/IFastify";

export async function get_estoques(req: FastifyRequest, reply: FastifyReply) {

    try {

        const estoques = await EstoqueServices.buscar_estoques();

        if (!estoques) {

            reply.status(404).send("Estoques não foram encontrados");
        } else {

            reply.status(200).send(estoques);
        };

    } catch (erro: any) {

        reply.status(500).send(erro);
    };
};

export async function get_estoque(req: FastifyRequest<{ Params: GetId }>, reply: FastifyReply) {

    try {

        const { id } = req.params;
        const estoque = await EstoqueServices.buscar_estoque(String(id));

        if (!estoque) {

            reply.status(404).send("Estoque não foi encontrado");
        } else {

            reply.status(200).send(estoque);
        };

    } catch (erro: any) {

        reply.status(500).send(erro);
    };
};

export async function post_estoque(req: FastifyRequest, reply: FastifyReply) {

    try {

        const estoque_validado = estoque_schema.parse(req.body);

        if (!estoque_validado) {

            reply.status(401).send("Formato de objeto de estoque inválido para cadastro");
        } else {

            const estoque = await EstoqueServices.cadastrar_estoque(estoque_validado);
            reply.status(201).send(estoque);
        };

    } catch (erro: any) {

        reply.status(500).send(erro);
    };
};

export async function put_estoque(req: FastifyRequest<{ Params: GetId }>, reply: FastifyReply) {

    try {

        const { id } = req.params;
        const estoque_validado = estoque_update_schema.parse(req.body);

        if (estoque_validado) {

            reply.status(401).send("Formato de objeto de estoque inválido para cadastro");
        } else {

            const estoque = await EstoqueServices.atualizar_estoque(String(id), estoque_validado);
            reply.status(200).send(estoque);
        };

    } catch (erro: any) {

        reply.status(500).send(erro);
    };
};

export async function delete_estoque(req: FastifyRequest<{ Params: GetId }>, reply: FastifyReply) {

    try {

        const { id } = req.params;
        const estoque_deletado = await EstoqueServices.deletar_estoque(String(id));
        reply.status(200).send("Estoque deletado com sucesso!");

    } catch (erro: any) {

        reply.status(500).send(erro);
    };
};