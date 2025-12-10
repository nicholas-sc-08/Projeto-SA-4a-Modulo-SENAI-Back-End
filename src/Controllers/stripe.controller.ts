import { FastifyRequest, FastifyReply } from 'fastify';
import { createCheckoutSession, createCheckoutSessionBrecho } from '../Services/Stripe/stripe.service';
import { ISacola, ISacolaBrecho } from '../types/ISacola.types';
import { CheckoutBodyBrecho, CheckoutBodyClient } from '../types/IPayload.types';

export const handleCreateCheckout = async (req: FastifyRequest<{ Body: CheckoutBodyClient }>, reply: FastifyReply) => {
  try {
    const produtos: ISacola[] = req.body.items;

    if (!produtos || produtos.length === 0) {
      return reply.status(400).send({ message: 'Nenhum produto fornecido.' });
    };

    const session = await createCheckoutSession(produtos);
    return reply.status(200).send({ url: session.url });

  } catch (error: any) {

    console.error('Erro no controller handleCreateCheckout:', error);
    return reply.status(500).send({ message: error.message || 'Erro interno do servidor ao criar o checkout.' });
  }
};

export const handleCreateCheckoutBrecho = async (req: FastifyRequest<{ Body: CheckoutBodyBrecho }>, reply: FastifyReply) => {
  try {
    const produtos: ISacolaBrecho[] = req.body.items;

    if (!produtos || produtos.length === 0) {
      return reply.status(400).send({ message: 'Nenhum produto de brechó fornecido.' });
    };

    const session = await createCheckoutSessionBrecho(produtos);
    return reply.status(200).send({ url: session.url });

  } catch (error: any) {

    console.error('Erro no controller handleCreateCheckoutBrecho:', error);

    return reply.status(500).send({
      message: error.message || 'Erro interno do servidor ao criar o checkout do brechó.'
    });
  }
};