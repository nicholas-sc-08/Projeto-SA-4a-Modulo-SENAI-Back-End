import { Request, Response } from 'express';
import { createCheckoutSession, createCheckoutSessionBrecho } from '../Services/Stripe/stripe.service';
import { ISacola, ISacolaBrecho } from '../types/ISacola.types';

export const handleCreateCheckout = async (req: Request, res: Response) => {
  try {
    const produtos: ISacola[] = req.body.items;

    if (!produtos || produtos.length === 0) {
      return res.status(400).json({ message: 'Nenhum produto fornecido.' });
    }

    const session = await createCheckoutSession(produtos);

    return res.status(200).json({ url: session.url });
  } catch (error: any) {
    console.error('Erro no controller handleCreateCheckout:', error);
    return res.status(500).json({ message: error.message || 'Erro interno do servidor ao criar o checkout.' });
  }
};

export const handleCreateCheckoutBrecho = async (req: Request, res: Response) => {
  try {
    const produtos: ISacolaBrecho[] = req.body.items;

    if (!produtos || produtos.length === 0) {
      return res.status(400).json({ message: 'Nenhum produto de brechó fornecido.' });
    }

    const session = await createCheckoutSessionBrecho(produtos);

    return res.status(200).json({ url: session.url });
  } catch (error: any) {
    console.error('Erro no controller handleCreateCheckoutBrecho:', error);
    return res.status(500).json({
      message: error.message || 'Erro interno do servidor ao criar o checkout do brechó.'
    });
  }
};