import { model } from "mongoose";
import { Schema } from "mongoose";
import { ICreateMarcas } from "../types/IMarcas.types";

const marca_schema = new Schema<ICreateMarcas>({

    logo_marca: { type: String, required: true },
    nome: { type: String, required: true }
}, { timestamps: true });

export const ModelMarca = model<ICreateMarcas>(`Marcas`, marca_schema);