import { IBrecho, ICreateBrecho, IUpdateBrecho } from "../../types/IBrecho.types";
import { ModelBrecho } from "../../Models/BrechoSchema.models";
import bcrypt from "bcrypt";

export async function buscar_brechos(): Promise<IBrecho[] | null> {

    try {

        const brechos = await ModelBrecho.find();
        return brechos;

    } catch (erro) {

        console.error(erro);
        throw new Error(`Falha ao buscar os Brechós`);
    };
};

export async function buscar_brecho_id(id_brecho: string): Promise<IBrecho | null> {

    try {

        const brecho = await ModelBrecho.findById(id_brecho);
        return brecho;

    } catch (erro) {

        console.error(erro);
        throw new Error(`Falha ao buscar o Brechó pelo ID`);
    };
};

export async function cadastrar_brecho(data_brecho: ICreateBrecho): Promise<IBrecho | null> {

    try {

        const brecho = new ModelBrecho(data_brecho);

        const senha_criptografada : string = await bcrypt.hash(data_brecho.senha, 10);
        data_brecho.senha = senha_criptografada;

        const salvar_brecho = brecho.save();
        return salvar_brecho;

    } catch (erro) {

        console.error(erro);
        throw new Error(`Falha ao cadastrar o Brechó`);
    };
};

export async function atualizar_brecho(id_brecho: string, data_brecho: IUpdateBrecho): Promise<IBrecho | null> {

    try {

        const brecho_atualizado = await ModelBrecho.findByIdAndUpdate(id_brecho, data_brecho, { new: true });
        return brecho_atualizado;

    } catch (erro) {

        console.error(erro);
        throw new Error(`Falha ao atualizar o Brechó pelo ID`);
    };
};

export async function deletar_brecho(id_brecho: string): Promise<void>{

    try {

        const brecho = await ModelBrecho.findByIdAndDelete(id_brecho);
        
    } catch (erro) {
      
        console.error(erro);
        throw new Error(`Falha ao deletar o Brechó`);
    };
};