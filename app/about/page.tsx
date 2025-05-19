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
              With over 8 years of experience in frontend development, I've worked with Fortune 500 companies to build
              complex, high-performance web applications that scale to millions of users.
            </p>

            <p>
              My YouTube channel is dedicated to sharing the knowledge I've gained working on enterprise projects,
              breaking down complex concepts into understandable walkthroughs.
            </p>

            <h3>Expertise</h3>
            <ul className="list-disc list-inside">
              <li>React & Next.js architecture for large applications</li>
              <li>State management patterns and performance optimization</li>
              <li>Design systems implementation and maintenance</li>
              <li>Frontend testing strategies for enterprise applications</li>
              <li>CI/CD and deployment workflows</li>
            </ul>

            <h3>Why I Create Content</h3>
            <p>
              I believe in sharing knowledge and helping other developers level up their skills. My goal is to bridge
              the gap between tutorial-level content and the real-world challenges of enterprise frontend development.
            </p>
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
