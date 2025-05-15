import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import FeaturedVideos from "@/components/featured-videos"
import ProjectShowcase from "@/components/project-showcase"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-28 px-4">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Frontend Enterprise <span className="text-primary">Expertise</span> in Action
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl">
            Quick walkthroughs and code explanations for complex enterprise frontend solutions. Watch how I solve
            real-world challenges.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link href="/videos">
                Browse Videos <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/about">Learn About Me</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Videos Section */}
      <section className="py-16 bg-muted/40 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-left">Featured Walkthroughs</h2>
          <FeaturedVideos />
        </div>
      </section>

      {/* Project Showcase */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-left">Enterprise Projects</h2>
          <ProjectShowcase />
        </div>
      </section>

      {/* Call to Action */}
      {/* <section className="py-16 bg-primary text-primary-foreground px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to level up your frontend skills?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Subscribe to my YouTube channel for weekly walkthroughs of enterprise-grade frontend solutions.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <a href="https://youtube.com/@yourchannel" target="_blank" rel="noopener noreferrer">
              Subscribe to Channel
            </a>
          </Button>
        </div>
      </section>
      */}
    </div>
  )
}
