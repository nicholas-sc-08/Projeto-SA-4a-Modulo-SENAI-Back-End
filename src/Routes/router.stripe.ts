// src/routes/payment.routes.ts
import { Router } from 'express';
import { handleCreateCheckout, handleCreateCheckoutBrecho } from '../Controllers/stripe.controller';

const router_stripe = Router();

// Rota POST para iniciar o checkout
router_stripe.post('/create-checkout-session', handleCreateCheckout);
router_stripe.post('/create-checkout-session-brecho', handleCreateCheckoutBrecho);

export default router_stripe;