import { ICor, ICreateCor, IUpdateCor } from "./Icor.types";
import { ICreatePhoto, IPhoto, IUpdatePhoto } from "./Iphotos.types";
import { ObjectId } from "mongoose";
import { Types } from "mongoose";

export interface IProduto {

    _id?: Types.ObjectId,
    nome: string,
    preco: number,
    condicao: string,
    imagem: IPhoto[],
    cor: ICor[],
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
    imagem: ICreatePhoto[],
    cor: ICreateCor[],
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
    imagem?: IUpdatePhoto[],
    cor?: IUpdateCor[],
    marca?: string,
    fk_id_categoria?: string,
    quantidade?: number,
    descricao?: string,
    tamanho?: string,
    composicao?: string,
    fk_id_marca?: string,
    fk_id_brecho?: string,
}