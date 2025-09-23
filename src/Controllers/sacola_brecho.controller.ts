import { sacola_brecho_schema, sacola_brecho_schema_update } from "../Services/Sacola_brecho/sacola_brecho.validation";
import * as SacolaBrechoService from "../Services/Sacola_brecho/sacola_brecho.service";
import { Request, Response } from "express";
import { pedido_sacola_para_maquina } from "../utils/converter.utils";
import { post_pedido } from "./pedido.controller";
import { enviar_pedido } from "../Services/Pedido/pedido.services";

export async function get_sacolas_brechos(req: Request, res: Response) {

    try {

        const sacolas_brechos = await SacolaBrechoService.buscar_sacolas_brechos();
        
        if(!sacolas_brechos){

            res.status(404).json({message: `Sacolas Brechós não encontradas!`});
        } else {

            res.status(200).json(sacolas_brechos);
        };
        
    } catch (erro: any) {
      
        res.status(500).json({message: erro.message});
    };
};

export async function get_sacola_brecho(req: Request, res: Response) {

    try {

        const { id } = req.params;
        const sacola_brecho = await SacolaBrechoService.buscar_sacola_brecho_id(id);

        if(!sacola_brecho) {

            res.status(404).json({message: `Sacola brechó não foi encontrada!`});
        } else {

            res.status(200).json(sacola_brecho);
        };
        
    } catch (erro: any) {
      
        res.status(500).json({message: erro.message});
    };
};

export async function post_sacola_brecho(req: Request, res: Response) {

    try {

        const data = req.body;
        const validar_sacola_brecho = sacola_brecho_schema.parse(data);
        
        if(!validar_sacola_brecho) {
            
            res.status(401).json({message: `Sacola brechó não está valida para cadastro`});
        } else {
            
            const sacola_brecho = await SacolaBrechoService.cadastrar_sacola_brecho(data);
            pedido_sacola_para_maquina(data);
            res.status(201).json(sacola_brecho);
        };
        
    } catch (erro: any) {
      
        res.status(500).json({message: erro.message});
    };
};

export async function put_sacola_brecho(req: Request, res: Response) {

    try {

        const { id } = req.params;
        const data = req.body;
        const validar_sacola_brecho = sacola_brecho_schema_update.parse(data);

        if(!validar_sacola_brecho){

            res.status(401).json({message: `Sacola brechó não está valida para atualizar`});
        } else {

            const sacola_brecho = await SacolaBrechoService.atualizar_sacola_brecho(id, data);
            res.status(200).json(sacola_brecho);
        };
        
    } catch (erro: any) {
      
        res.status(500).json({message: erro.message});
    };
};

export async function delete_sacola_brecho(req: Request, res: Response){

    try {

        const { id } = req.params;
        const sacola_brecho = await SacolaBrechoService.deletar_sacola_brecho(id);
        
    } catch (erro: any) {
      
        res.status(500).json({message: erro.message});
    };
};