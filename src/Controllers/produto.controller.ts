import { Request, Response } from "express";
import * as ServicoProduto from "../Services/Produto/produto.service";
import { produto_schema, produto_update_schema } from "../Services/Produto/produto.validation";

export async function get_produtos(req: Request, res: Response) {

    try {

        const produtos = await ServicoProduto.buscar_produtos();
        return res.json(produtos);

    } catch (erro: any) {

        return res.status(500).json({ message: erro.message });
    };
};

export async function get_produto_id(req: Request, res: Response) {

    try {

        const { id } = req.params;
        const produto = await ServicoProduto.buscar_produto_id(id);

        if (!produto) {

            return res.status(404).json({ message: `Produto não encontrado!` });
        } else {

            return res.json(produto);
        };

    } catch (erro: any) {

        return res.status(500).json({ message: erro.message });
    };
};

export async function post_produto(req: Request, res: Response) {

    try {

        const data_produto = produto_schema.parse(req.body);
        const novo_produto = await ServicoProduto.criar_produto(data_produto);
        return res.status(201).json(novo_produto);

    } catch (erro: any) {

        return res.status(500).json({ message: erro.message });
    };
};

export async function put_produto(req: Request, res: Response) {

    try {

        const { id } = req.params;
        const data_produto = produto_update_schema.parse(req.body);
        const produto_atualizado = await ServicoProduto.atualizar_produto(id, data_produto);

        if (!produto_atualizado) {

            return res.status(404).json({ message: `Produto não encontrado!` });
        } else {

            return res.status(200).json(produto_atualizado);
        };

    } catch (erro: any) {

        return res.status(500).json({ message: erro.message })
    };
};

export async function delete_produto(req: Request, res: Response) {

    try {

        const { id } = req.params;
        const produto = await ServicoProduto.deletar_produto(id);
        return res.json({ message: `Produto deletado com sucesso!` });

    } catch (erro: any) {

        return res.status(500).json({ message: erro.message });
    };
};