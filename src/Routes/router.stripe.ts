import { Router } from 'express';
import { handleCreateCheckout, handleCreateCheckoutBrecho } from '../Controllers/stripe.controller';
import { autenticar_token } from '../middlewares/auth.middleware';

const router_stripe = Router();

router_stripe.use(autenticar_token);
router_stripe.post('/create-checkout-session', handleCreateCheckout);
router_stripe.post('/create-checkout-session-brecho', handleCreateCheckoutBrecho);

export default router_stripe;