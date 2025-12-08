// src/routes/payment.routes.ts
import { Router } from 'express';
import { handleCreateCheckout, handleCreateCheckoutBrecho } from '../Controllers/stripe.controller';
import { autenticar_token } from '../middlewares/auth.middleware';

const router_stripe = Router();

// Rota POST para iniciar o checkout
router_stripe.use(autenticar_token);
router_stripe.post('/create-checkout-session', handleCreateCheckout);
router_stripe.post('/create-checkout-session-brecho', handleCreateCheckoutBrecho);

export default router_stripe;