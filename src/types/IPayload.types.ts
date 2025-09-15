import { IPedido } from "./IPedido.types";

export interface IPayload {

    payload: {
        orderId: string,
        sku: string,
        order: IPedido
    };
    callbackUrl: string
};