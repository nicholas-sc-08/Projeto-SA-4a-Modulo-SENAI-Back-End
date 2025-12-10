import { sacola_brecho_schema, sacola_brecho_schema_update } from "../Services/Sacola_brecho/sacola_brecho.validation";
import * as SacolaBrechoService from "../Services/Sacola_brecho/sacola_brecho.service";
import { FastifyRequest, FastifyReply } from "fastify";
import { GetId } from "../types/IFastify";
import { ISacolaBrecho, IUpdateSacolaBrecho } from "../types/ISacola.types";

export async function get_sacolas_brechos(req: FastifyRequest, reply: FastifyReply) {

    try {

        const sacolas_brechos = await SacolaBrechoService.buscar_sacolas_brechos();

        if (!sacolas_brechos) {

            reply.status(404).send({ message: `Sacolas Brechós não encontradas!` });
        } else {

            reply.status(200).send(sacolas_brechos);
        };

    } catch (erro: any) {

        reply.status(500).send({ message: erro.message });
    };
};

export async function get_sacola_brecho(req: FastifyRequest<{ Params: GetId }>, reply: FastifyReply) {

    try {

        const { id } = req.params;
        const sacola_brecho = await SacolaBrechoService.buscar_sacola_brecho_id(String(id));

        if (!sacola_brecho) {

            reply.status(404).send({ message: `Sacola brechó não foi encontrada!` });
        } else {

            reply.status(200).send(sacola_brecho);
        };

    } catch (erro: any) {

        reply.status(500).send({ message: erro.message });
    };
};

export async function post_sacola_brecho(req: FastifyRequest<{ Body: ISacolaBrecho }>, reply: FastifyReply) {

    try {

        const data = req.body;
        const validar_sacola_brecho = sacola_brecho_schema.parse(data);

        if (!validar_sacola_brecho) {

            reply.status(401).send({ message: `Sacola brechó não está valida para cadastro` });
        } else {

            const sacola_brecho = await SacolaBrechoService.cadastrar_sacola_brecho(data);
            reply.status(201).send(sacola_brecho);
        };

    } catch (erro: any) {

        reply.status(500).send({ message: erro.message });
    };
};

export async function put_sacola_brecho(req: FastifyRequest<{ Params: GetId, Body: IUpdateSacolaBrecho }>, reply: FastifyReply) {

    try {

        const { id } = req.params;
        const data = req.body;
        const validar_sacola_brecho = sacola_brecho_schema_update.parse(data);

        if (!validar_sacola_brecho) {

            reply.status(401).send({ message: `Sacola brechó não está valida para atualizar` });
        } else {

            const sacola_brecho = await SacolaBrechoService.atualizar_sacola_brecho(String(id), data);
            reply.status(200).send(sacola_brecho);
        };

    } catch (erro: any) {

        reply.status(500).send({ message: erro.message });
    };
};

export async function delete_sacola_brecho(req: FastifyRequest<{ Params: GetId }>, reply: FastifyReply) {

    try {

        const { id } = req.params;
        const sacola_brecho = await SacolaBrechoService.deletar_sacola_brecho(String(id));

    } catch (erro: any) {

        reply.status(500).send({ message: erro.message });
    };
};