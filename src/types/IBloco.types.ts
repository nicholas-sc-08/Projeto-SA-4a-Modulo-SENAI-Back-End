import { cor_laminas_bloco } from "../utils/enums.utils";
import { padroes_bloco } from "../utils/enums.utils";
import { cor_bloco } from "../utils/enums.utils";

export interface Bloco {

    cor: cor_bloco.preto | cor_bloco.vermelho | cor_bloco.azul,
    lamina1: cor_laminas_bloco.sem_cor | cor_laminas_bloco.vermelho | cor_laminas_bloco.azul | cor_laminas_bloco.amarelo | cor_laminas_bloco.verde | cor_laminas_bloco.preto | cor_laminas_bloco.branco,
    lamina2: cor_laminas_bloco.sem_cor | cor_laminas_bloco.vermelho | cor_laminas_bloco.azul | cor_laminas_bloco.amarelo | cor_laminas_bloco.verde | cor_laminas_bloco.preto | cor_laminas_bloco.branco,
    lamina3: cor_laminas_bloco.sem_cor | cor_laminas_bloco.vermelho | cor_laminas_bloco.azul | cor_laminas_bloco.amarelo | cor_laminas_bloco.verde | cor_laminas_bloco.preto | cor_laminas_bloco.branco,
    padrao1: padroes_bloco.sem_desenho | padroes_bloco.casa | padroes_bloco.barco | padroes_bloco.estrela,
    padrao2: padroes_bloco.sem_desenho | padroes_bloco.casa | padroes_bloco.barco | padroes_bloco.estrela,
    padrao3: padroes_bloco.sem_desenho | padroes_bloco.casa | padroes_bloco.barco | padroes_bloco.estrela,
};

export interface BlocoUpdate {

    cor?: cor_bloco.preto | cor_bloco.vermelho | cor_bloco.azul,
    lamina1?: cor_laminas_bloco.sem_cor | cor_laminas_bloco.vermelho | cor_laminas_bloco.azul | cor_laminas_bloco.amarelo | cor_laminas_bloco.verde | cor_laminas_bloco.preto | cor_laminas_bloco.branco,
    lamina2?: cor_laminas_bloco.sem_cor | cor_laminas_bloco.vermelho | cor_laminas_bloco.azul | cor_laminas_bloco.amarelo | cor_laminas_bloco.verde | cor_laminas_bloco.preto | cor_laminas_bloco.branco,
    lamina3?: cor_laminas_bloco.sem_cor | cor_laminas_bloco.vermelho | cor_laminas_bloco.azul | cor_laminas_bloco.amarelo | cor_laminas_bloco.verde | cor_laminas_bloco.preto | cor_laminas_bloco.branco,
    padrao1?: padroes_bloco.sem_desenho | padroes_bloco.casa | padroes_bloco.barco | padroes_bloco.estrela,
    padrao2?: padroes_bloco.sem_desenho | padroes_bloco.casa | padroes_bloco.barco | padroes_bloco.estrela,
    padrao3?: padroes_bloco.sem_desenho | padroes_bloco.casa | padroes_bloco.barco | padroes_bloco.estrela,
};