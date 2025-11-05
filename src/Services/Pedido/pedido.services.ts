import { IPayload, IPayloadUpdate } from "../../types/IPayload.types";
import axios from "axios";
import { pedido_sacola_para_maquina } from "../../utils/converter.utils";

export async function buscar_pedidos(): Promise<IPayload[] | null> {

    try {

        const resposta = await axios.get("http://52.1.197.112:3000/queue/items");
        return resposta.data

    } catch (erro: any) {

        console.error(erro);
        throw new Error(`Erro ao buscar os pedidos`);
    };
};

export async function buscar_pedido_pelo_id(id_payload: string): Promise<IPayload | null> {

    try {

        const resposta = await axios.get(`http://52.1.197.112:3000/queue/items/${id_payload}`);
        return resposta.data;

    } catch (erro: any) {

        console.error(erro);
        throw new Error(`Erro ao buscar o produto pelo ID`);
    };
};

export async function enviar_pedido(data: IPayload): Promise<IPayload | null> {

    try {

        console.log("maquina", data);
        
        const resposta = await axios.post("t", data);
        return resposta.data;

    } catch (erro: any) {

        console.error(erro);
        throw new Error(`Erro ao enviar pedido para a máquina.`);
    };
};

export async function atualizar_pedido(id_payload: string, payload: IPayloadUpdate): Promise<IPayload | null> {

    try {

        const resposta = await axios.put(`http://52.1.197.112:3000/queue/items/${id_payload}`, payload);
        return resposta.data;

    } catch (erro: any) {

        console.error(erro);
        throw new Error(`Erro ao atualizar o pedido`);
    };
};

export async function deletar_pedido(id_payload: string): Promise<void> {

    try {

        const pedido = await axios.delete(`http://52.1.197.112:3000/queue/items/${id_payload}`)

    } catch (erro: any) {

        console.error(erro);
        throw new Error(`Erro ao deletar o pedido`);
    };
};