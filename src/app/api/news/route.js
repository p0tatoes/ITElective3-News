import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

/**
 * /api
 */

export async function GET(request) {
    const data = await prisma.news.findMany()
    return new Response(JSON.stringify(data))
}
