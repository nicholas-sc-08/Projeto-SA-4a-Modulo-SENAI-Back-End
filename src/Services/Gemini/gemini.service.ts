import { prompt_schema } from "./gemini.validation";
import { gemini_model } from "../../config/gemini";

export async function generateTextService(data: unknown) {

    const { prompt } = prompt_schema.parse(data);
    const result = await gemini_model.generateContent(prompt);

    return result.response.text();
};