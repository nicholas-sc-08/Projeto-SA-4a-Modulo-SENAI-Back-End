import { FastifyRequest, FastifyReply } from "fastify";
import { brecho_schema, brecho_update_schema } from "../Services/Brecho/brecho.validation";
import bcrypt from "bcrypt";
import * as brechosService from "../Services/Brecho/brecho.service";
import { GetId } from "../types/IFastify";

export async function get_brechos(req: FastifyRequest, reply: FastifyReply) {

    try {

        const brechos = await brechosService.buscar_brechos();

        if (!brechos) {

            reply.status(404).send({ message: `Brechós não encontrados!` });
        } else {

            reply.status(200).send(brechos);
        };

    } catch (erro: any) {

        reply.status(500).send({ message: erro.message });
    };
};

export async function get_brecho(req: FastifyRequest<{ Params: GetId }>, reply: FastifyReply) {

    try {

        const { id } = req.params;
        const brecho = await brechosService.buscar_brecho_id(String(id));

        if (!brecho) {

            reply.status(404).send({ message: `Brechó não encontrado!` });
        } else {

            reply.status(200).send(brecho);
        };

    } catch (erro: any) {

        reply.status(500).send({ message: erro.message });
    };
};

export async function post_brecho(req: FastifyRequest, reply: FastifyReply) {

    try {

        const data = req.body;
        const brecho_valido = brecho_schema.parse(data);

        if (!brecho_valido) {

            reply.status(401).send({ message: `Brechó não está válido para cadastro!` });
        } else {

            const brecho_cadastrado = await brechosService.cadastrar_brecho(brecho_valido);
            reply.status(201).send(brecho_cadastrado);
        };

    } catch (erro: any) {

        reply.status(500).send({ message: erro.message });
    };
};

export async function put_brecho(req: FastifyRequest<{ Params: GetId }>, reply: FastifyReply) {

    try {

        const { id } = req.params;
        const data = req.body;
        const brecho_valido = brecho_update_schema.parse(data);

        if (!brecho_valido) {

            reply.status(401).send({ message: `Formato do brechó não está válido para atualizar!` });
        } else {

            const brecho_atualizado = await brechosService.atualizar_brecho(String(id), brecho_valido);
            reply.status(200).send(brecho_atualizado);
        };

    } catch (erro: any) {

        reply.status(500).send({ message: erro.message });
    };
};

export async function delete_brecho(req: FastifyRequest<{ Params: GetId }>, reply: FastifyReply) {

    try {

        const { id } = req.params;
        await brechosService.deletar_brecho(String(id));
        reply.status(200).send({ message: `Brechó deletado com sucesso!` });

    } catch (erro: any) {

        reply.status(500).send({ message: erro.message });
    };
};