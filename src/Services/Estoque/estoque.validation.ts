import z from "zod";

export const estoque_schema = z.object({

    tipo: z.string(),
    material: z.string(),
    padrao: z.string(),
    tamanho: z.string(),
    cor_corpo: z.string().optional(),
    cor_alca: z.string().optional(),
    cor: z.string().optional(),
    quantidade: z.number().positive()    
});

export const estoque_update_schema = estoque_schema.partial();