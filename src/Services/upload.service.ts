import cloudinary from "../config/cloudinary";
import { UploadApiResponse, UploadApiErrorResponse } from "cloudinary";

export async function upload_image(filePath: string) : Promise<UploadApiResponse | UploadApiErrorResponse>{

    try {
      
        const resultado = await cloudinary.uploader.upload(filePath, {
            folder: "fly"
        });
        return resultado;

    } catch (erro: any) {
      
        console.error(erro);
        throw new Error(`Erro ao fazer upload para o Cloudinary`);  
    };
};