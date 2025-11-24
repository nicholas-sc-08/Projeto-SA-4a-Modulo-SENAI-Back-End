import { Types } from "mongoose";

export interface IEstoque {

    _id: Types.ObjectId;
    tipo: string;
    material: string;
    padrao: string;
    tamanho: string;
    cor_corpo?: string;
    cor_alca?: string;
    cor?: string;
    quantidade: number;
}

export interface ICreateEstoque {

    tipo: string;
    material: string;
    padrao: string;
    tamanho: string;
    cor_corpo?: string;
    cor_alca?: string;
    cor?: string;
    quantidade: number;
}

export interface IUpdateEstoque {

    tipo?: string;
    material?: string;
    padrao?: string;
    tamanho?: string;
    cor_corpo?: string;
    cor_alca?: string;
    cor?: string;
    quantidade?: number;
}