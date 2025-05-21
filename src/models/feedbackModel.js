import { PrismaClient } from '@prisma/client'
import { z } from 'zod'

const prisma = new PrismaClient();

const feedbackSchema = z.object({
    comment: z.string({
        invalid_type_error: "O comentário deve ser uma string.",
        required_error: "O comentário é obrigatório."
    }).max(255, { message: "O comentário deve ter no máximo 255 caracteres." }),

    stars_avaliation: z.number({
        required_error: "As estrelas são obrigatórias."
    }).int() // <- Aqui está a correção
});


export const feedbackValidator = (feedback, partial = null) => {
    if (partial) {
        return propertySchema.partial(partial).safeParse(feedback)
    }
    return propertySchema.safeParse(feedback)
}

export async function create(feedback) {
    const result = await prisma.feedback.create({
        data: feedback
    })
    return result
}

export async function remove(id) {
    const result = await prisma.feedback.delete({
        where: {
            id
        }
    })
    return result
}

export async function getList() {
    const result = await prisma.feedback.findMany()
    return result
}

export async function update(id, feedback) {
    const result = await prisma.feedback.update({
        where: {
            id
        },
        data: feedback
    })
    return result
}