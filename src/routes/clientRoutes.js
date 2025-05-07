import express from "express"


const router = express.Router()


router.get('/table', tableClientController)
router.get('/create', createClientController)
router.get('/edit/:id', editClientController)
router.get('/delete/:id', deleteClientController)