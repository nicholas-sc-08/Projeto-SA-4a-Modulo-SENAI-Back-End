import { Types } from "mongoose"

export interface IMarcas {

    _id: Types.ObjectId,
    logo_marca: string,
    createdAt?: Date,
    updatedAt?: Date
}

export interface ICreateMarcas {

    logo_marca: string,
    nome: string,
    createdAt?: Date,
    updatedAt?: Date
}

export interface IUpdateMarcas {

    logo_marca?: string,
    nome?: string,
    createdAt?: Date,
    updatedAt?: Date
}