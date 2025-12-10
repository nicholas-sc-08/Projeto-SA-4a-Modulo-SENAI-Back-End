import { FastifyRequest, FastifyReply } from "fastify";
import { upload_image } from "../Services/upload.service";
import { writeFile } from "fs/promises";
import { tmpdir } from "os";
import { join } from "path";

export async function upload_file(req: FastifyRequest, reply: FastifyReply) {
  try {

    const data = await req.file();

    if (!data) {
      return reply.status(404).send({ error: "Arquivo não encontrado" });
    };

    const tempPath = join(tmpdir(), data.filename);

    await writeFile(tempPath, await data.toBuffer());

    const resultado = await upload_image(tempPath);

    return reply.status(200).send({

      url: resultado.secure_url,
      public_id: resultado.public_id,
    });

  } catch (erro: any) {
    return reply.status(500).send({ erro: erro.message });
  };
};
