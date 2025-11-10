import { enviar_pedido } from "../Services/Pedido/pedido.services";
import { buscar_sacolas_brechos } from "../Services/Sacola_brecho/sacola_brecho.service";
import { IPayload } from "../types/IPayload.types";
import { IPedido } from "../types/IPedido.types";
import { ISacolaBrecho } from "../types/ISacola.types";
import { cor_bloco, cores, cor_laminas_bloco, logos, materiais, padroes_bloco, tamanhos, tipo_do_pedido_brecho } from "./enums.utils";
import { andares_pedido } from "./enums.utils";

export async function pedido_sacola_para_maquina(pedido: ISacolaBrecho) {

    const sacola_brecho: ISacolaBrecho = pedido;
    let andar_pedido: andares_pedido;
    let cor_chassi: cor_bloco;
    let paleta_frontal: cor_laminas_bloco = cor_laminas_bloco.sem_cor;
    let paleta_esquerda: cor_laminas_bloco = cor_laminas_bloco.sem_cor;
    let paleta_direita: cor_laminas_bloco = cor_laminas_bloco.sem_cor;
    let padrao_frontal: padroes_bloco = padroes_bloco.sem_desenho;
    let padrao_esquerda: padroes_bloco = padroes_bloco.sem_desenho;
    let padrao_direita: padroes_bloco = padroes_bloco.sem_desenho;

    if (sacola_brecho.tipo === tipo_do_pedido_brecho.Caixa) {

        andar_pedido = andares_pedido.um_andar;

    } else if (sacola_brecho.tipo === tipo_do_pedido_brecho.Sacola) {

        andar_pedido = andares_pedido.dois_andares;

    } else if (sacola_brecho.tipo === tipo_do_pedido_brecho.Ecobag) {

        andar_pedido = andares_pedido.tres_andares;
    } else {

        throw new Error(`CodigoProduto não possui um valor válido`);
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

        throw new Error(`Cor do chassi não possui um valor válido`);
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

        throw new Error(`Cor da lâmina esquerda não condiz com uma das opções`);
    };

    if (sacola_brecho.tipo == tipo_do_pedido_brecho.Caixa) {

        if (sacola_brecho.tamanho === tamanhos.pequeno) {

            padrao_frontal = padroes_bloco.casa;
        } else if (sacola_brecho.tamanho === tamanhos.medio) {

            padrao_frontal = padroes_bloco.barco;
        } else if (sacola_brecho.tamanho === tamanhos.grande) {

            padrao_frontal = padroes_bloco.estrela;
        } else {

            throw new Error(`Tamanho de produto não condiz com uma das opções`);
        };
    };

    if (sacola_brecho.tipo == tipo_do_pedido_brecho.Sacola) {

        if (sacola_brecho.cor === cores.verde) {

            paleta_direita = cor_laminas_bloco.verde;

        } else if (sacola_brecho.cor === cores.branco) {

            paleta_direita = cor_laminas_bloco.branco;

        };

        if (sacola_brecho.cor_corpo === cores.verde) {

            paleta_direita = cor_laminas_bloco.verde;

        } else if (sacola_brecho.cor_corpo === cores.branco) {

            paleta_direita = cor_laminas_bloco.branco;
        };

        if (sacola_brecho.tamanho === tamanhos.pequeno) {

            padrao_direita = padroes_bloco.casa;
        } else if (sacola_brecho.tamanho === tamanhos.medio) {

            padrao_direita = padroes_bloco.barco;
        } else if (sacola_brecho.tamanho === tamanhos.grande) {

            padrao_direita = padroes_bloco.estrela;
        } else {

            throw new Error(`Tamanho de produto não condiz com uma das opções`);
        };
    };

    if (sacola_brecho.tipo == tipo_do_pedido_brecho.Ecobag) {

        if (sacola_brecho.cor_corpo === cores.verde) {

            paleta_frontal = cor_laminas_bloco.verde;

        } else if (sacola_brecho.cor_corpo === cores.areaia) {

            paleta_frontal = cor_laminas_bloco.azul;

        } else if (sacola_brecho.cor_corpo === cores.marrom) {

            paleta_frontal = cor_laminas_bloco.vermelho;
        } else if (sacola_brecho.cor_corpo === cores.amarelo) {

            paleta_frontal = cor_laminas_bloco.amarelo;
        };

        if (sacola_brecho.cor_alca === cores.amarelo) {

            paleta_direita = cor_laminas_bloco.amarelo;
        } else if (sacola_brecho.cor_alca === cores.verde) {

            paleta_direita = cor_laminas_bloco.verde;
        } else if (sacola_brecho.cor_alca === cores.areaia) {

            paleta_direita = cor_laminas_bloco.azul;
        };

        if (sacola_brecho.tamanho === tamanhos.medio) {

            padrao_esquerda = padroes_bloco.estrela;
        } else if (sacola_brecho.tamanho === tamanhos.grande) {

            padrao_esquerda = padroes_bloco.barco;
        } else {

            throw new Error(`Tamanho de produto não condiz com uma das opções`);
        };
    };

    const ordem: IPedido = {

        codigoProduto: andar_pedido,
        bloco1: { cor: cor_chassi, lamina1: andar_pedido == andares_pedido.um_andar ? paleta_esquerda : 0, lamina2: andar_pedido == andares_pedido.um_andar ? paleta_direita : 0, lamina3: 0, padrao1: andar_pedido == andares_pedido.um_andar ? padrao_frontal : padroes_bloco.sem_desenho, padrao2: padroes_bloco.sem_desenho, padrao3: padroes_bloco.sem_desenho },
        bloco2: { cor: cor_chassi, lamina1: andar_pedido == andares_pedido.dois_andares ? paleta_esquerda : 0, lamina2: andar_pedido == andares_pedido.dois_andares ? paleta_direita : 0, lamina3: 0, padrao1: padroes_bloco.sem_desenho, padrao2: andar_pedido == andares_pedido.dois_andares ? padrao_direita : padroes_bloco.sem_desenho, padrao3: padroes_bloco.sem_desenho },
        bloco3: { cor: cor_chassi, lamina1: andar_pedido == andares_pedido.tres_andares ? paleta_esquerda : 0, lamina2: andar_pedido == andares_pedido.tres_andares ? paleta_direita : 0, lamina3: andar_pedido == andares_pedido.tres_andares ? paleta_frontal : 0, padrao1: padroes_bloco.sem_desenho, padrao2: padroes_bloco.sem_desenho, padrao3: andar_pedido == andares_pedido.tres_andares ? padrao_esquerda : padroes_bloco.sem_desenho }
    };

    const payload_completo: IPayload = {

        payload: {

            orderId: `FLY-${Date.now()}`,
            sku: `KIT-${sacola_brecho.tipo}`,
            order: ordem

        },
        callbackUrl: "http://localhost:8080/pedidos"
    };

    try {

        const resposta = await enviar_pedido(payload_completo);
        console.log(resposta);

    } catch (erro: any) {

        console.error(erro);
        throw new Error(erro);
    };
};