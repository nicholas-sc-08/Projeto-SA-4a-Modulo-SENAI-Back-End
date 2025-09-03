import { model } from "mongoose";
import { Schema } from "mongoose";
import { ICreateCategoria } from "../types/ICategoria.types";

const categoria_schema = new Schema<ICreateCategoria>({

    nome: { type: String, required: true },
    sub_categoria: { type: Boolean, required: true }
}, { timestamps: true });

export const ModelCategoria = model<ICreateCategoria>(`Categorias`, categoria_schema);