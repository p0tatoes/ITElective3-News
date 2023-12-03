import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

/**
 * /api/news/update/[id]
 */

export async function GET(request, { params }) {
    const data = await prisma.news.findMany()
    return new Response(JSON.stringify(data))
}
