import z from "zod";

export const prompt_schema = z.object({

    prompt: z.string().min(1)
});