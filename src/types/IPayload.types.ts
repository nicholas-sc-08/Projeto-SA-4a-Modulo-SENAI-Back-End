import { IPedido, IPedidoUpdate } from "./IPedido.types";

export interface IPayload {

    _id?: string;
    payload: {
        orderId: string;
        sku: string;
        order: IPedido;
    };
    callbackUrl: string;
};

export interface IPayloadUpdate {

    _id: string;
    payload: {
        orderId: string;
        sku: string;
        order: IPedidoUpdate;
    };
    callbackUrl: string;
};