import { model, Schema } from "mongoose";
import { ICor } from "../types/Icor.types";

export const cor_schema = new Schema<ICor>({

    cor_um: { type: String, required: true },
    cor_dois: { type: String, required: false },
    cor_tres: { type: String, required: false }
});