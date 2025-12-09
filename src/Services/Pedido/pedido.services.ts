import { IPayload, IPayloadUpdate } from "../../types/IPayload.types";
import axios from "axios";

const MAQUINA_URL = "http://52.72.137.244:3000";

export async function buscar_pedidos(): Promise<IPayload[] | null> {
    try {
        const resposta = await axios.get(`${MAQUINA_URL}/queue/items`);
        return resposta.data;
    } catch (erro: any) {
        console.error("Erro ao buscar pedidos:", erro);
        throw new Error(`Erro ao buscar os pedidos: ${erro.message}`);
    }
}

export async function buscar_pedido_pelo_id(id_payload: string): Promise<IPayload | null> {
    try {
        const resposta = await axios.get(`${MAQUINA_URL}/queue/items/${id_payload}`);
        return resposta.data;
    } catch (erro: any) {
        console.error("Erro ao buscar pedido:", erro);
        throw new Error(`Erro ao buscar o produto pelo ID: ${erro.message}`);
    }
}

export async function enviar_pedido(data: any): Promise<IPayload> {
    try {
        console.log("Enviando para máquina:", data);

        // Se data já vier com a estrutura { orderId, sku, order }
        // montamos o payload completo aqui
        const payload_completo: IPayload = {
            payload: data,
            callbackUrl: `${process.env.BACKEND_URL || 'http://localhost:3333'}/callback`
        };

        const resposta = await axios.post(`${MAQUINA_URL}/queue/items`, payload_completo);

        console.log("Resposta da máquina:", resposta.data);
        return resposta.data;
    } catch (erro: any) {
        console.error("Erro ao enviar pedido:", erro);
        throw new Error(`Erro ao enviar pedido para a máquina: ${erro.message}`);
    }
}

export async function atualizar_pedido(id_payload: string, payload: IPayloadUpdate): Promise<IPayload | null> {
    try {
        const resposta = await axios.put(`${MAQUINA_URL}/queue/items/${id_payload}`, payload);
        return resposta.data;
    } catch (erro: any) {
        console.error("Erro ao atualizar pedido:", erro);
        throw new Error(`Erro ao atualizar o pedido: ${erro.message}`);
    }
}

export async function deletar_pedido(id_payload: string): Promise<void> {
    try {
        await axios.delete(`${MAQUINA_URL}/queue/items/${id_payload}`);
    } catch (erro: any) {
        console.error("Erro ao deletar pedido:", erro);
        throw new Error(`Erro ao deletar o pedido: ${erro.message}`);
    }
}