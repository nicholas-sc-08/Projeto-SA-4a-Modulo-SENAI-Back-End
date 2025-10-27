import { Types } from "mongoose";
import { ICor } from "./Icor.types";
import { IPhoto } from "./Iphotos.types";
import { tipo_do_pedido_brecho } from "../utils/enums.utils";

export interface ISacola {

    _id?: string;
    nome: string;
    preco: number;
    condicao: string;
    imagem: string[];
    cor: string[];
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
    tipo: tipo_do_pedido_brecho,
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

    tipo: tipo_do_pedido_brecho,
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

    tipo?: tipo_do_pedido_brecho,
    material?: string;
    padrao?: string;
    tamanho?: string;
    cor_corpo?: string;
    cor_alca?: string;
    cor?: string;
    valor?: number;
    id_brecho?: string;
};