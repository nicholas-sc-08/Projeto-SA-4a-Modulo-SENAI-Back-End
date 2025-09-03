import { z } from "zod";

export const conversas_schema = z.object({

    _id: z.string(),
    nome_brecho: z.string().optional(),
    nome: z.string().optional(),
    logo: z.string().optional(),
    imagem_de_perfil: z.string().optional()
});