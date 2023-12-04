import prisma from '@/lib/prisma'

/**
 * /api
 */

// Gets all news posts from the database
export async function GET(request) {
    const data = await prisma.news.findMany()
    return new Response(JSON.stringify(data))
}
