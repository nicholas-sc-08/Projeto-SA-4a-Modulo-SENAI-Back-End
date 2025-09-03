import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const url: string = process.env.MONGO_URL as string;

export const conect_mongo = async () => {

    try {

        await mongoose.connect(url);

    } catch (erro) {

        console.error(erro);
    };
};
