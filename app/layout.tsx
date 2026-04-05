import 'app/global.css';
import { Navbar } from 'app/components/layout/header';
import { Footer } from 'app/components/layout/footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <title>shaun.dev</title>
        <script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="1ee29894-afd9-49d7-ab34-4ed968d24ff2"  type="text/javascript"></script>
      </head>
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
