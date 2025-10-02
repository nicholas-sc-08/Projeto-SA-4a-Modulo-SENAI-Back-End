import { z } from "zod";
import { bloco_schema } from "./bloco.validation";
import { andares_pedido } from "../../utils/enums.utils";

export const pedido_schema = z.object({

    codigoProduto: z.enum(andares_pedido),
    bloco1: bloco_schema,
    bloco2: bloco_schema.optional(),
    bloco3: bloco_schema.optional()
});

export const pedido_schema_update = pedido_schema.partial();