import {PrismaClient} from '@prisma/client'
import {z} from 'zod'


const requestSchema = z.object({

    
    quant_request: z.int({
        required_error: "A quantidade deve ser obrigatório"
    }),
        
    
})
