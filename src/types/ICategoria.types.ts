export interface ICreateCategoria {

    nome: string,
    sub_categoria: boolean,
    createdAt?: Date,
    updatedAt?: Date
}

export interface IUpdateCategoria {

    nome?: string,
    sub_categoria?: boolean,
    createdAt?: Date,
    updatedAt?: Date
}