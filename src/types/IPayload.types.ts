import { IOrder } from "./IOrder.types";

export interface IPayload {

    orderId: string,
    order: IOrder,
    sku: string,
};