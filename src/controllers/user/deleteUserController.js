import { remove } from "../../models/userModel.js";

export default async function deleteUserController (req, res) {
    const {id} = req.params

    const result = await remove(+id)

    return res.json({message: "Usuário deletado com sucesso"})
}