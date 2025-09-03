import { z } from "zod";

export const cor_schema = z.object({

    cor_um: z.string().min(1),
    cor_dois: z.string().optional(),
    cor_tres: z.string().optional()
});