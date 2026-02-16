import { Router } from 'express'
import productMiddleware from '../middleware/product.middleware.js';
import { productController } from '../controllers/productscontroller/product.controller.js'
import { productfilter } from '../controllers/productscontroller/productfilter.controller.js'
import { producteditdeletecontroller } from '../controllers/productscontroller/producteditdelete.controller.js'
import { producteditdelete } from '../middleware/producteditdelete.middleware.js'
const router = Router();

router.post('/product', productMiddleware, productController)
router.get('/getproduct', productMiddleware, productfilter)
router.get('/getproductbyname', productMiddleware, productfilter)
router.patch('/editproduct', producteditdelete, producteditdeletecontroller)

export default router;