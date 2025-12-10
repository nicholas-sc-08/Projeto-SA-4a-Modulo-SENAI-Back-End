import { model } from "mongoose";
import { Schema } from "mongoose";
import { ICreateCliente } from "../types/ICliente.types";

const cliente_schema = new Schema<ICreateCliente>({

    nome: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    senha: { type: String, required: true },
    telefone: { type: String, required: false, unique: false },
    cpf: { type: String, required: false, unique: false },
    data_de_nascimento: { type: Date, required: true },
    imagem_de_perfil: { type: String, required: true },
    conversas: { type: Array, required: false },
    sacola: { type: Array, required: false },
    produtos_comprados: { type: Array, required: false },
    buscas_recentes: { type: Array, required: false }
}, { timestamps: true });

export const ModelCliente = model<ICreateCliente>(`Clientes`, cliente_schema);