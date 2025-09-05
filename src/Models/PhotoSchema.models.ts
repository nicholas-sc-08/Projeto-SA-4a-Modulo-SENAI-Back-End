import { model, Schema } from "mongoose";
import { IPhoto } from "../types/Iphotos.types";

export const photo_schema = new Schema<IPhoto>({

    imagem_um: { type: String, required: true },
    imagem_dois: { type: String, required: false },
    imagem_tres: { type: String, required: false }
});