import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

/**
 * /api/news/[id]
 */

// Gets a specified news post from the database
export async function GET(request, { params }) {
    const newsId = parseInt(params.id)
    const data = await prisma.news.findFirst({ where: { id: newsId } })
    return new Response(JSON.stringify(data))
}
