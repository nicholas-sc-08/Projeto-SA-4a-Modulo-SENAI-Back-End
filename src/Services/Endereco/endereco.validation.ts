import { z } from "zod";

export const endereco_schema = z.object({

    cep: z.string(),
    bairro: z.string(),
    logradouro: z.string(),
    estado: z.string(),
    cidade: z.string(),
    numero: z.string(),
    complemento: z.string(),
    fk_id_brecho: z.string().optional(),
    fk_id_cliente: z.string().optional()
});