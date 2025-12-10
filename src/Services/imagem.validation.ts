import { z } from "zod";

export const imagem_schema = z.object({

    imagem_um: z.string().min(1),
    imagem_dois: z.string().optional(),
    imagem_tres: z.string().optional()
});