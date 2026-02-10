import { Router } from 'express'
import validatecategory from '../middleware/validatecategory.middleware.js'
import { productcategory } from '../controllers/productcategorycontroller/productcategory.controller.js'
const router = Router();


router.post('/category', validatecategory, productcategory)
router.post('/getcategory',validatecategory,productcategory)


export default router;