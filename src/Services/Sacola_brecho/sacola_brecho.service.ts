import { ISacolaBrecho } from "../../types/ISacola.types";
import { ModelSacolaBrecho } from "../../Models/SacolaBrechoSchema.models";
import { ICreateBrecho, IUpdateBrecho } from "../../types/IBrecho.types";
import { pedido_sacola_para_maquina } from "../../utils/converter.utils";

export async function buscar_sacolas_brechos(): Promise<ISacolaBrecho[] | null> {

    try {

        const sacolas = await ModelSacolaBrecho.find(); 
        return sacolas;
        
    } catch (erro: any) {
      
        console.error(erro.message);
        throw new Error(`Erro ao buscar as sacolas dos Brechós`);
    };
};

export async function buscar_sacola_brecho_id(id: string): Promise<ISacolaBrecho | null> {

    try {

        const sacola = await ModelSacolaBrecho.findById(id);
        return sacola;
        
    } catch (erro: any) {
      
        console.error(erro.message);
        throw new Error(`Erro ao buscar a sacola do brechó pelo ID`);
    };
};

export async function cadastrar_sacola_brecho(data: ICreateBrecho): Promise<ISacolaBrecho | null> {

    try {

        const nova_sacola = new ModelSacolaBrecho(data);
        const sacola_salva = await nova_sacola.save();
        pedido_sacola_para_maquina(sacola_salva);
        return sacola_salva;
        
    } catch (erro: any) {
      
        console.error(erro.message);
        throw new Error(`Erro ao cadastrar a sacola do brechó`);
    };
};

export async function atualizar_sacola_brecho(id: string, data: IUpdateBrecho): Promise<ISacolaBrecho | null>{

    try {

        const sacola_atualizada = await ModelSacolaBrecho.findByIdAndUpdate(id, data);
        return sacola_atualizada;
        
    } catch (erro: any) {
      
        console.error(erro.message);
        throw new Error(`Erro ao atualizar a sacola do brechó pelo ID`);
    };
};

export async function deletar_sacola_brecho(id: string): Promise<void> {

    try {

        const sacola_deletada = await ModelSacolaBrecho.findByIdAndDelete(id);
        
    } catch (erro: any) {
      
        console.error(erro.message);
        throw new Error(`Erro ao deletar a sacola do brechó pelo ID`);
    };
};