import { Types } from "mongoose"

export interface IPhoto {

    _id: Types.ObjectId,
    imagem_um: string,
    imagem_dois?: string,
    imagem_tres?: string
}

export interface ICreatePhoto {

    imagem_um: string,
    imagem_dois?: string,
    imagem_tres?: string
}

export interface IUpdatePhoto {

    imagem_um?: string,
    imagem_dois?: string,
    imagem_tres?: string
}