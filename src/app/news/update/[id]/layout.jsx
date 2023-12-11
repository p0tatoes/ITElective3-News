import { Inter } from 'next/font/google'
import '@/app/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Update News | PlainNews PH',
    description: 'You are about to update a news report.',
}

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className={inter.className}>{children}</body>
        </html>
    )
}
