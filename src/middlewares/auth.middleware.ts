import type { Request, Response, NextFunction } from "express";
import type { ILogado } from "../types/ILogado.types";
import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";

configDotenv();
declare global {

    namespace Express {
        interface Request {
            user?: ILogado;
        }
    }
};

const JWT_SECRET: string = process.env.JWT_SECRET || "";

export function autenticar_token(req: Request, res: Response, next: NextFunction) {

    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(' ')[1];

    if(token == null){

        return res.status(401).json({message: "Unauthorized"});
    };

    jwt.verify(token, JWT_SECRET, (error, user) => {

        if(error){

            return res.status(403).json({message: error.message});
        };

        req.user = user as ILogado;
        next();
    });
};