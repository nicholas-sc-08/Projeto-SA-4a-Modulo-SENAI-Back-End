import { IChat, ICreateChat, IUpdateChat } from "../../types/IChat.types";
import { ModelChat } from "../../Models/ChatSchema.model";

export async function buscar_chats(): Promise<IChat[] | null> {

    try {

        const chats = await ModelChat.find();
        return chats;

    } catch (erro) {

        console.error(erro);
        throw new Error(`Falha ao buscar as Conversas`);
    };
};

export async function buscar_chat_pelo_id(id_chat: string): Promise<IChat | null> {

    try {

        const chat = await ModelChat.findById(id_chat);
        return chat;

    } catch (erro) {

        console.error(erro);
        throw new Error(`Falha ao buscar a Conversa pelo ID`);
    };
};

export async function cadastrar_chat(data_chat: ICreateChat): Promise<IChat | null> {

    try {

        const chat = new ModelChat(data_chat);
        const salvar_chat = await chat.save();
        return salvar_chat;

    } catch (erro) {

        console.error(erro);
        throw new Error(`Falha ao cadastrar a Conversa`);
    };
};

export async function atualizar_chat(id_chat: string, data_chat: IUpdateChat): Promise<IChat | null> {

    try {

        const chat = await ModelChat.findByIdAndUpdate(id_chat, data_chat, { new: true });
        return chat;

    } catch (erro) {

        console.error(erro);
        throw new Error(`Falha ao atualizar a Conversa pelo ID`);
    };
};

export async function deletar_chat(id_chat: string): Promise<void> {

    try {

        const chat = await ModelChat.findByIdAndDelete(id_chat);
        
    } catch (erro) {
      
        console.error(erro);
    };
};