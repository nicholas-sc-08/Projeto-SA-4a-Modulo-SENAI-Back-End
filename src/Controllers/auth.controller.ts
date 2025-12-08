import { autenticar } from "../Services/Auth/auth.service";
import { Request, Response } from "express";

export async function login(req: Request, res: Response): Promise<Response> {

    try {

        const { email, senha } = req.body;
        const token: string | null = await autenticar(email, senha);

        if (!token) {

            return res.status(401).json({ message: "Credenciais inválidas" });
        };

        return res.status(200).json(token);

    } catch (erro: any) {

        return res.status(500).json({ error: erro.message });
    };
};