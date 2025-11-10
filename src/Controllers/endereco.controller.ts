import { Request, Response } from "express";
import * as ServiceEndereco from "../Services/Endereco/endereco.service";
import { endereco_schema, endereco_update_schema } from "../Services/Endereco/endereco.validation";

export async function get_enderecos(req: Request, res: Response){

    try {

        const enderecos = await ServiceEndereco.buscar_enderecos();

        if(!enderecos){

            return res.status(404).json("Endereços não encontrados");
        } else {

            return res.status(200).json(enderecos);
        };
        
    } catch (erro: any) {
      
        return res.status(500).json(erro);
    };
};

export async function get_endereco(req: Request, res: Response){

    try {

        const { id } = req.params;
        const endereco = await ServiceEndereco.buscar_enderecos_id(id);

        if(!endereco){

            return res.status(404).json("Endereço não encontrado");
        } else {

            return res.status(200).json(endereco);
        };
        
    } catch (erro: any) {
      
        return res.status(500).json(erro);
    };
};

export async function post_endereco(req: Request, res: Response){

    try {

        const data = req.body;
        const validar_endereco = endereco_schema.parse(data);

        if(!validar_endereco){

            return res.status(401).json("Formato de endereço inválido para cadastro");
        } else {

            const endereco = await ServiceEndereco.cadastrar_endereco(data);
            return res.status(201).json(endereco);
        };
        
    } catch (erro: any) {
      
        console.error(erro);
    };
};

export async function put_endereco(req: Request, res: Response) {

    try {

        const { id } = req.params;
        const data = req.body;
        const validar_endereco = endereco_update_schema.parse(data);

        if(!validar_endereco) {

            return res.status(401).json("Formato de endereço inválido para atualizar");
        } else {

            const endereco = await ServiceEndereco.atualizar_endereco(id, data);
            return res.status(200).json(endereco);
        };
        
    } catch (erro: any) {
      
        return res.status(500).json(erro);
    };
};

export async function delete_endereco(req: Request, res: Response){

    try {

        const { id } = req.params;
        const endereco = await ServiceEndereco.deletar_endereco(id);
        
    } catch (erro: any) {
      
        return res.status(500).json(erro);
    };
};