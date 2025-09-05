import { Types } from "mongoose"

export interface ICategoria {

    _id?: Types.ObjectId,
    nome: string,
    sub_categoria: boolean,
    createdAt?: Date,
    updatedAt?: Date
}

export interface ICreateCategoria {

    nome: string,
    sub_categoria: boolean,
    createdAt?: Date,
    updatedAt?: Date
}

export interface IUpdateCategoria {

    nome?: string,
    sub_categoria?: boolean,
    createdAt?: Date,
    updatedAt?: Date
}