import { ICategoria, ICreateCategoria, IUpdateCategoria } from "../../types/ICategoria.types";
import { ModelCategoria } from "../../Models/CategoriaSchema.models";

export async function buscar_categorias(): Promise<ICategoria[] | null> {

    try {

        const categorias : ICategoria[] | null = await ModelCategoria.find();
        return categorias;
        
    } catch (erro) {
      
        console.error(erro);
        throw new Error(`Falha ao buscas as Categorias`);
    };
};