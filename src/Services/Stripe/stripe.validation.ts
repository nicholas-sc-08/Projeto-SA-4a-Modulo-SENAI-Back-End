import z from "zod";

export const createCheckoutSessionSchema = z.object({

    body: z.object({
        productId: z.string().nonempty(),
        quantity: z.number().int().positive()
    }),
});

export type CreateCheckoutSessionInput = z.infer<typeof createCheckoutSessionSchema>['body'];

export const createCheckoutSessionBrechoSchema = z.object({
  body: z.object({
    items: z.array(z.object({
      tipo: z.string(),
      material: z.string(),
      padrao: z.string(),
      tamanho: z.string(),
      cor_corpo: z.string().optional(),
      cor_alca: z.string().optional(),
      cor: z.string().optional(),
      valor: z.number().positive(),
      quantidade: z.number().int().positive(),
      id_brecho: z.string(),
    }))
  }),
});

export type CreateCheckoutBrechoInput = z.infer<typeof createCheckoutSessionBrechoSchema>['body'];