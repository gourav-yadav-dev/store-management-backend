import { Router } from 'express'
import productMiddleware from '../middleware/product.middleware.js';
import { productController } from '../controllers/productscontroller/product.controller.js'
import { productfilter } from '../controllers/productscontroller/productfilter.controller.js'
const router = Router();

router.post('/product', productMiddleware, productController)
router.get('/getproduct', productMiddleware, productfilter)
router.get('/getproductbyname', productMiddleware, productfilter)



export default router;