import type { Metadata } from 'next'
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.className} bg-black text-white`}>
        {/* Global terminal-styled body */}
        <div className="terminal-ui">
          {children}
        </div>
      </body>
    </html>
  )
}
