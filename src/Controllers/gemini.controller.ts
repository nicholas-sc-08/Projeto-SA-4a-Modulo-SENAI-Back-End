import { generateTextService } from "../Services/Gemini/gemini.service";
import { FastifyRequest, FastifyReply } from "fastify";

export async function textController(req: FastifyRequest, reply: FastifyReply) {

    try {

        const data = req.body;
        const text = await generateTextService(data);
        reply.status(200).send(text);

    } catch (erro: any) {

        reply.status(400).send({ error: erro.message });
    };
};