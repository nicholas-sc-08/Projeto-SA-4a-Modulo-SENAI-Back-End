import { model } from "mongoose";
import { Schema } from "mongoose";
import { ICreateProduto } from "../types/IProduto.types";

const produto_schema = new Schema<ICreateProduto>({

    nome: { type: String, required: true },
    preco: { type: Number, required: true },
    condicao: { type: String, required: true},
    imagem: { typeof: Array, required: true },
    cor: { typeof: Array, required: true },
    marca: { type: String, required: false },
    fk_id_categoria: { type: String, required: false },
    quantidade: { type: Number, required: true },
    descricao: { type: String, required: true },
    tamanho: { type: String, required: true },
    composicao: { type: String, required: true },
    fk_id_marca: { type: String, required: false },
    fk_id_brecho: { type: String, required: true }
}, { timestamps: true });

export const ModelProduto = model<ICreateProduto>(`Produtos`, produto_schema);