'use client'
import './globals.css'
import AuthProvider from '../component/OAuth/AuthProvider'
import Providers from '../component/Provider/Providers'
import ProtectedRoute from '@/component/protectedRoute/ProtectedRoute'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body>
        {/* <ProtectedRoute> */}
        <AuthProvider>
          <Providers>
          {children}
          </Providers>
        </AuthProvider>
        {/* </ProtectedRoute> */}
      </body>
    </html>
  )
}
