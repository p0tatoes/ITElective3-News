import prisma from '@/lib/prisma'

/**
 * /api/news/delete/[id]
 */

// Deletes a specified news post from the database
export async function DELETE(request, { params }) {
    const newsId = parseInt(params.id)

    await prisma.news.delete({ where: { id: newsId } })

    return Response.json({ message: `removed news #${newsId}` })
}
