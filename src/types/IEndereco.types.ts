import { Types } from "mongoose"

export interface IEndereco {

    _id?: Types.ObjectId,
    cep: string,
    bairro: string,
    logradouro: string,
    estado: string,
    cidade: string,
    numero: string,
    complemento: string,
    fk_id_brecho?: Types.ObjectId,
    fk_id_cliente?: Types.ObjectId
}

export interface ICreateEndereco {

    cep: string,
    bairro: string,
    logradouro: string,
    estado: string,
    cidade: string,
    numero: string,
    complemento: string,
    fk_id_brecho?: Types.ObjectId,
    fk_id_cliente?: Types.ObjectId
}

export interface IUpdateEndereco {

    cep?: string,
    bairro?: string,
    logradouro?: string,
    estado?: string,
    cidade?: string,
    numero?: string,
    complemento?: string,
    fk_id_brecho?: Types.ObjectId,
    fk_id_cliente?: Types.ObjectId
}