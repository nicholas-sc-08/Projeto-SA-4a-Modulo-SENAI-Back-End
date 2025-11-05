import { enviar_pedido } from "../Services/Pedido/pedido.services";
import { IPayload } from "../types/IPayload.types";
import { IPedido } from "../types/IPedido.types";
import { ISacolaBrecho } from "../types/ISacola.types";
import { cor_bloco, cores, cor_laminas_bloco, logos, materiais, padroes_bloco, tamanhos, tipo_do_pedido_brecho } from "./enums.utils";
import { andares_pedido } from "./enums.utils";

export function pedido_sacola_para_maquina(pedido: ISacolaBrecho) {

    const sacola_brecho: ISacolaBrecho = pedido;
    let andar_pedido: andares_pedido;
    let cor_chassi: cor_bloco;
    let paleta_esquerda: cor_laminas_bloco;
    let paleta_direita: cor_laminas_bloco;
    let padrao_frontal: padroes_bloco;
    let padrao_direita: padroes_bloco;

    if (sacola_brecho.tipo === tipo_do_pedido_brecho.Caixa) {

        andar_pedido = andares_pedido.um_andar;

    } else if (sacola_brecho.tipo === tipo_do_pedido_brecho.Sacola) {

        andar_pedido = andares_pedido.dois_andares;

    } else if (sacola_brecho.tipo === tipo_do_pedido_brecho.Ecobag) {

        andar_pedido = andares_pedido.tres_andares;
    } else {

        return new Error(`CodigoProduto não possui um valor válido`);
    };

    if (sacola_brecho.material === materiais.papelao_reciclavel) {

        cor_chassi = cor_bloco.vermelho;
    } else if (sacola_brecho.material === materiais.plastico_biodegradavel) {

        cor_chassi = cor_bloco.preto;
    } else if (sacola_brecho.material === materiais.papel_kraft) {

        cor_chassi = cor_bloco.vermelho;
    } else if (sacola_brecho.material === materiais.algodao) {

        cor_chassi = cor_bloco.preto;
    } else if (sacola_brecho.material === materiais.poliester_reciclavel) {

        cor_chassi = cor_bloco.vermelho;
    } else {

        return new Error(`Cor do chassi não possui um valor válido`);
    };

    if (sacola_brecho.padrao === logos.logo_fly) {

        paleta_esquerda = cor_laminas_bloco.vermelho;
    } else if (sacola_brecho.padrao === logos.logo_fly_nome) {

        paleta_esquerda = cor_laminas_bloco.azul;
    } else if (sacola_brecho.padrao === logos.logo_fly_embaixo) {

        paleta_esquerda = cor_laminas_bloco.amarelo;
    } else if (sacola_brecho.padrao === logos.sem_logo) {

        paleta_esquerda = cor_laminas_bloco.sem_cor;
    } else {

        return new Error(`Cor da lâmina esquerda não condiz com uma das opções`);
    };

    if (sacola_brecho.tamanho === tamanhos.pequeno) {

        padrao_frontal = padroes_bloco.casa;
        console.log(true);
        
    } else if (sacola_brecho.tamanho === tamanhos.medio) {

        padrao_frontal = padroes_bloco.barco;
    } else if (sacola_brecho.tamanho === tamanhos.grande) {

        padrao_frontal = padroes_bloco.estrela;
    } else {

        return new Error(`Tamanho de produto não condiz com uma das opções`);
    };

    if (sacola_brecho.cor === cores.verde) {

        paleta_direita = cor_laminas_bloco.verde;
    } else if (sacola_brecho.cor === cores.branco) {

        paleta_direita = cor_laminas_bloco.branco;
    } else {

        return new Error(`Cor da lâmina direita segundo andar não condiz com uma das opções`);
    };

    const ordem: IPedido = {

        codigoProduto: andar_pedido,
        bloco1: { cor: cor_chassi, lamina1: paleta_esquerda, lamina2: 1, lamina3: 1, padrao1: padrao_frontal, padrao2: padroes_bloco.sem_desenho, padrao3: padroes_bloco.sem_desenho }
    };

    const payload_completo : IPayload = {

        payload: {

            orderId: "teste",
            sku: "teste",
            order: ordem

        },
        callbackUrl: "http://localhost:8080/pedidos"
    };

    console.log(payload_completo);
    console.log(ordem);
    enviar_pedido(payload_completo);
};