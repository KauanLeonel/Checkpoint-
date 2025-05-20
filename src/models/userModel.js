import {PrismaClient} from '@prisma/client'
import {z} from 'zod'


const userSchema = z.object({

    
    name: z.string({
            invalid_type_error: "O nome deve ser uma string.",
            required_error: "O nome é obrigatório."
        })
        .min(3, {message: "O nome deve ter no mínimo 3 caracteres."})
        .max(255, {message: "O nome deve ter no máximo 255 caracteres."}),
    email: z.string({
            invalid_type_error: "O email deve ser uma string.",
            required_error: "O email é obrigatório."
        })
        .unique({
            unique: "O email deve ser unico"
        })
        .email({message: "Email inválido."}),
    role: z.string({
        required_error: "A role deve ser obrigatória"
        }),
    pass: z.string({
            invalid_type_error: "A senha deve ser uma string.",
            required_error: "A senha é obrigatória."
            })
            .min(8, {message: "A senha deve ter no mínimo 8 caracteres."})
            .max(255, {message: "A senha deve ter no máximo 255 caracteres."}),
    avatar: z.string({
        invalid_type_error: "O avatar deve ser uma string.",
        required_error: "O avatar é obrigatório."
        })
        .url({message: "Url do avatar inválida."})
        .optional()
})


export const userValidator = (user, partial = null) => {
    if(partial){
        return propertySchema.partial(partial).safeParse(user)
    }
    return propertySchema.safeParse(user)
}

export async function create(user){
    const result = await prisma.puserlaskjdf.create({
        data: user
    })
    return result
}

export async function remove(id){
    const result = await prisma.user.delete({
        where: {
            id
        }
    })
    return result
}

export async function getList(){
    const result = await prisma.user.findMany()
    return result
}

export async function update(id, user){
    const result = await prisma.user.update({
        where: {
            id
        },
        data: user
    })
    return result
}