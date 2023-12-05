import prisma from '@/lib/prisma'

export async function POST(request) {
    const newsData = await request.json()
    const title = await newsData.title
    const author = await newsData.author
    const body = await newsData.body

    const response = await prisma.news.create({
        data: { title: title, author: author, body: body },
    })

    return Response.json(response)
}
