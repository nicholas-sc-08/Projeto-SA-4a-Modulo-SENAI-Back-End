import { generateTextService } from "../Services/Gemini/gemini.service";
import { Request, Response } from "express";

export async function textController(req: Request, res: Response) {

    try {

        const data = req.body;
        const text = await generateTextService(data);
        res.status(200).json(text);

    } catch (erro: any) {

        res.status(400).json({ error: erro.message });
    };
};