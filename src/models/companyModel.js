import {PrismaClient} from '@prisma/client'
import {z} from 'zod'


const companySchema = z.object({

    
    cnpj: z.number({
            invalid_type_error: "O cnpj deve ser um numero",
            required_error: "O cnpj é obrigatório."
        }),
        
    
})
