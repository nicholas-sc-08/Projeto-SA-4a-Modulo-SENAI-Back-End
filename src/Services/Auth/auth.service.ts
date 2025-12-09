import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";
import { buscar_brechos_email } from "../Brecho/brecho.service";
import { buscar_cliente_email} from "../Cliente/cliente.service";

configDotenv();

export async function autenticar(email: string, senha: string): Promise<string | null> {

    const JWT_SECRET: string = process.env.JWT_SECRET || "";
    const cliente = await buscar_cliente_email(email);
    const brecho = await buscar_brechos_email(email);

    if (cliente) {

        if (senha != cliente.senha) {

            return null;
        } else {

            const token: string = jwt.sign({email: cliente.email, senha: cliente.senha}, JWT_SECRET, { expiresIn: "10hr" });
            return token;
        };
    };

    if (brecho) {

        if (senha != brecho.senha) {

            return null;
        } else {

            const token: string = jwt.sign({email: brecho.email, senha: brecho.senha}, JWT_SECRET, { expiresIn: "10hr" });
            return token;
        };
    };

    return null;
};