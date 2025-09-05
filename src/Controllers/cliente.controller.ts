import { Request, Response } from "express";
import * as ServicoCliente from "../Services/Cliente/cliente.service";
import { cliente_schema, cliente_update_schema } from "../Services/Cliente/cliente.validation";

export async function get_clientes(req: Request, res: Response) {

    try {

        const clientes = await ServicoCliente.buscar_clientes();

        if (!clientes) {

            return res.status(404).json({ message: `Clientes não Encontrado!` });
        } else {

            return res.status(200).json(clientes);
        };

    } catch (erro: any) {

        return res.status(500).json({ message: erro.message });
    };
};

export async function get_cliente_id(req: Request, res: Response) {

    try {

        const { id } = req.params;
        const cliente = await ServicoCliente.buscar_cliente_id(id);

        if (!cliente) {

            return res.status(404).json({ message: `Cliente não encontrado` });
        } else {

            return res.status(200).json(cliente);
        };

    } catch (erro: any) {

        return res.status(500).json({ message: erro.message });
    };
};

export async function post_cliente(req: Request, res: Response) {

    try {

        req.body.data_de_nascimento = new Date(req.body.data_de_nascimento);

        const cliente = cliente_schema.parse(req.body);
        const novo_cliente = await ServicoCliente.cadastrar_cliente(cliente);
        res.status(201).json(novo_cliente);

    } catch (erro: any) {

        return res.status(500).json({ message: erro.message });
    };
};

export async function put_cliente(req: Request, res: Response) {

    try {

        const { id } = req.params;
        const cliente = cliente_update_schema.parse(req.body);
        const cliente_atualizado = await ServicoCliente.atualizar_cliente(id, cliente);

        if (!cliente_atualizado) {

            return res.status(404).json({ message: `Cliente não encontrado` });

        } else {

            return res.status(200).json(cliente_atualizado);
        };

    } catch (erro: any) {

        return res.status(500).json({ message: erro.message });
    };
};

export async function delete_cliente(req: Request, res: Response) {

    try {

        const { id } = req.params;
        const cliente_deletado = await ServicoCliente.deletar_cliente(id);
        return res.status(200).json({ message: `Cliente deletado com sucesso!` });

    } catch (erro: any) {

        return res.status(500).json({ meesage: erro.message });
    };
};