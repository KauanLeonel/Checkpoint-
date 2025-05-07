import express from "express"


const router = express.Router()


router.get('/table', tableUserController)
router.get('/create', createUserController)
router.get('/edit/:id', editUserController)
router.get('/delete/:id', deleteUserController)