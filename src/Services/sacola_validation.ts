import { z } from "zod";
import { imagem_schema } from "./imagem.validation";
import { cor_schema } from "./cor.validation";

export const sacola_schema = z.object({

    _id: z.string(),
    nome: z.string(),
    preco: z.number().positive(),
    condicao: z.string(),
    imagem: z.array(z.string()).max(3),
    cor: z.array(z.string()).max(3),
    marca: z.string().optional(),
    fk_id_categoria: z.string(),
    quantidade: z.number().int().positive(),
    descricao: z.string(),
    tamanho: z.string(),
    composicao: z.string(),
    fk_id_marca: z.string().optional(),
    fk_id_brecho: z.string(),
    quantidade_selecionada: z.number()
});