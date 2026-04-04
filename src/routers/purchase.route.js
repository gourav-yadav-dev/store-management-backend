import { Router } from "express";
import { purchaseMiddleware } from '../middleware/purchaseMiddleware/purchase.middleware.js'
import { purchaseController } from '../controllers/purchaseController/purchaseController.js'

const router = Router();
router.post('/purchaseItem', purchaseMiddleware, purchaseController)
router.get('/getpurchaseItem', purchaseMiddleware, purchaseController)
router.get('/getpurchaseByInvoice', purchaseMiddleware, purchaseController)
export default router;

