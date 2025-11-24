import { ModelEstoque } from "../../Models/EstoqueSchema.models";
import { IEstoque, ICreateEstoque, IUpdateEstoque } from "../../types/IEstoque.types";

export async function buscar_estoques(): Promise<IEstoque[] | null> {

    try {

        const estoques: IEstoque[] | null = await ModelEstoque.find();
        return estoques;

    } catch (erro: any) {

        console.error(erro);
        throw new Error("Erro no service de buscar estoques");
    };
};

export async function buscar_estoque(id: string): Promise<IEstoque | null> {

    try {

        const estoque: IEstoque | null = await ModelEstoque.findById(id);
        return estoque;

    } catch (erro: any) {

        console.error(erro);
        throw new Error("Erro no service de buscar estoque");
    };
};

export async function cadastrar_estoque(data: ICreateEstoque): Promise<IEstoque> {

    try {

        const estoque: IEstoque = await ModelEstoque.create(data);
        return estoque;

    } catch (erro: any) {

        console.error(erro);
        throw new Error("Erro no service do estoque ao cadastrar");
    };
};

export async function atualizar_estoque(id: string, data: IUpdateEstoque): Promise<IEstoque | null> {

    try {

        const estoque: IEstoque | null = await ModelEstoque.findByIdAndUpdate(id, data);
        return estoque;

    } catch (erro: any) {

        console.error(erro);
        throw new Error("Erro no service do estoque ao atualizar");
    };
};

export async function deletar_estoque(id: string): Promise<void> {

    try {

        const estoque = await ModelEstoque.findByIdAndDelete(id);

    } catch (erro: any) {

        console.error(erro);
        throw new Error("Erro no service do estoque ao deletar");
    };
};