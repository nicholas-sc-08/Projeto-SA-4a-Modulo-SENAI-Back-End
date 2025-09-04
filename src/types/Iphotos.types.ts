import { Types } from "mongoose"

export interface Iphotos {

    _id: Types.ObjectId,
    imagem_um: string,
    imagem_dois?: string,
    imagem_tres?: string
}

export interface IUpdatePhotos {

    imagem_um?: string,
    imagem_dois?: string,
    imagem_tres?: string
}