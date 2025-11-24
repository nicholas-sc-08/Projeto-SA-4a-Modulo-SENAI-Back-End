import * as EstoqueServices from "../Services/Estoque/estoque.service";
import { estoque_schema, estoque_update_schema } from "../Services/Estoque/estoque.validation";
import { Request, Response } from "express";

export async function get_estoques(req: Request, res: Response){

    try {

        const estoques = await EstoqueServices.buscar_estoques();

        if(!estoques){

            res.status(404).json("Estoques não foram encontrados");
        } else {

            res.status(200).json(estoques);
        };

    } catch (erro: any) {
        
        res.status(500).json(erro);
    };
};

export async function get_estoque(req: Request, res: Response){

    try {

        const { id } = req.params;
        const estoque = await EstoqueServices.buscar_estoque(id);

        if(!estoque){

            res.status(404).json("Estoque não foi encontrado");
        } else {

            res.status(200).json(estoque);
        };

    } catch (erro: any) {
        
        res.status(500).json(erro);
    };
};

export async function post_estoque(req: Request, res: Response){

    try {

        const estoque_validado = estoque_schema.parse(req.body);

        if(!estoque_validado){

            res.status(401).json("Formato de objeto de estoque inválido para cadastro");
        } else {

            const estoque = await EstoqueServices.cadastrar_estoque(req.body);
            res.status(201).json(estoque);
        };
        
    } catch (erro: any) {
        
        res.status(500).json(erro);
    };
};

export async function put_estoque(req: Request, res: Response){

    try {

        const { id } = req.params;
        const estoque_validado = estoque_update_schema.parse(req.body);

        if(estoque_validado){

            res.status(401).json("Formato de objeto de estoque inválido para cadastro");
        } else {

            const estoque = await EstoqueServices.atualizar_estoque(id, req.body);
            res.status(200).json(estoque);
        };
        
    } catch (erro: any) {
        
        res.status(500).json(erro);
    };
};

export async function delete_estoque(req: Request, res: Response){

    try {

        const { id } = req.params;
        const estoque_deletado = await EstoqueServices.deletar_estoque(id);
        res.status(200).json("Estoque deletado com sucesso!");
        
    } catch (erro: any) {
        
        res.status(500).json(erro);
    };
};