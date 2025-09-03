import { z } from "zod";

export const marca_schema = z.object({

    logo_marca: z.string(),
    nome: z.string()
});