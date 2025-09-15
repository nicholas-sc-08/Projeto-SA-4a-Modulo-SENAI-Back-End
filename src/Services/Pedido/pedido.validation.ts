import { z } from "zod";
import { bloco_schema } from "./bloco.validation";

export const pedido_schema = z.object({

    codigoProduto: z.number().int(),
    bloco1: bloco_schema,
    bloco2: bloco_schema.optional(),
    bloco3: bloco_schema.optional()
});

export type PedidoType = z.infer<typeof pedido_schema>;