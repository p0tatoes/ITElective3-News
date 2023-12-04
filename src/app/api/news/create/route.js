import prisma from '@/lib/prisma'

export async function POST(request) {
    const newsData = await request.formData()
    const title = newsData.get('title')
    const author = newsData.get('author')
    const body = newsData.get('body')

    const response = await prisma.news.create({
        data: { title: title, author: author, body: body },
    })

    return Response.json(response)
}
