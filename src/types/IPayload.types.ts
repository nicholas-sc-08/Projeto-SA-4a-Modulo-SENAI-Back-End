import { IPedido, IPedidoUpdate } from "./IPedido.types";
import { ISacola, ISacolaBrecho, } from "./ISacola.types";

export interface IPayload {

    id?: string;
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

export interface CheckoutBodyClient {
  items: ISacola[] ;
  amount: number;
  productId: string;
};

export interface CheckoutBodyBrecho {
  items: ISacolaBrecho[] ;
  amount: number;
  productId: string;
};