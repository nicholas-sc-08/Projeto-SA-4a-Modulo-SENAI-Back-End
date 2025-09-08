import { z } from "zod";

export const categoria_schema = z.object({

    nome: z.string(),
    sub_categoria: z.boolean()
});

export const categoria_update_schema = categoria_schema.partial();