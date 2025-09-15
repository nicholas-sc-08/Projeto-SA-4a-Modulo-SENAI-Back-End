import { IPayload } from "../../types/IPayload.types";
import axios from "axios";

export async function buscar_pedidos(): Promise<IPayload[] | null>{

    try {

        const resposta = await axios.get("http://52.1.197.112:3000/queue/items");
        return resposta.data
        
    } catch (erro: any) {
      
        console.error(erro);
        throw new Error(`Erro ao buscar os pedidos`);
    };
};

export async function enviar_pedido(payload: IPayload): Promise<IPayload | null>{

    try {

        const resposta = await axios.post("http://52.1.197.112:3000/queue/items", payload);
        return resposta.data;

    } catch (erro: any) {
      
        console.error(erro);
        throw new Error(`Erro ao enviar pedido para a máquina.`);
    };
};