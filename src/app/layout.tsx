import './globals.css';
import { Inter } from 'next/font/google';
import { GlobalProvider } from './GlobalProvider';
import Header from '@/components/layouts/Header';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <GlobalProvider>
          <Header />
          {children}
        </GlobalProvider>
      </body>
    </html>
  )
}
