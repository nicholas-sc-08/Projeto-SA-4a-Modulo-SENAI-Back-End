import { model } from "mongoose";
import { Schema } from "mongoose";
import { ICreateEstoque } from "../types/IEstoque.types";

const estoque_schema = new Schema<ICreateEstoque>({

    tipo: { type: String, required: true },
    material: { type: String, required: true },
    tamanho: { type: String, required: true },
    padrao: { type: String, required: true },
    cor_corpo: { type: String, required: false },
    cor_alca: { type: String, required: false },
    cor: { type: String, required: false },
    quantidade: { type: Number, required: true }
});

export const ModelEstoque = model<ICreateEstoque>(`estoques`, estoque_schema);