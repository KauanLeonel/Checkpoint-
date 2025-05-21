import express from "express"


const router = express.Router()


router.get('/table', getClientController)
router.get('/create', createClientController)
router.get('/edit/:id', editClientController)
router.get('/delete/:id', deleteClientController)

export default router