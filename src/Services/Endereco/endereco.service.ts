import { ICreateEndereco, IUpdateEndereco, IEndereco } from "../../types/IEndereco.types";
import { ModelEndereco } from "../../Models/EnderecoSchema.models";

export async function buscar_enderecos(): Promise<IEndereco[] | null> {

    try {

        const enderecos = await ModelEndereco.find();
        return enderecos;

    } catch (erro) {

        console.error(erro);
        throw new Error(`Falha ao buscar os Endereços`);
    };
};

export async function buscar_enderecos_id(id_endereco: string): Promise<IEndereco | null> {

    try {

        const endereco = await ModelEndereco.findById(id_endereco);
        return endereco;

    } catch (erro) {

        console.error(erro);
        throw new Error(`Falha ao buscar o Endereço pelo ID`);
    };
};

export async function cadastrar_endereco(data_endereco: ICreateEndereco): Promise<IEndereco | null> {

    try {

        const endereco = new ModelEndereco(data_endereco);
        const salvar_endereco = await endereco.save();
        return salvar_endereco;

    } catch (erro) {

        console.error(erro);
        throw new Error(`Falha ao cadastrar o Endereço`);
    };
};

export async function atualizar_endereco(id_endereco: string, data_endereco: IUpdateEndereco): Promise<IEndereco | null> {

    try {

        const endereco = await ModelEndereco.findByIdAndUpdate(id_endereco, data_endereco, { new: true });
        return endereco;

    } catch (erro) {

        console.error(erro);
        throw new Error(`Falha ao atualizar o Endereço`);
    };
};

export async function deletar_endereco(id_endereco: string): Promise<void> {

    try {

        const endereco = await ModelEndereco.findByIdAndDelete(id_endereco);
        
    } catch (erro) {
      
        console.error(erro);
        throw new Error(`Falha ao deletar o Endereço`);
    };
};