import type { ILogado } from "../types/ILogado.types";
import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";
import { FastifyReply, FastifyRequest } from "fastify";

configDotenv();
declare global {

    namespace Fastify {
        interface FastifyRequest {
            user?: ILogado;
        }
    }
};

const JWT_SECRET: string = process.env.JWT_SECRET || "";

export function autenticar_token(req: FastifyRequest, reply: FastifyReply) {

    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) {

        return reply.status(401).send({ message: "Unauthorized" });
    };

    jwt.verify(token, JWT_SECRET, (error, user) => {

        if (error) {

            return reply.status(403).send({ message: error.message });
        };

        req.user = user as ILogado;
    });
};