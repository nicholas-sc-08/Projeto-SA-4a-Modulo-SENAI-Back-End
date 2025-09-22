import { Types } from "mongoose";
import { ICor } from "./Icor.types";
import { IPhoto } from "./Iphotos.types";

export interface ISacola {

    _id?: string;
    nome: string;
    preco: number;
    condicao: string;
    imagem: IPhoto[];
    cor: ICor[];
    marca?: string;
    fk_id_categoria: string;
    quantidade: number;
    descricao: string;
    tamanho: string;
    composicao: string;
    fk_id_brecho: string;
    fk_id_marca?: string;
    quantidade_selecionada: number
}

export interface ISacolaBrecho {

    _id?: Types.ObjectId;
    material: string;
    padrao: string;
    tamanho: string;
    cor_corpo?: string;
    cor_alca?: string;
    cor?: string;
    valor: number;
    id_brecho: string;
};

export interface ICreateSacolaBrecho {

    material: string;
    padrao: string;
    tamanho: string;
    cor_corpo?: string;
    cor_alca?: string;
    cor?: string;
    valor: number;
    id_brecho: string;
};

export interface IUpdateSacolaBrecho {

    material?: string;
    padrao?: string;
    tamanho?: string;
    cor_corpo?: string;
    cor_alca?: string;
    cor?: string;
    valor?: number;
    id_brecho?: string;
};