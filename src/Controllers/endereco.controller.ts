import { FastifyRequest, FastifyReply } from "fastify";
import * as ServiceEndereco from "../Services/Endereco/endereco.service";
import { endereco_schema, endereco_update_schema } from "../Services/Endereco/endereco.validation";
import { GetId } from "../types/IFastify";
import { ICreateEndereco, IUpdateEndereco } from "../types/IEndereco.types";

export async function get_enderecos(req: FastifyRequest, reply: FastifyReply) {

    try {

        const enderecos = await ServiceEndereco.buscar_enderecos();

        if (!enderecos) {

            return reply.status(404).send("Endereços não encontrados");
        } else {

            return reply.status(200).send(enderecos);
        };

    } catch (erro: any) {

        return reply.status(500).send(erro);
    };
};

export async function get_endereco(req: FastifyRequest<{ Params: GetId }>, reply: FastifyReply) {

    try {

        const { id } = req.params;
        const endereco = await ServiceEndereco.buscar_enderecos_id(String(id));

        if (!endereco) {

            return reply.status(404).send("Endereço não encontrado");
        } else {

            return reply.status(200).send(endereco);
        };

    } catch (erro: any) {

        return reply.status(500).send(erro);
    };
};

export async function post_endereco(req: FastifyRequest<{ Body: ICreateEndereco }>, reply: FastifyReply) {

    try {

        const data = req.body;
        const validar_endereco = endereco_schema.parse(data);

        if (!validar_endereco) {

            return reply.status(401).send("Formato de endereço inválido para cadastro");
        } else {

            const endereco = await ServiceEndereco.cadastrar_endereco(data);
            return reply.status(201).send(endereco);
        };

    } catch (erro: any) {

        console.error(erro);
    };
};

export async function put_endereco(req: FastifyRequest<{ Params: GetId, Body: IUpdateEndereco }>, reply: FastifyReply) {

    try {

        const { id } = req.params;
        const data = req.body;
        const validar_endereco = endereco_update_schema.parse(data);

        if (!validar_endereco) {

            return reply.status(401).send("Formato de endereço inválido para atualizar");
        } else {

            const endereco = await ServiceEndereco.atualizar_endereco(String(id), data);
            return reply.status(200).send(endereco);
        };

    } catch (erro: any) {

        return reply.status(500).send(erro);
    };
};

export async function delete_endereco(req: FastifyRequest<{ Params: GetId }>, reply: FastifyReply) {

    try {

        const { id } = req.params;
        await ServiceEndereco.deletar_endereco(String(id));

    } catch (erro: any) {

        return reply.status(500).send(erro);
    };
};