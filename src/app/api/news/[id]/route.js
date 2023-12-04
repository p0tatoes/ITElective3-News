import prisma from '@/lib/prisma'

/**
 * /api/news/[id]
 */

// Gets a specified news post from the database
export async function GET(request, { params }) {
    const newsId = parseInt(params.id)
    const data = await prisma.news.findFirst({ where: { id: newsId } })
    return new Response(JSON.stringify(data))
}
