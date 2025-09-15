import { Request, Response } from "express";
import { upload_image } from "../Services/upload.service";

export async function upload_file(req: Request, res: Response) {

    try {

        const filePath = req.file?.path;
        if(!filePath){

           return res.status(404).json({error: `Arquivo não encontrado`});
        };

        const resultado = await upload_image(filePath);
        return res.status(200).json({
            url: resultado.secure_url,
            public_id: resultado.public_id
        });
    } catch (erro: any) {
      
        return res.status(500).json({erro: erro.message});
    };
};