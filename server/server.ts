import Fastify from "fastify";
import Cors from '@fastify/cors'
import { z } from "zod";
import { prisma } from './lib/prisma'


async function start() {
    const fastify = Fastify({
        logger: true,
        
    })

    await fastify.register(Cors, {
        origin: true,
    })

    fastify.post('/registerData', async (request, reply) => {
        const personData = z.object({
            Nome: z.string(),
            Sobrenome: z.string(),
            Idade: z.string(),
        })

        const {Nome, Sobrenome, Idade } = personData.parse(request.body)
        
        try {
            await prisma.pessoas.create({
                data: {
                    Nome,
                    Sobrenome,
                    Idade
                }
            })
        } catch (error) {
            throw error
        }

        return reply.status(201).send()
    })

    fastify.get('/getInformation', async () => {
        const getPerson = await prisma.pessoas.findMany()

        return {getPerson}
    })

    await fastify.listen({port: 3304})
}

start()