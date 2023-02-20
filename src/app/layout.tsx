import Header from '@/components/header'
import Providers from '@/components/Providers'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Providers>
          <main className="mx-10 mt-2 mb-8">
            <Header />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
