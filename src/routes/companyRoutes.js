import express from "express"
import createCompanyController from "../controllers/company/createCompanyController.js"
import getCompanyController from "../controllers/company/getCompanyController.js"
import changeCompanyController from "../controllers/company/changeCompanyController.js"
import deleteCompanyController from "../controllers/company/deleteCompanyController.js"
import uptadeCompanyController from "../controllers/company/uptadeCompanyController.js"

const router = express.Router()


router.get('/table', getCompanyController)
router.post('/create', createCompanyController)
router.patch('/edit/:id', changeCompanyController)
router.delete('/delete/:id', deleteCompanyController)
router.put('/:id', uptadeCompanyController)

export default router