import { IBuscasRecentes } from "./IBuscasRecentes.types";
import { IConversas } from "./IConversas.types";
import { ISacola } from "./ISacola.types";

export interface ICreateCliente {

    nome: string,
    email: string,
    senha: string,
    telefone: string,
    cpf: string,
    data_de_nascimento: Date,
    imagem_de_perfil: string,
    conversas?: Array<IConversas>,
    buscas_recentes?: Array<IBuscasRecentes>,
    sacola?: Array<ISacola>,
    produtos_comprados?: Array<ISacola>,
    createdAt?: Date,
    updatedAt?: Date
}

export interface IUpdateCliente {

    nome?: string,
    email?: string,
    senha?: string,
    telefone?: string,
    cpf?: string,
    data_de_nascimento?: Date,
    imagem_de_perfil?: string,
    conversas?: Array<IConversas>,
    buscas_recentes?: Array<IBuscasRecentes>,
    sacola?: Array<ISacola>,
    produtos_comprados?: Array<ISacola>,
    createdAt?: Date,
    updatedAt?: Date
}