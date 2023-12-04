import prisma from '@/lib/prisma'

/**
 * /api/news/update/[id]
 */

// TODO: make API to update data in the database
// Updates a specified news post from the database
export async function GET(request, { params }) {
    const data = await prisma.news.findMany()
    return new Response(JSON.stringify(data))
}
