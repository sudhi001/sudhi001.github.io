import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { url } from 'inspector'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sudhi S | Software Architect',
  description: 'Sudhi S | Software Architect @ Stabilix Solutions Pvt. Ltd. Trivandrum, Kerala, India',
  applicationName:"My Profile",
  authors:[{name:"Sudhi S",url: 'https://su-dhi.in'}],
  keywords:["Sudhi S","Sudhi Surendran","Stabilix"," Software Architect","Mobile Application developer","Android Developer","iOS Developer"],

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
