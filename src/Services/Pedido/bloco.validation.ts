import { z } from "zod";
import { cor_bloco, cor_laminas_bloco, padroes_bloco } from "../../utils/enums.utils";

export const bloco_schema = z.object({

    cor: z.enum(cor_bloco),
    lamina1: z.enum(cor_laminas_bloco),
    lamina2: z.enum(cor_laminas_bloco),
    lamina3: z.enum(cor_laminas_bloco),
    padrao1: z.enum(padroes_bloco),
    padrao2: z.enum(padroes_bloco),
    padrao3: z.enum(padroes_bloco)
});

export const bloco_schema_update = bloco_schema.partial();