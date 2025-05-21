import {PrismaClient} from '@prisma/client'
import {z} from 'zod'

const prisma = new PrismaClient();

const clientSchema = z.object({

    
    cpf: z.number({
            invalid_type_error: "O cpf deve ser um numero",
            required_error: "O cpf é obrigatório."
        }),
        
    
})


export const clientValidator = (client, partial = null) => {
    if(partial){
        return propertySchema.partial(partial).safeParse(client)
    }
    return propertySchema.safeParse(client)
}

export async function create(client){
    const result = await prisma.client.create({
        data: client
    })
    return result
}

export async function remove(id){
    const result = await prisma.client.delete({
        where: {
            id
        }
    })
    return result
}

export async function getList(){
    const result = await prisma.client.findMany()
    return result
}

export async function update(id, client){
    const result = await prisma.client.update({
        where: {
            id
        },
        data: client
    })
    return result
}