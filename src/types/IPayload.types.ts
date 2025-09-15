import { IPedido, IPedidoUpdate } from "./IPedido.types";

export interface IPayload {

    payload: {
        orderId: string,
        sku: string,
        order: IPedido
    };
    callbackUrl: string
};

export interface IPayloadUpdate {

    payload: {
        orderId: string,
        sku: string,
        order: IPedidoUpdate
    };
    callbackUrl: string
};