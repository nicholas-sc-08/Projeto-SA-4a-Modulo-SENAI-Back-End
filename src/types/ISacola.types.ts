import { ICor } from "./Icor.types";
import { IPhoto } from "./Iphotos.types";

export interface ISacola {

    _id?: string,
    nome: string,
    preco: number,
    condicao: string,
    imagem: IPhoto[],
    cor: ICor[],
    marca?: string,
    fk_id_categoria: string,
    quantidade: number,
    descricao: string,
    tamanho: string,
    composicao: string,
    fk_id_brecho: string,
    fk_id_marca?: string,
    quantidade_selecionada: number
}