import { FastifyReply, FastifyRequest } from "fastify";
import { autenticar } from "../Services/Auth/auth.service";
import { ILogado } from "../types/ILogado.types";

export async function login(req: FastifyRequest<{ Body: ILogado }>, reply: FastifyReply): Promise<FastifyReply> {

    try {

        const { email, senha } = req.body;
        const token: string | null = await autenticar(email, senha);

        if (!token) {

            return reply.status(401).send({ message: "Credenciais inválidas" });
        };

        return reply.status(200).send(token);

    } catch (erro: any) {

        return reply.status(500).send({ error: erro.message });
    };
};