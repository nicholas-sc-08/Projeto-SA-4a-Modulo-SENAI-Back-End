import { ICreateMarcas, IMarcas, IUpdateMarcas } from "../../types/IMarcas.types";
import { ModelMarca } from "../../Models/MarcaSchema.models";

export async function buscar_marcas(): Promise<IMarcas[] | null> {

    try {

        const marcas: IMarcas[] = await ModelMarca.find();
        return marcas;

    } catch (erro) {

        console.error(erro);
        throw new Error(`Falha ao buscar Marcas`);
    };
};

export async function buscar_marca_id(id_marca: string): Promise<IMarcas | null> {

    try {

        const marca = await ModelMarca.findById(id_marca);
        return marca;

    } catch (erro) {

        console.error(erro);
        throw new Error(`Falha ao encontrar a Marca pelo ID`);
    };
};

export async function cadastrar_marca(data_marca: ICreateMarcas): Promise<IMarcas | null> {

    try {

        const marca = new ModelMarca(data_marca);
        const salvar_marca = await marca.save();
        return salvar_marca;

    } catch (erro) {

        console.error(erro);
        throw new Error(`Falha ao cadastrar a Marca`);
    };
};

export async function atualizar_marca(id_marca: string, data_atualizado: IUpdateMarcas): Promise<ICreateMarcas | null> {

    try {

        const marca = await ModelMarca.findByIdAndUpdate(id_marca, data_atualizado, { new: true});
        return marca;

    } catch (erro) {
      
        console.error(erro);
        throw new Error(`Falha ao atualizar a Marca`);
    };
};

export async function deletar_marca(id_marca: string): Promise<void> {

    try {

        const marca = await ModelMarca.findByIdAndDelete(id_marca);
        
    } catch (erro) {
      
        console.error(erro);
        throw new Error(`Falha ao deletar a Marca`);
    };
};