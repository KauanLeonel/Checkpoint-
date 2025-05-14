import {PrismaClient} from '@prisma/client'
import {z} from 'zod'


const productSchema = z.object({

    
    name: z.string({
        invalid_type_error: "O nome deve ser uma string.",
        required_error: "O nome é obrigatório."
    })
    .min(3, {message: "O nome deve ter no mínimo 3 caracteres."})
    .max(255, {message: "O nome deve ter no máximo 255 caracteres."}),
    photo: z.string({
        invalid_type_error: "A foto deve ser uma string.",
        required_error: "A foto é obrigatória."
    }),
    description: z.string({
        invalid_type_error: "A descrição deve ser uma string.",
        required_error: "A descrição deve ser obrigatória"
    })
    .min(3, {message: "A descrição deve ter no mínimo 3 caracteres."})
    .max(255, {message: "A descrição deve ter no máximo 255 caracteres."}),
    price: z.float({
        required_error: "O preço deve ser obrigatório"
    }),
    category_game: z.string({
        invalid_type_error: "A categoria deve ser uma string.",
        required_error: "A categoria é obrigatória."
    })
    .max(255, {message: "A categoria deve ter no máximo 255 caracteres."}),
    platform: z.string({
        invalid_type_error: "A plataforma deve ser uma string.",
        required_error: "A plataforma é obrigatória."
    })
    .max(255, {message: "A plataforma deve ter no máximo 255 caracteres."}),
    quant_stock: z.number({
        invalid_type_error: "A quantidade de estoque deve ser um numero",
        required_error: "A quantidade de estoque é obrigatória."
    }),
})
