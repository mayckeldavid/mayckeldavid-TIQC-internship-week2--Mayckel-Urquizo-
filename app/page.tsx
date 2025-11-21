import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
                <span className="font-mono text-lg font-bold text-primary-foreground">N</span>
              </div>
              <span className="font-mono text-xl font-semibold">NEXT</span>
            </div>
            <nav className="hidden items-center gap-6 md:flex">
              <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Showcase
              </Link>
              <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Docs
              </Link>
              <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Blog
              </Link>
            </nav>
            <div className="flex items-center gap-4">
              <Link href="/auth">
                <Button variant="outline">Sign In</Button>
              </Link>
              <Link href="/auth">
                <Button>Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main>
        <section className="container mx-auto px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-balance font-sans text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              The React Framework for the Web
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Used by some of the world&apos;s largest companies, Next.js enables you to create{" "}
              <span className="font-medium text-foreground">high-quality web applications</span> with the power of React
              components.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/auth">
                <Button size="lg" className="w-full sm:w-auto">
                  Get Started
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                Learn Next.js
              </Button>
            </div>
            <div className="mt-6">
              <code className="rounded-md bg-muted px-3 py-1 font-mono text-sm text-muted-foreground">
                npx create-next-app@latest
              </code>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="border-t border-border bg-muted/30 py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-balance text-3xl font-bold sm:text-4xl">What&apos;s in Next.js?</h2>
              <p className="mt-4 text-pretty text-lg text-muted-foreground">
                Everything you need to build great products on the web.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Server Components",
                  description: "Build with React Server Components for improved performance and SEO.",
                },
                {
                  title: "App Router",
                  description: "File-system based routing with layouts, nested routes, and loading states.",
                },
                {
                  title: "Edge Runtime",
                  description: "Deploy your application to the edge for ultra-low latency worldwide.",
                },
                {
                  title: "TypeScript",
                  description: "First-class TypeScript support with automatic type checking.",
                },
                {
                  title: "Optimizations",
                  description: "Automatic image, font, and script optimizations out of the box.",
                },
                {
                  title: "Data Fetching",
                  description: "Flexible data fetching with async/await in Server Components.",
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-lg border border-border bg-card p-6 transition-colors hover:bg-accent"
                >
                  <h3 className="mb-2 font-semibold">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm text-muted-foreground">Built with Next.js 14 and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  )
}
