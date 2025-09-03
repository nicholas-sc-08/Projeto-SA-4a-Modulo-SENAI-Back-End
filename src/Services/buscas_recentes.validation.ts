import { z } from "zod";

export const buscas_recentes_schema = z.object({

    termo: z.string(),
    data: z.date()
});