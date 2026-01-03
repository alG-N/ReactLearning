export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <header>My Header</header>
        {children}
      </body>
    </html>
  );
}
