import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import data from './data'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: data.webMeta.title,
  description: data.webMeta.description,
  applicationName: data.webMeta.applicationName,
  authors: data.webMeta.authors,
  keywords: data.webMeta.keywords,
}

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-foreground`}>
        {children}
      </body>
    </html>
  )
}
