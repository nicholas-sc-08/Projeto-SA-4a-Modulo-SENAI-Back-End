import Stripe from 'stripe';
import { ISacola, ISacolaBrecho } from '../../types/ISacola.types';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2025-11-17.clover',
});

export const createCheckoutSession = async (produtos: ISacola[]) => {

  const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = produtos.map((produto) => {
    const precoEmCentavos = Math.round(produto.preco * 100);

    return {
      price_data: {
        currency: 'brl',
        product_data: {
          name: produto.nome,
          description: produto.descricao,
          images: produto.imagem || [],
        },
        unit_amount: precoEmCentavos,
      },

      
      quantity: produto.quantidade_selecionada ?? 1,
    };
  });

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: lineItems,

      success_url: 'http://localhost:3000/?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: 'http://localhost:3000/',
    });

    return session;
  } catch (error) {
    console.error('Erro ao criar a Session de Checkout do Stripe:', error);
    throw new Error('Falha ao processar o pagamento.');
  }
};

export const createCheckoutSessionBrecho = async (produtos: ISacolaBrecho[]) => {

  const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = produtos.map((produto) => {
    const precoEmCentavos = Math.round(produto.valor * 100);

    return {
      price_data: {
        currency: 'brl',
        product_data: {
          name: `${produto.tipo} - ${produto.material}`,
          description: `Tamanho: ${produto.tamanho} | Padrão: ${produto.padrao}`,
          images: [], // Não há imagens no ISacolaBrecho, mas pode adicionar se quiser
        },
        unit_amount: precoEmCentavos,
      },
      quantity: produto.quantidade ?? 1,
    };
  });

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: lineItems,
      success_url: 'http://localhost:3000/?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: 'http://localhost:3000/',
    });

    return session;
  } catch (error) {
    console.error('Erro ao criar a Session de Checkout do Stripe (Brechó):', error);
    throw new Error('Falha ao processar o pagamento.');
  }
};