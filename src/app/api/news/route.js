import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

/**
 * /api
 */

// Gets all news posts from the database
export async function GET(request) {
    const data = await prisma.news.findMany()
    return new Response(JSON.stringify(data))
}
