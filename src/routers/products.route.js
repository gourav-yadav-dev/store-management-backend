import { Router } from 'express'
import productMiddleware from '../middleware/product.middleware.js';
import { productController } from '../controllers/productscontroller/product.controller.js'
const router = Router();

router.post('/product', productMiddleware, productController)


export default router;