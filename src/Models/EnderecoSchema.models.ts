import { model } from "mongoose";
import { Schema } from "mongoose";
import { ICreateEndereco } from "../types/IEndereco.types";

const endereco_schema = new Schema<ICreateEndereco>({

    cep: { type: String, required: true },
    bairro: { type: String, required: true },
    logradouro: { type: String, required: true },
    estado: { type: String, required: true },
    cidade: { type: String, required: true },
    numero: { type: String, required: true },
    complemento: { type: String, required: true },
    fk_id_brecho: { type: String, required: false },
    fk_id_cliente: { type: String, required: false }
}, { timestamps: true });

export const ModelEndereco = model<ICreateEndereco>(`Enderecos`, endereco_schema);