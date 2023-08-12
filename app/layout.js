import './globals.css'
import { Montserrat } from 'next/font/google'
import Rainbow from '@RainbowKit/Rainbow'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'DataVerse',
  description: 'One stop solution to get training data and share your data.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}><Rainbow>{children}</Rainbow></body>
    </html>
  )
}
