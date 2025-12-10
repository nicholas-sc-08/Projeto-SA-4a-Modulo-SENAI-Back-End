import { FastifyInstance } from 'fastify';
import { handleCreateCheckout, handleCreateCheckoutBrecho } from '../Controllers/stripe.controller';
import { autenticar_token } from '../middlewares/auth.middleware';
import { CheckoutBodyBrecho, CheckoutBodyClient } from '../types/IPayload.types';

export default async function router_stripe(app: FastifyInstance) {

    app.post<{ Body: CheckoutBodyClient }>('/create-checkout-session', { preHandler: autenticar_token }, handleCreateCheckout);
    app.post<{ Body: CheckoutBodyBrecho }>('/create-checkout-session-brecho', { preHandler: autenticar_token }, handleCreateCheckoutBrecho);
};