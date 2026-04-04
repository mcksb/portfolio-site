import 'app/globals.css';
import { Navbar } from 'app/components/layout/header';
import { Footer } from 'app/components/layout/footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className="bg-bg-100 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 px-6 pt-6 pb-12 max-w-[1080px] mx-auto w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
