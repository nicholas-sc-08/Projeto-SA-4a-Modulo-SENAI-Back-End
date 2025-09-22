import { ISacolaBrecho } from "../types/ISacola.types";
import { cor_bloco, tipo_do_pedido_brecho } from "./enums.utils";
import { andares_pedido } from "./enums.utils";

export function pedido_sacola_para_maquina(pedido: ISacolaBrecho) {

    const sacola_brecho = pedido;
    let andar_pedido : andares_pedido;

    if(sacola_brecho.tipo.toLowerCase() === tipo_do_pedido_brecho.Caixa){

        andar_pedido = andares_pedido.um_andar;

    } else if(sacola_brecho.tipo.toLowerCase() === tipo_do_pedido_brecho.Sacola){

        andar_pedido = andares_pedido.dois_andares;
    
    } else if(sacola_brecho.tipo.toLowerCase() === tipo_do_pedido_brecho.Ecobag) {

        andar_pedido = andares_pedido.tres_andares;
    } else {

        return new Error(`CodigoProduto não possui um valor válido`);
    };

};