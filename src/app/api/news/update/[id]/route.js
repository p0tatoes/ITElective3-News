import prisma from '@/lib/prisma'
import { redirect } from 'next/navigation'

/**
 * /api/news/update/[id]
 */

// Updates a specified news post from the database
export async function PATCH(request, { params }) {
    const newsId = parseInt(params.id)

    const updateData = await request.json()
    const updatedTitle = await updateData.title
    const updatedBody = await updateData.body

    if (updatedTitle) {
        await prisma.news.update({
            where: { id: newsId },
            data: { title: updatedTitle },
        })
    }
    if (updatedBody) {
        await prisma.news.update({
            where: { id: newsId },
            data: { body: updatedBody },
        })
    }

    return Response.json({ message: `updated news #${newsId}` })
}
