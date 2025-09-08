import { Request, Response } from "express";
import { brecho_schema, brecho_update_schema } from "../Services/Brecho/brecho.validation";
import bcrypt from "bcrypt";
import * as brechosService from "../Services/Brecho/brecho.service";

export async function get_brechos(req: Request, res: Response) {

    try {

        const brechos = await brechosService.buscar_brechos();

        if (!brechos) {

            res.status(404).json({ message: `Brechós não encontrados!` });
        } else {

            res.status(200).json(brechos);
        };

    } catch (erro: any) {

        res.status(500).json({ message: erro.message });
    };
};

export async function get_brecho(req: Request, res: Response) {

    try {

        const { id } = req.params;
        const brecho = await brechosService.buscar_brecho_id(id);

        if (!brecho) {

            res.status(404).json({ message: `Brechó não encontrado!` });
        } else {

            res.status(200).json(brecho);
        };

    } catch (erro: any) {

        res.status(500).json({ message: erro.message });
    };
};

export async function post_brecho(req: Request, res: Response) {

    try {

        const data = req.body;
        const brecho_valido = brecho_schema.parse(data);
        
        if(!brecho_valido) {
            
            res.status(401).json({message: `Brechó não está válido para cadastro!`});
        } else {
            
            const brecho_cadastrado = await brechosService.cadastrar_brecho(data);
            res.status(201).json(brecho_cadastrado);
        };
        
    } catch (erro: any) {
      
        res.status(500).json({message: erro.message});
    };
};

export async function put_brecho(req: Request, res: Response) {

    try {

        const { id } = req.params;
        const data = req.body;
        const brecho_valido = brecho_update_schema.parse(data);

        if(!brecho_valido) {

            res.status(401).json({message: `Formato do brechó não está válido para atualizar!`});
        } else {

            const brecho_atualizado = await brechosService.atualizar_brecho(id, brecho_valido);
            res.status(200).json(brecho_atualizado);
        };
        
    } catch (erro: any) {
      
        res.status(500).json({message: erro.message});
    };
};

export async function delete_brecho(req: Request, res: Response) {

    try {

        const { id } = req.params;
        const brecho_deletado = await brechosService.deletar_brecho(id);
        res.status(200).json({message: `Brechó deletado com sucesso!`});
        
    } catch (erro: any) {
      
        res.status(500).json({message: erro.message});
    };
};