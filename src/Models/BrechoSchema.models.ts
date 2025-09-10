import { model } from "mongoose";
import { Schema } from "mongoose";
import { ICreateBrecho } from "../types/IBrecho.types";

const brecho_schema = new Schema<ICreateBrecho>({

    nome_vendedor: { type: String, required: true },
    data_de_nascimento_vendedor: { type: Date, required: true },
    senha: { type: String, required: true },
    nome_brecho: { type: String, required: true },
    email: { type: String, required: true },
    telefone: { type: String, required: true },
    cnpj: { type: String, required: false },
    logo: { type: String, required: true },
    horario_funcionamento: { type: String, required: false },
    conversas: { type: Array, required: false },
    buscas_recentes: { type: Array, required: false },
});

export const ModelBrecho = model<ICreateBrecho>(`Brecho`, brecho_schema);