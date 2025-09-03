import { produto_schema } from "./produto.validation";
import { ICreateProduto, IUpdateProduto } from "../../types/IProduto.types";
import { IProduto } from "../../types/IProduto.types";
import { ModelProduto } from "../../Models/ProdutoSchema.models";

export const buscar_produtos = async (): Promise<IProduto[] | null> => {

    try {

        const produtos = await ModelProduto.find();
        return produtos;

    } catch (erro) {

        console.error(erro);
        throw new Error(`Falha ao buscar os produtos`);
    };
}

export const buscar_produto_id = async (id_produto: string): Promise<IProduto | null> => {

    try {

        const produto = await ModelProduto.findById(id_produto);
        return produto;

    } catch (erro) {

        console.error(erro);
        throw new Error(`Falha ao buscar o produto pelo ID`);
    };
}

export const criar_produto = async (data: ICreateProduto): Promise<IProduto | null> => {

    try {

        const novo_produto = new ModelProduto(data);
        const produto_salvo = await novo_produto.save();
        return produto_salvo;

    } catch (erro) {

        console.error(erro);
        throw new Error(`Falha ao cadastrar produto`);
    };
};

export const atualizar_produto = async (id_produto: string, data_atualizado: IUpdateProduto): Promise<IProduto | null> => {

    try {

        const produto = await ModelProduto.findByIdAndUpdate(id_produto, data_atualizado, { new: true });
        return produto;
    } catch (erro) {

        console.error(erro);
        throw new Error(`Falha ao atualizar o produto`);
    };
}

export const deletar_produto = async (id_produto: string): Promise<IProduto | null> => {

    try {

        const produto = await ModelProduto.findByIdAndDelete(id_produto);
        return produto;
        
    } catch (erro) {
  
        console.error(erro);
        throw new Error(`Falha ao deletar o produto`);
    };
};