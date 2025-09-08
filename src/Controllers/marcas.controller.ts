import { Request, Response } from "express";
import { marca_schema, marca_update_schema } from "../Services/Marca/marca.validation";
import * as marcasServices from "../Services/Marca/marca.service"

export async function get_marcas(req: Request, res: Response) {

    try {

        const marcas = await marcasServices.buscar_marcas();

        if(!marcas) {

            res.status(404).json({message: `marcas não foram encontrados!`});
        } else {

            res.status(200).json(marcas);
        };
        
    } catch (erro: any) {
      
        res.status(500).json({message: erro.message});
    };
};

export async function get_marca(req: Request, res: Response) {

    try {

        const { id } = req.params;
        const marca = await marcasServices.buscar_marca_id(id);

        if(!marca) {

            res.status(200).json(marca);
        };
        
    } catch (erro: any) {
      
        res.status(500).json({message: erro.message});
    };
};

export async function post_marca(req: Request, res: Response) {

    try {

        const data = req.body;
        const marca_valida = marca_schema.parse(data);

        if(!marca_valida){

            res.status(401).json({message: `Marca não está válido para cadastro!`});
        } else {

            const marca_criada = await marcasServices.cadastrar_marca(marca_valida);
            res.status(201).json(marca_criada);
        };
        
    } catch (erro: any) {
      
        res.status(500).json({message: erro.message});        
    };
};

export async function put_marca(req: Request, res: Response) {

    try {

        const { id } = req.params;
        const data = req.body;
        const marca_valida = marca_update_schema.parse(data);

        if(!marca_valida) {

            res.status(401).json({message: `Formato inválido para atualizar!`});
        } else {

            const marca_atualizada = await marcasServices.atualizar_marca(id, marca_valida);
            res.status(200).json(marca_atualizada);
        };
        
    } catch (erro: any) {
      
        res.status(500).json({message: erro.message});
    };
};

export async function delete_marca(req: Request, res: Response) {

    try {

        const { id } = req.params;
        const marca_deletada = await marcasServices.deletar_marca(id);
        res.status(200).json({message: `Marca deletada com sucesso!`});
        
    } catch (erro: any) {
      
        res.status(500).json({message: erro.message});
    };
};