import { Bloco } from "./IBloco.types";
import { BlocoUpdate } from "./IBloco.types";

export interface IPedido {

    codigoProduto: number,
    bloco1: Bloco,
    bloco2?: Bloco,
    bloco3?: Bloco
};

export interface IPedidoUpdate {

    codigoProduto?: number,
    bloco1?: BlocoUpdate,
    bloco2?: BlocoUpdate,
    bloco3?: BlocoUpdate
};