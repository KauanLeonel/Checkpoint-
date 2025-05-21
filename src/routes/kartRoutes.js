import express from "express"
import createKartController from "../controllers/kart/createKartController.js"
import getKartController from "../controllers/kart/getKartController.js"
import changeKartController from "../controllers/kart/changeKartController.js"
import deleteKartController from "../controllers/kart/deleteKartController.js"
import uptadeKartController from "../controllers/kart/uptadeKartController.js"

const router = express.Router()


router.get('/table', getKartController)
router.post('/create', createKartController)
router.patch('/edit/:id', changeKartController)
router.delete('/delete/:id', deleteKartController)
router.put('/:id', uptadeKartController)

export default router