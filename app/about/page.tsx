import Image from "next/image"
import { Github, Linkedin, Youtube } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="relative w-64 h-64 rounded-full overflow-hidden">
            <Image
              src="/headshot_2025.png"
              alt="Profile picture"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="w-full md:w-2/3">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-xl mb-6">Frontend Engineer specializing in building scalable enterprise applications</p>
          <div className="prose dark:prose-invert max-w-none">
            <p>
              With over a decade of experience in software development, I’ve worked across healthcare, finance, and enterprise
              CMS platforms to build scalable, accessible web applications. From leading frontend architecture at agencies to
              launching my own AI-enhanced product, I specialize in transforming complex user needs into elegant, maintainable solutions.
            </p>
            <br />

            <p>
              My YouTube channel shares practical insights from my career—from mentoring junior engineers to building enterprise-grade
              design systems. I walk through my creations and share insights into the latest tools for frontend development.
            </p>
            <br />

            <h2 className="text-2xl font-bold mb-4">Expertise</h2>
            <ul className="list-disc list-inside">
              <li>React, Next.js, and Vue for enterprise-scale applications</li>
              <li>State management with Recoil, Context API, and custom hooks</li>
              <li>Design system strategy and component libraries (Lit, Storybook)</li>
              <li>Validation logic and accessibility for large form systems</li>
              <li>DevOps-aware frontend workflows using Docker, Webpack, and CI/CD</li>
            </ul>
          </div>


          <div className="mt-8 flex gap-4">
            <Button variant="outline" size="icon" asChild>
              <a href="https://github.com/sarahp" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://linkedin.com/in/sarahpeony/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://youtube.com/@uniquelysarahp" target="_blank" rel="noopener noreferrer">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
