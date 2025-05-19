import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Frontend Enterprise Walkthroughs",
  description: "Quick YouTube walkthroughs of enterprise frontend development",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <header className="border-b">
              <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <div className="flex items-center gap-6">
                  <Link href="/" className="text-xl font-bold">
                    SarahP.Studio
                  </Link>
                  <nav className="hidden md:flex gap-6">
                    <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
                      Home
                    </Link>
                    <Link href="/videos" className="text-sm font-medium transition-colors hover:text-primary">
                      Videos
                    </Link>
                    <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
                      About
                    </Link>
                    <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
                      Contact
                    </Link>
                  </nav>
                </div>
                <div className="flex items-center gap-4">
                  <ModeToggle />
                  <Link
                    href="https://www.youtube.com/playlist?list=PLGOJaCg6Ne4FvQeXUIVfCXODkJYgZ_8_F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-primary hover:underline"
                  >YouTube Code Playlist
                  </Link>
                </div>
              </div>
            </header>
            <main className="flex-1">{children}</main>
            <footer className="border-t py-6 md:py-0">
              <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:h-16">
                  <p className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Sarah Peony. All rights reserved.
                  </p>
                  <nav className="flex gap-6">
                    <Link href="/videos" className="text-sm text-muted-foreground hover:text-foreground">
                      Videos
                    </Link>
                    <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
                      About
                    </Link>
                    <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                      Contact
                    </Link>
                  </nav>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
