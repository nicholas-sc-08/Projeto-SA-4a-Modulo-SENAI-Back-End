export interface ICreateEndereco {

    cep: string,
    bairro: string,
    logradouro: string,
    estado: string,
    cidade: string,
    numero: string,
    complemento: string,
    fk_id_brecho?: string,
    fk_id_cliente?: string
}

export interface IUpdateEndereco {

    cep?: string,
    bairro?: string,
    logradouro?: string,
    estado?: string,
    cidade?: string,
    numero?: string,
    complemento?: string,
    fk_id_brecho?: string,
    fk_id_cliente?: string
}