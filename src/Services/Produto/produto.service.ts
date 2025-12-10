import { ICreateProduto, IUpdateProduto } from "../../types/IProduto.types";
import { IProduto } from "../../types/IProduto.types";
import { ModelProduto } from "../../Models/ProdutoSchema.models";

export async function buscar_produtos(): Promise<IProduto[] | null> {

    try {

        const produtos = await ModelProduto.find();
        return produtos;

    } catch (erro) {

        console.error(erro);
        throw new Error(`Falha ao buscar os produtos`);
    };
}

export async function buscar_produto_id(id_produto: string): Promise<IProduto | null> {

    try {

        const produto = await ModelProduto.findById(id_produto);
        return produto;

    } catch (erro) {

        console.error(erro);
        throw new Error(`Falha ao buscar o produto pelo ID`);
    };
}

export async function criar_produto(data: ICreateProduto): Promise<IProduto | null> {

    try {

        const novo_produto = new ModelProduto(data);
        const produto_salvo = await novo_produto.save();
        return produto_salvo;

    } catch (erro) {

        console.error(erro);
        throw new Error(`Falha ao cadastrar produto`);
    };
};

export async function atualizar_produto(id_produto: string, data_atualizado: IUpdateProduto): Promise<IProduto | null> {

    try {

        const produto = await ModelProduto.findByIdAndUpdate(id_produto, data_atualizado, { new: true });
        return produto;
    } catch (erro) {

        console.error(erro);
        throw new Error(`Falha ao atualizar o produto`);
    };
}

export async function deletar_produto(id_produto: string): Promise<void> {

    try {

        const produto = await ModelProduto.findByIdAndDelete(id_produto);

    } catch (erro) {

        console.error(erro);
        throw new Error(`Falha ao deletar o produto`);
    };
};