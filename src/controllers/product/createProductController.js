import { create, productValidator } from "../../models/productModel.js";
export default async function createProductController(req, res) {

    const user = req.body;

    const { success, error, data: productValited } = productValidator(product, { id: true })

    // Verifica se a validação falhou (success é false)
    if (!success) {
        // Retorna uma resposta HTTP 400 (Bad Request) com uma mensagem de erro e os erros detalhados por campo
        return res.status(400).json({
            message: 'Erro ao cadastrar a propriedade', // Mensagem geral do erro
            errors: error.flatten().fieldErrors          // Lista de erros por campo (formato do Zod)
        })
    }

    const result = await create(productValited)


    return res.json({
        message: "imóvel criado com sucesso",
        user: result
    }
    )
}