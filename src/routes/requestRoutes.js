import express from "express"


const router = express.Router()


router.get('/table', tableRequestController)
router.get('/create', createRequestController)
router.get('/edit/:id', editRequestController)
router.get('/delete/:id', deleteRequestController)

export default router