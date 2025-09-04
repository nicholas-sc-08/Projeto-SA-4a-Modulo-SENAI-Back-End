import { Types } from "mongoose"

export interface ICor {

    _id: Types.ObjectId,
    cor_um: string,
    cor_dois?: string,
    cor_tres?: string
}

export interface IUpdateCor {

    cor_um?: string,
    cor_dois?: string,
    cor_tres?: string
}