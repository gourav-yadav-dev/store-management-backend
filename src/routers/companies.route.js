
import { Router } from "express";
const router = Router()
import { companyMiddleWare } from '../middleware/companyMiddleware/company.middleware.js'
import {companyController} from '../controllers/companyController/company.Controller.js'

router.post('/company', companyMiddleWare, companyController)

export default router