import { IBag } from "./IBag.types";
import { ICaixa } from "./ICaixa.types";
import { IEcoBag } from "./IEcoBag.types";

export interface IOrder{

    codigoProduto: number,
    bloco1: ICaixa,
    bloco2: IBag,
    bloco3: IEcoBag
};