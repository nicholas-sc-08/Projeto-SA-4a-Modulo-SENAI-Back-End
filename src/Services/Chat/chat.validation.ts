import { z } from "zod";

export const chat_schema = z.object({

    mensagem: z.string(),
    hora: z.string(),
    data_mensagem: z.date(),
    id_dono_mensagem: z.string(),
    id_dono_quem_recebeu: z.string(),
    mensagem_lida_quem_recebeu: z.boolean()
});

export const chat_update_schema = chat_schema.partial();