import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bat Lang: The Dark Language Rises',
  description: 'A Batman inspired programming language written in Python.',
  applicationName: 'Bat Lang',
  keywords: ['Bat Lang', 'Python', 'Batman themed language'],
  authors: [{name: 'Samiun Black', url: 'https://www.github.com/samiunblack'}],
  creator: 'Samiun Black',
  openGraph: {
    images: [
      {
        url: 'https://i.ibb.co/NTTVQch/image.png',
        alt: 'Bat Lang Logo',
      },
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
