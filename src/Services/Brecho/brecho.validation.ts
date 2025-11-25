import { z } from "zod";
import { conversas_schema } from "../conversas.validation";
import { buscas_recentes_schema } from "../buscas_recentes.validation";

export const brecho_schema = z.object({

    nome_vendedor: z.string(),
    data_de_nascimento_vendedor: z.coerce.date(), // atualização aqui
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

export const brecho_update_schema = brecho_schema.partial();