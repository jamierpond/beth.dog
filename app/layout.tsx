import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'little beth',
  description: "little beth | shes's got the best mlemer",
  openGraph: {
    siteName: 'little beth',
    type: 'website',
    locale: 'en_IE',
    url: 'https://beth.dog',
    images: [{
      url: '/pup.jpg',
      alt: 'a pup',
    }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
