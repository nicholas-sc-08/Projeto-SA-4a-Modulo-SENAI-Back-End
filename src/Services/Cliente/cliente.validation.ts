import { z } from "zod";
import { buscas_recentes_schema } from "../buscas_recentes.validation";
import { sacola_schema } from "../sacola_validation";
import { conversas_schema } from "../conversas.validation";

export const cliente_schema = z.object({

    nome: z.string(),
    email: z.string(),
    senha: z.string(),
    telefone: z.string(),
    cpf: z.string(),
    data_de_nascimento: z.date(),
    imagem_de_perfil: z.string(),
    conversas: z.array(conversas_schema).optional(),
    buscas_recentes: z.array(buscas_recentes_schema).optional(),
    sacola: z.array(sacola_schema).optional(),
    produtos_comprados: z.array(sacola_schema).optional(),
});

export const cliente_update_schema = cliente_schema.partial();