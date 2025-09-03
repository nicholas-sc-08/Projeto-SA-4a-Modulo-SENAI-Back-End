import { z } from "zod";

export const categoria_schema = z.object({

    nome: z.string(),
    sub_categoria: z.boolean()
});