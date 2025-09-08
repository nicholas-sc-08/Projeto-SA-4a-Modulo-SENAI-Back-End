import { Request, Response } from "express";
import { categoria_schema, categoria_update_schema } from "../Services/Categoria/categoria.validation";
import * as categoriaService from "../Services/Categoria/categoria.service";

export async function get_categorias(req: Request, res: Response) {

    try {

        const categorias = await categoriaService.buscar_categorias();
        
        if(!categorias){

            res.status(404).json({message: `Categorias não encontradas!`});
        } else {

            res.status(200).json(categorias);
        };
        
    } catch (erro: any) {
      
        res.status(500).json({message: erro.message});
    };
};

export async function get_categoria(req: Request, res: Response) {

    try {

        const { id } = req.params;
        const categoria = await categoriaService.buscar_categoria_id(id);

        if(!categoria){

            res.status(404).json({message: `Erro ao encontrar a Categoria pelo ID!`});
        } else {

            res.status(200).json(categoria);
        };
        
    } catch (erro: any) {
      
        res.status(500).json({message: erro.message});
    };
};

export async function post_categoria(req: Request, res: Response) {

    try {

        const data = req.body;
        const categoria_validada = categoria_schema.parse(data);

        if(!categoria_validada){

            res.status(401).json({message: `Categoria não tem um formato válido!`});
        } else {

            const categoria_cadastrada = await categoriaService.cadastrar_categoria(categoria_validada);
            res.status(201).json(categoria_cadastrada);
        };
        
    } catch (erro: any) {
      
        res.status(500).json({message: erro.message});
    };
};

export async function put_categoria(req: Request, res: Response) {

    try {

        const { id } = req.params;
        const data = req.body;
        const categoria_validada = categoria_update_schema.parse(data);

        if(!categoria_validada) {

            res.status(401).json({message: `Categoria não tem um formato válido para atualizar!`});
        } else {

            const categoria_atualizada = await categoriaService.atualizar_categoria(id, categoria_validada);
            res.status(200).json(categoria_atualizada);
        };
        
    } catch (erro: any) {
      
        console.error(erro);
        res.status(500).json({message: erro.message});
    };
};

export async function delete_categoria(req: Request, res: Response) {

    try {

        const { id } = req.params;
        const categoria_deletada = await categoriaService.deletar_categoria(id);
        res.status(200).json({message: `Categoria deletada com sucesso!`});
        
    } catch (erro: any) {
      
        res.status(500).json({message: erro.message});
    };
};