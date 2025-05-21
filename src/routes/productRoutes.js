import express from "express"


const router = express.Router()


router.get('/table', tableProductController)
router.get('/create', createProductController)
router.get('/edit/:id', editProductController)
router.get('/delete/:id', deleteProductController)

export default router