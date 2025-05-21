import {PrismaClient} from '@prisma/client'
import {z} from 'zod'

const prisma = new PrismaClient();

export const kartValidator = (kart, partial = null) => {
    if(partial){
        return propertySchema.partial(partial).safeParse(kart)
    }
    return propertySchema.safeParse(kart)
}

export async function create(kart){
    const result = await prisma.kart.create({
        data: kart
    })
    return result
}

export async function remove(id){
    const result = await prisma.kart.delete({
        where: {
            id
        }
    })
    return result
}

export async function getList(){
    const result = await prisma.kart.findMany()
    return result
}

export async function update(id, kart){
    const result = await prisma.kart.update({
        where: {
            id
        },
        data: kart
    })
    return result
}