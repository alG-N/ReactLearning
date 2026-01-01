export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
      <header>My children</header>
      {children}
      </body>
    </html>
  )
}

// can phai React.ReactNode de bao gom tat ca cac loai con cua component va render