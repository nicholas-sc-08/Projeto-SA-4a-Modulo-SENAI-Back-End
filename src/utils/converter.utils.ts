import { enviar_pedido } from "../Services/Pedido/pedido.services";
import { ICreateSacolaBrecho, ISacolaBrecho } from "../types/ISacola.types";
import { IPedido } from "../types/IPedido.types";
import {
    cor_bloco,
    cores,
    cor_laminas_bloco,
    logos,
    materiais,
    padroes_bloco,
    tamanhos,
    tipo_do_pedido_brecho,
    andares_pedido
} from "./enums.utils";

export async function pedido_sacola_para_maquina(pedido: ISacolaBrecho) {

    const sacola_brecho: ISacolaBrecho = pedido;
    let pedido_completo: ICreateSacolaBrecho = {
        tipo: tipo_do_pedido_brecho.Caixa,
        material: "",
        padrao: "",
        tamanho: "",
        quantidade: 0,
        valor: 0,
        id_brecho: "",
        id_pedido: undefined
    };
    let andar_pedido: andares_pedido;
    let cor_chassi: cor_bloco;
    let paleta_frontal: cor_laminas_bloco = cor_laminas_bloco.sem_cor;
    let paleta_esquerda: cor_laminas_bloco = cor_laminas_bloco.sem_cor;
    let paleta_direita: cor_laminas_bloco = cor_laminas_bloco.sem_cor;
    let padrao_frontal: padroes_bloco = padroes_bloco.sem_desenho;
    let padrao_esquerda: padroes_bloco = padroes_bloco.sem_desenho;
    let padrao_direita: padroes_bloco = padroes_bloco.sem_desenho;

    // ===== LÓGICA DE CONVERSÃO (mantida igual) =====

    if (sacola_brecho.tipo === tipo_do_pedido_brecho.Caixa) {
        andar_pedido = andares_pedido.um_andar;
    } else if (sacola_brecho.tipo === tipo_do_pedido_brecho.Sacola) {
        andar_pedido = andares_pedido.dois_andares;
    } else if (sacola_brecho.tipo === tipo_do_pedido_brecho.Ecobag) {
        andar_pedido = andares_pedido.tres_andares;
    } else {
        throw new Error(`Tipo de produto não possui um valor válido`);
    }

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
        throw new Error(`Material não possui um valor válido`);
    }

    if (sacola_brecho.padrao === logos.logo_fly) {
        paleta_esquerda = cor_laminas_bloco.vermelho;
    } else if (sacola_brecho.padrao === logos.logo_fly_nome) {
        paleta_esquerda = cor_laminas_bloco.azul;
    } else if (sacola_brecho.padrao === logos.logo_fly_embaixo) {
        paleta_esquerda = cor_laminas_bloco.amarelo;
    } else if (sacola_brecho.padrao === logos.sem_logo) {
        paleta_esquerda = cor_laminas_bloco.sem_cor;
    } else {
        throw new Error(`Padrão não condiz com uma das opções`);
    }

    // Conversões específicas por tipo
    if (sacola_brecho.tipo == tipo_do_pedido_brecho.Caixa) {
        if (sacola_brecho.tamanho === tamanhos.pequeno) {
            padrao_frontal = padroes_bloco.casa;
        } else if (sacola_brecho.tamanho === tamanhos.medio) {
            padrao_frontal = padroes_bloco.barco;
        } else if (sacola_brecho.tamanho === tamanhos.grande) {
            padrao_frontal = padroes_bloco.estrela;
        } else {
            throw new Error(`Tamanho de produto não condiz com uma das opções`);
        }
    }

    if (sacola_brecho.tipo == tipo_do_pedido_brecho.Sacola) {
        if (sacola_brecho.cor === cores.verde) {
            paleta_direita = cor_laminas_bloco.verde;
        } else if (sacola_brecho.cor === cores.branco) {
            paleta_direita = cor_laminas_bloco.branco;
        }

        if (sacola_brecho.cor_corpo === cores.verde) {
            paleta_direita = cor_laminas_bloco.verde;
        } else if (sacola_brecho.cor_corpo === cores.branco) {
            paleta_direita = cor_laminas_bloco.branco;
        }

        if (sacola_brecho.tamanho === tamanhos.pequeno) {
            padrao_direita = padroes_bloco.casa;
        } else if (sacola_brecho.tamanho === tamanhos.medio) {
            padrao_direita = padroes_bloco.barco;
        } else if (sacola_brecho.tamanho === tamanhos.grande) {
            padrao_direita = padroes_bloco.estrela;
        } else {
            throw new Error(`Tamanho de produto não condiz com uma das opções`);
        }
    }

    if (sacola_brecho.tipo == tipo_do_pedido_brecho.Ecobag) {
        if (sacola_brecho.cor_corpo === cores.verde) {
            paleta_frontal = cor_laminas_bloco.verde;
        } else if (sacola_brecho.cor_corpo === cores.areaia) {
            paleta_frontal = cor_laminas_bloco.azul;
        } else if (sacola_brecho.cor_corpo === cores.marrom) {
            paleta_frontal = cor_laminas_bloco.vermelho;
        } else if (sacola_brecho.cor_corpo === cores.amarelo) {
            paleta_frontal = cor_laminas_bloco.amarelo;
        }

        if (sacola_brecho.cor_alca === cores.amarelo) {
            paleta_direita = cor_laminas_bloco.amarelo;
        } else if (sacola_brecho.cor_alca === cores.verde) {
            paleta_direita = cor_laminas_bloco.verde;
        } else if (sacola_brecho.cor_alca === cores.areaia) {
            paleta_direita = cor_laminas_bloco.azul;
        }

        if (sacola_brecho.tamanho === tamanhos.medio) {
            padrao_esquerda = padroes_bloco.estrela;
        } else if (sacola_brecho.tamanho === tamanhos.grande) {
            padrao_esquerda = padroes_bloco.barco;
        } else {
            throw new Error(`Tamanho de produto não condiz com uma das opções`);
        }
    }

    // ===== MONTAGEM DO PEDIDO =====

    const ordem: IPedido = {
        codigoProduto: andar_pedido,
        bloco1: {
            cor: cor_chassi,
            lamina1: andar_pedido == andares_pedido.um_andar ? paleta_esquerda : 0,
            lamina2: andar_pedido == andares_pedido.um_andar ? paleta_direita : 0,
            lamina3: 0,
            padrao1: andar_pedido == andares_pedido.um_andar ? padrao_frontal : padroes_bloco.sem_desenho,
            padrao2: padroes_bloco.sem_desenho,
            padrao3: padroes_bloco.sem_desenho
        },
        bloco2: {
            cor: cor_chassi,
            lamina1: andar_pedido == andares_pedido.dois_andares ? paleta_esquerda : 0,
            lamina2: andar_pedido == andares_pedido.dois_andares ? paleta_direita : 0,
            lamina3: 0,
            padrao1: padroes_bloco.sem_desenho,
            padrao2: andar_pedido == andares_pedido.dois_andares ? padrao_direita : padroes_bloco.sem_desenho,
            padrao3: padroes_bloco.sem_desenho
        },
        bloco3: {
            cor: cor_chassi,
            lamina1: andar_pedido == andares_pedido.tres_andares ? paleta_esquerda : 0,
            lamina2: andar_pedido == andares_pedido.tres_andares ? paleta_direita : 0,
            lamina3: andar_pedido == andares_pedido.tres_andares ? paleta_frontal : 0,
            padrao1: padroes_bloco.sem_desenho,
            padrao2: padroes_bloco.sem_desenho,
            padrao3: andar_pedido == andares_pedido.tres_andares ? padrao_esquerda : padroes_bloco.sem_desenho
        }
    };

    // ===== PAYLOAD NO FORMATO QUE O CONTROLLER ESPERA =====
    // Importante: o controller espera apenas { payload: {...} }
    // O callbackUrl é adicionado automaticamente pelo controller

    const payload_para_envio = {
        orderId: `FLY-${Date.now()}`,
        sku: `KIT-${sacola_brecho.tipo}`,
        order: ordem
    };

    try {

        console.log("Enviando pedido para máquina:", payload_para_envio);

        const resposta = await enviar_pedido(payload_para_envio).then(pedido => pedido_completo = { ...sacola_brecho, id_pedido: pedido.id });

        console.log("Pedido enviado com sucesso:", resposta);
        return pedido_completo;

    } catch (erro: any) {
        console.error("Erro ao enviar pedido:", erro);
        throw new Error(`Erro ao enviar pedido para a máquina: ${erro.message}`);
    }
}