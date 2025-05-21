import {PrismaClient} from '@prisma/client'
import {z} from 'zod'

const prisma = new PrismaClient();

const productSchema = z.object({
    name: z.string({
        invalid_type_error: "O nome deve ser uma string.",
        required_error: "O nome é obrigatório."
    })
    .min(3, { message: "O nome deve ter no mínimo 3 caracteres." })
    .max(255, { message: "O nome deve ter no máximo 255 caracteres." }),

    photo: z.string({
        invalid_type_error: "A foto deve ser uma string.",
        required_error: "A foto é obrigatória."
    }),

    description: z.string({
        invalid_type_error: "A descrição deve ser uma string.",
        required_error: "A descrição é obrigatória."
    })
    .min(3, { message: "A descrição deve ter no mínimo 3 caracteres." })
    .max(255, { message: "A descrição deve ter no máximo 255 caracteres." }),

    price: z.number({
        required_error: "O preço é obrigatório."
    }),

    category_game: z.string({
        invalid_type_error: "A categoria deve ser uma string.",
        required_error: "A categoria é obrigatória."
    })
    .max(255, { message: "A categoria deve ter no máximo 255 caracteres." }),

    platform: z.string({
        invalid_type_error: "A plataforma deve ser uma string.",
        required_error: "A plataforma é obrigatória."
    })
    .max(255, { message: "A plataforma deve ter no máximo 255 caracteres." }),

    quant_stock: z.number({
        invalid_type_error: "A quantidade de estoque deve ser um número.",
        required_error: "A quantidade de estoque é obrigatória."
    })
});

export const productValidator = (product, partial = null) => {
    if(partial){
        return propertySchema.partial(partial).safeParse(product)
    }
    return propertySchema.safeParse(product)
}

export async function create(product){
    const result = await prisma.product.create({
        data: product
    })
    return result
}

export async function remove(id){
    const result = await prisma.product.delete({
        where: {
            id
        }
    })
    return result
}

export async function getList(){
    const result = await prisma.product.findMany()
    return result
}

export async function update(id, product){
    const result = await prisma.product.update({
        where: {
            id
        },
        data: product
    })
    return result
}