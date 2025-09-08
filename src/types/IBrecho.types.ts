import { IBuscasRecentes } from "./IBuscasRecentes.types";
import { IConversas } from "./IConversas.types";
import { Types } from "mongoose";

export interface IBrecho {

    _id?: Types.ObjectId,
    nome_vendedor: string,
    data_de_nascimento_vendedor: Date,
    nome_brecho: string,
    email: string,
    telefone: string,
    senha: string,
    cnpj: string,
    logo: string,
    horario_funcionamento?: string,
    conversas?: IConversas[],
    buscas_recentes?: IBuscasRecentes[],
    createdAt?: Date,
    updatedAt?: Date,
}

export interface ICreateBrecho {

    nome_vendedor: string,
    data_de_nascimento_vendedor: Date,
    nome_brecho: string,
    email: string,
    telefone: string,
    senha: string,
    cnpj: string,
    logo: string,
    horario_funcionamento?: string,
    conversas?: IConversas[],
    buscas_recentes?: IBuscasRecentes[],
    createdAt?: Date,
    updatedAt?: Date,
}

export interface IUpdateBrecho {

    nome_vendedor?: string,
    data_de_nascimento_vendedor?: Date,
    nome_brecho?: string,
    email?: string,
    telefone?: string,
    senha?: string,
    cnpj?: string,
    logo?: string,
    horario_funcionamento?: string,
    conversas?: IConversas[],
    buscas_recentes?: IBuscasRecentes[],
    createdAt?: Date,
    updatedAt?: Date,
}