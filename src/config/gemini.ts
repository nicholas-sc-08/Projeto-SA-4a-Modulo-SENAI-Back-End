import { GoogleGenerativeAI } from "@google/generative-ai";

const api_key = process.env.GEMINI_API_KEY;

if (!api_key) {

    throw new Error("API Key do Gemini não encontrada na .env");
};

const gen_AI = new GoogleGenerativeAI(api_key);
export const gemini_model = gen_AI.getGenerativeModel({ model: "gemini-2.5-flash" });