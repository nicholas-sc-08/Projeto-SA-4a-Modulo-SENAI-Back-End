import { andares_pedido } from "../utils/enums.utils";
import { Bloco } from "./IBloco.types";
import { BlocoUpdate } from "./IBloco.types";

export interface IPedido {

    codigoProduto: andares_pedido.um_andar | andares_pedido.dois_andares | andares_pedido.tres_andares,
    bloco1: Bloco,
    bloco2?: Bloco,
    bloco3?: Bloco
};

export interface IPedidoUpdate {

    codigoProduto?: andares_pedido.um_andar | andares_pedido.dois_andares | andares_pedido.tres_andares,
    bloco1?: BlocoUpdate,
    bloco2?: BlocoUpdate,
    bloco3?: BlocoUpdate
};