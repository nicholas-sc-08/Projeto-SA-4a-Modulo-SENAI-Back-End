import { ICor } from "./Icor.types";
import { Iphotos } from "./Iphotos.types";
import { ObjectId } from "mongoose";
import { Types } from "mongoose";

export interface IProduto {

    _id: Types.ObjectId,
    nome: string,
    preco: number,
    condicao: string,
    imagem: Array<Iphotos>,
    cor: Array<ICor>,
    marca?: string,
    fk_id_categoria?: string,
    quantidade: number,
    descricao: string,
    tamanho: string,
    composicao: string,
    fk_id_marca?: string,
    fk_id_brecho: string,
}

export interface ICreateProduto {

    nome: string,
    preco: number,
    condicao: string,
    imagem: Array<Iphotos>,
    cor: Array<ICor>,
    marca?: string,
    fk_id_categoria?: string,
    quantidade: number,
    descricao: string,
    tamanho: string,
    composicao: string,
    fk_id_marca?: string,
    fk_id_brecho: string,
}

export interface IUpdateProduto {

    nome?: string,
    preco?: number,
    condicao?: string,
    imagem?: Array<Iphotos>,
    cor?: Array<ICor>,
    marca?: string,
    fk_id_categoria?: string,
    quantidade?: number,
    descricao?: string,
    tamanho?: string,
    composicao?: string,
    fk_id_marca?: string,
    fk_id_brecho?: string,
}