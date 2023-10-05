'use client'
import './globals.css'
import AuthProvider from '../component/OAuth/AuthProvider'
import Providers from '../component/Provider/Providers'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body>
        <AuthProvider>
          <Providers>
          {children}
          </Providers>
        </AuthProvider>
      </body>
    </html>
  )
}
