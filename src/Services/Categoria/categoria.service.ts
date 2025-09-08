import { ICategoria, ICreateCategoria, IUpdateCategoria } from "../../types/ICategoria.types";
import { ModelCategoria } from "../../Models/CategoriaSchema.models";

export async function buscar_categorias(): Promise<ICategoria[] | null> {

    try {

        const categorias = await ModelCategoria.find();
        return categorias;
        
    } catch (erro) {
      
        console.error(erro);
        throw new Error(`Falha ao buscas as Categorias`);
    };
};

export async function buscar_categoria_id(id_categoria: string): Promise<ICategoria | null> {

    try {

        const categoria = await ModelCategoria.findById(id_categoria);
        return categoria;
        
    } catch (erro) {
      
        console.error(erro);
        throw new Error(`Falha ao buscar a Categoria pelo ID`)
    };
};

export async function cadastrar_categoria(data_categoria: ICreateCategoria): Promise<ICategoria | null> {

    try {

        const categoria = new ModelCategoria(data_categoria);
        const salvar_categoria = await categoria;
        return salvar_categoria;

    } catch (erro) {
      
        console.error(erro);
        throw new Error(`Falha ao cadastrar Categoria`);
    };
};

export async function atualizar_categoria(id_categoria: string, data_categoria: IUpdateCategoria) {
  
    try {

        const categoria = await ModelCategoria.findByIdAndUpdate(id_categoria, data_categoria, { new: true });
        return categoria;
        
    } catch (erro) {
      
        console.error(erro);
        throw new Error(`Falha ao atualizar a Categoria pelo ID`);
    };
};

export async function deletar_categoria(id_categoria: string): Promise<void> {

    try {

        const categoria = await ModelCategoria.findByIdAndDelete(id_categoria);
        
    } catch (erro) {
      
        console.error(erro);
        throw new Error(`Falha ao deletar a Categoria`);
    };
};