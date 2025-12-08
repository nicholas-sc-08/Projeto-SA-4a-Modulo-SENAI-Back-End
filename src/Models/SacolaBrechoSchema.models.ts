import { model } from "mongoose";
import { Schema } from "mongoose";
import { ICreateSacolaBrecho } from "../types/ISacola.types";

const sacola_brecho_schema = new Schema<ICreateSacolaBrecho>({

    tipo: { type: String, required: true },
    material: { type: String, required: true },
    tamanho: { type: String, required: true },
    padrao: { type: String, required: true },
    quantidade: { type: Number, required: true },
    cor_corpo: { type: String, required: false },
    cor_alca: { type: String, required: false },
    valor: { type: Number, required: true },
    id_brecho: { type: String, required: true }
});

export const ModelSacolaBrecho = model<ICreateSacolaBrecho>(`sacolas_brechos`, sacola_brecho_schema);