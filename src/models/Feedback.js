import {PrismaClient} from '@prisma/client'
import {z} from 'zod'


const feedbackSchema = z.object({

    
    comment: z.string({
        invalid_type_error: "O comentario deve ser uma string.",
        required_error: "O comentario deve ser obrigatório"
    })
    .max(255, {message: "O comentario deve ter no máximo 255 caracteres."}),
    stars_avaliation: z.int({
        required_error: "As estrelas devem ser obrigatorias"
    }),
        
    
})
