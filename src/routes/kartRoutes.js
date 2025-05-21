import express from "express"


const router = express.Router()


router.get('/table', tableKartController)
router.get('/create', createKartController)
router.get('/edit/:id', editKartController)
router.get('/delete/:id', deleteKartController)

export default router