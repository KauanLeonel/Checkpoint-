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
