import { z } from "zod";

export const marca_schema = z.object({

    logo_marca: z.string(),
    nome: z.string()
});

export const marca_update_schema = marca_schema.partial();