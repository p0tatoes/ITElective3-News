import { PrismaClient } from '@prisma/client'
import { useParams } from 'next/navigation'
const prisma = new PrismaClient()

/**
 * /api/news/[id]
 */

export async function GET(request, { params }) {
    const newsId = parseInt(params.id)
    const data = await prisma.news.findFirst({ where: { id: newsId } })
    console.log(data)
    return new Response(JSON.stringify(data))
}
