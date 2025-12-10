import { FastifyRequest, FastifyReply } from "fastify";
import { marca_schema, marca_update_schema } from "../Services/Marca/marca.validation";
import * as marcasServices from "../Services/Marca/marca.service"
import { GetId } from "../types/IFastify";

export async function get_marcas(req: FastifyRequest, reply: FastifyReply) {

    try {

        const marcas = await marcasServices.buscar_marcas();

        if (!marcas) {

            reply.status(404).send({ message: `marcas não foram encontrados!` });
        } else {

            reply.status(200).send(marcas);
        };

    } catch (erro: any) {

        reply.status(500).send({ message: erro.message });
    };
};

export async function get_marca(req: FastifyRequest<{ Params: GetId }>, reply: FastifyReply) {

    try {

        const { id } = req.params;
        const marca = await marcasServices.buscar_marca_id(String(id));

        if (!marca) {

            reply.status(200).send(marca);
        };

    } catch (erro: any) {

        reply.status(500).send({ message: erro.message });
    };
};

export async function post_marca(req: FastifyRequest, reply: FastifyReply) {

    try {

        const data = req.body;
        const marca_valida = marca_schema.parse(data);

        if (!marca_valida) {

            reply.status(401).send({ message: `Marca não está válido para cadastro!` });
        } else {

            const marca_criada = await marcasServices.cadastrar_marca(marca_valida);
            reply.status(201).send(marca_criada);
        };

    } catch (erro: any) {

        reply.status(500).send({ message: erro.message });
    };
};

export async function put_marca(req: FastifyRequest<{ Params: GetId }>, reply: FastifyReply) {

    try {

        const { id } = req.params;
        const data = req.body;
        const marca_valida = marca_update_schema.parse(data);

        if (!marca_valida) {

            reply.status(401).send({ message: `Formato inválido para atualizar!` });
        } else {

            const marca_atualizada = await marcasServices.atualizar_marca(String(id), marca_valida);
            reply.status(200).send(marca_atualizada);
        };

    } catch (erro: any) {

        reply.status(500).send({ message: erro.message });
    };
};

export async function delete_marca(req: FastifyRequest<{ Params: GetId }>, reply: FastifyReply) {

    try {

        const { id } = req.params;
        await marcasServices.deletar_marca(String(id));
        reply.status(200).send({ message: `Marca deletada com sucesso!` });

    } catch (erro: any) {

        reply.status(500).send({ message: erro.message });
    };
};