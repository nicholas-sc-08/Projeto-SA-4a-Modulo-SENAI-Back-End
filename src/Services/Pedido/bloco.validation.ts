import { z } from "zod";

export const bloco_schema = z.object({

    cor: z.number().int(),
    lamina1: z.number().int(),
    lamina2: z.number().int(),
    lamina3: z.number().int(),
    padrao1: z.string(),
    padrao2: z.string(),
    padrao3: z.string()
});

export const bloco_schema_update = bloco_schema.partial();