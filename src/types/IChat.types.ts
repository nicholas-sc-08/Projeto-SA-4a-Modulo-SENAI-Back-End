import { Types } from "mongoose"

export interface IChat {

    _id: Types.ObjectId,
    mensagem: string,
    hora: string,
    data_mensagem: Date,
    id_dono_mensagem: string,
    id_quem_recebeu_imagem: string,
    mensagem_lida_quem_recebeu: boolean,
    createdAt?: Date,
    updatedAt?: Date
}

export interface ICreateChat {

    mensagem: string,
    hora: string,
    data_mensagem: Date,
    id_dono_mensagem: string,
    id_quem_recebeu_imagem: string,
    mensagem_lida_quem_recebeu: boolean,
    createdAt?: Date,
    updatedAt?: Date
}

export interface IUpdateChat {

    mensagem?: string,
    hora?: string,
    data_mensagem?: Date,
    id_dono_mensagem?: string,
    id_quem_recebeu_imagem?: string,
    mensagem_lida_quem_recebeu?: boolean,
    createdAt?: Date,
    updatedAt?: Date
}