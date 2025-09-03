import { z } from "zod";
import { imagem_schema } from "../imagem.validation";
import { cor_schema } from "../cor.validation";


export const produto_schema = z.object({

    nome: z.string(),
    preco: z.number().positive(),
    condicao: z.string(),
    imagem: z.array(imagem_schema),
    cor: z.array(cor_schema),
    marca: z.string().optional(),
    fk_id_categoria: z.string().optional(),
    quantidade: z.number().int().positive(),
    descricao: z.string(),
    tamanho: z.string(),
    composicao: z.string(),
    fk_id_marca: z.string().optional(),
    fk_id_brecho: z.string()
});