import express from "express"
import createProductController from "../controllers/product/createProductController.js"
import getProductController from "../controllers/product/getProductController.js"
import changeProductController from "../controllers/product/changeProductController.js"
import deleteProductController from "../controllers/product/deleteProductController.js"
import uptadeProductController from "../controllers/product/uptadeProductController.js"

const router = express.Router()


router.get('/table', getProductController)
router.post('/create', createProductController)
router.patch('/edit/:id', changeProductController)
router.delete('/delete/:id', deleteProductController)
router.put('/:id', uptadeProductController)

export default router