import {PrismaClient} from '@prisma/client'
import {z} from 'zod'

const prisma = new PrismaClient();

const companySchema = z.object({

    
    cnpj: z.number({
            invalid_type_error: "O cnpj deve ser um numero",
            required_error: "O cnpj é obrigatório."
        }),
        
    
})


export const companyValidator = (company, partial = null) => {
    if(partial){
        return propertySchema.partial(partial).safeParse(company)
    }
    return propertySchema.safeParse(company)
}

export async function create(company){
    const result = await prisma.company.create({
        data: company
    })
    return result
}

export async function remove(id){
    const result = await prisma.company.delete({
        where: {
            id
        }
    })
    return result
}

export async function getList(){
    const result = await prisma.company.findMany()
    return result
}

export async function update(id, company){
    const result = await prisma.company.update({
        where: {
            id
        },
        data: company
    })
    return result
}