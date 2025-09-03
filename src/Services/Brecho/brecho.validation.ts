import { z } from "zod";
import { conversas_schema } from "../conversas.validation";
import { buscas_recentes_schema } from "../buscas_recentes.validation";

export const brecho_schema = z.object({

    nome_vendedor: z.string(),
    data_de_nascimento_vendedor: z.date(),
    nome_brecho: z.string(),
    email: z.string(),
    telefone: z.string(),
    senha: z.string(),
    cnpj: z.string(),
    logo: z.string(),
    horario_de_funcionamento: z.string().optional(),
    conversas: z.array(conversas_schema).optional(),
    buscas_recentes: z.array(buscas_recentes_schema)
});