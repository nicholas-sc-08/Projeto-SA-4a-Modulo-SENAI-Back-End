import z from "zod";

export const sacola_brecho_schema = z.object({

    material: z.string(),
    padrao: z.string(),
    tamanho: z.string(),
    cor_corpo: z.string().optional(),
    cor_alca: z.string().optional(),
    cor: z.string().optional(),
    valor: z.number().positive(),
    id_brecho: z.string()
});

export const sacola_brecho_schema_update = sacola_brecho_schema.partial();