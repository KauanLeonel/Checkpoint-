import express from "express"


const router = express.Router()


router.get('/table', tableCompanyController)
router.get('/create', createCompanyController)
router.get('/edit/:id', editCompanyController)
router.get('/delete/:id', deleteCompanyController)

export default router