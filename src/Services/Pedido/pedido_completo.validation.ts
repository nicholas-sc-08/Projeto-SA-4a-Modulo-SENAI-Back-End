import { z } from "zod";
import { pedido_schema } from "./pedido.validation";

export const pedido_completo_schema = z.object({

    _id: z.string().optional(),
    payload: z.object({

        orderId: z.string(),
        order: pedido_schema,
        sku: z.string()
    }),
    callbackUrl: z.string()
});

export const pedido_completo_schema_update = pedido_completo_schema.partial();