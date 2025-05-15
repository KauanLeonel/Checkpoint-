import {PrismaClient} from '@prisma/client'
import {z} from 'zod'


const clientSchema = z.object({

    
    cpf: z.number({
            invalid_type_error: "O cpf deve ser um numero",
            required_error: "O cpf é obrigatório."
        }),
        
    
})
