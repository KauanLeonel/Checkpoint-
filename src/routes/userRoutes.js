import express from "express"
import createUserController from "../controllers/user/createUserController"
import getUserController from "../controllers/user/getUserController"
import changeUserController from "../controllers/user/changeUserController"
import deleteUserController from "../controllers/user/deleteUserController"
import uptadeUserController from "../controllers/user/uptadeUserController"

const router = express.Router()


router.get('/table', getUserController)
router.post('/create', createUserController)
router.patch('/edit/:id', changeUserController)
router.delete('/delete/:id', deleteUserController)
router.put('/:id', uptadeUserController)