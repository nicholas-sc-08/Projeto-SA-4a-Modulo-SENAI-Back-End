import { Bloco } from "./IBloco.types";

export interface IPedido {

    codigoProduto: number,
    bloco1: Bloco,
    bloco2?: Bloco,
    bloco3?: Bloco
};