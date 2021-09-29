import { PrismaClient } from "@prisma/client"
import { Joke } from "../model/joke";

export async function getRandomJoke() : Promise<Joke> {
    let client = new PrismaClient()
    let jokes : object[] = await client.$queryRaw`SELECT question, answer FROM Joke ORDER BY RANDOM() LIMIT 1`
    await client.$disconnect()
    return jokes[0] as Joke
    
}