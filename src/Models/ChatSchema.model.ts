import { model } from "mongoose";
import { Schema } from "mongoose";
import { ICreateChat } from "../types/IChat.types";

const chat_schema = new Schema<ICreateChat>({

    mensagem: { type: String, required: true },
    hora: { type: String, required: true },
    data_mensagem: { type: Date, required: true },
    id_dono_mensagem: { type: String, required: true },
    id_quem_recebeu_imagem: { type: String, required: true },
    mensagem_lida_quem_recebeu: { type: Boolean, required: true },
}, { timestamps: true });

export const ModelChat = model<ICreateChat>(`Chat`, chat_schema);