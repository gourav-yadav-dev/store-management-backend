
import { Router } from "express";
const router = Router()
import { companyMiddleWare } from '../middleware/companyMiddleware/company.middleware.js'
import { companyUpdateDeleteMiddleware } from '../middleware/companyMiddleware/companyupdatedelete.middleware.js'
import { companyController } from '../controllers/companyController/company.Controller.js'
import { companyUpdateDeleteController } from '../controllers/companyController/companyupdatedelete.Controller.js'

router.post('/company', companyMiddleWare, companyController)
router.get('/getcompany', companyMiddleWare, companyController)
router.patch('/updatecompany', companyUpdateDeleteMiddleware, companyUpdateDeleteController)
router.delete('/deletecompany', companyUpdateDeleteMiddleware, companyUpdateDeleteController)

export default router