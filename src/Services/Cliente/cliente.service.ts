import { ICliente, ICreateCliente, IUpdateCliente } from "../../types/ICliente.types";
import { ModelCliente } from "../../Models/ClienteSchema.models";
import bcrypt from "bcrypt";

export async function buscar_clientes(): Promise<ICliente[] | null> {

    try {

        const clientes = await ModelCliente.find();
        return clientes;

    } catch (erro) {

        console.error(erro);
        throw new Error(`Falha ao buscar os Clientes`);
    };
};

export async function buscar_cliente_id(id_cliente: string): Promise<ICliente | null> {

    try {

        const cliente = await ModelCliente.findById(id_cliente);
        return cliente;

    } catch (erro) {

        console.error(erro);
        throw new Error(`Falha ao buscar o Cliente pelo ID`);
    };
};

export async function buscar_cliente_email(email: string): Promise<ICliente | null> {

    try {

        const cliente = await ModelCliente.findOne({ email });
        return cliente;

    } catch (erro) {

        console.error(erro);
        throw new Error(`Falha ao buscar o Cliente pelo ID`);
    };
};

export async function cadastrar_cliente(data_cliente: ICreateCliente): Promise<ICliente | null> {

    try {


        const senha_criptografada: string = await bcrypt.hash(data_cliente.senha, 10);
        const cpf_criptografado: string = await bcrypt.hash(data_cliente.cpf, 10);

        data_cliente.senha = senha_criptografada;
        data_cliente.cpf = cpf_criptografado

        const cliente = new ModelCliente(data_cliente);
        const salvar_cliente = await cliente.save();
        return salvar_cliente;

    } catch (erro) {

        console.error(erro);
        throw new Error(`Falha ao cadastrar o Cliente`);
    };
};

export async function atualizar_cliente(id_cliente: string, data_cliente: IUpdateCliente): Promise<ICliente | null> {

    try {

        const cliente_atualizado = await ModelCliente.findByIdAndUpdate(id_cliente, data_cliente, { new: true });
        return cliente_atualizado;

    } catch (erro) {

        console.error(erro);
        throw new Error(`Falha ao atualizar o Cliente pelo ID`);
    };
};

export async function deletar_cliente(id_cliente: string): Promise<void> {

    try {

        const cliente = await ModelCliente.findByIdAndDelete(id_cliente);

    } catch (erro) {

        console.error(erro);
        throw new Error(`Falha ao deletar o Cliente pelo ID`);
    };
};