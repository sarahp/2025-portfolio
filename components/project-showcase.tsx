import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

const projects = [
  {
    id: 1,
    title: "Enterprise Dashboard",
    description: "A comprehensive dashboard for monitoring business metrics with real-time data visualization.",
    image: "/dashboard.png",
    tags: ["React", "TypeScript", "Recharts"],
    videoUrl: "https://youtube.com/watch?v=example1",
    githubUrl: "https://github.com/sarahp/enterprise-dashboard",
  },
  {
    id: 2,
    title: "Design System Implementation",
    description: "A scalable design system built for major Hospital Systems.",
    image: "/design_system.png",
    tags: ["React", "Storybook", "Styled Components"],
    githubUrl: "https://github.com/phase2/outline",
    websiteUrl: "https://outline.phase2tech.com/",
  },
  {
    id: 3,
    title: "Adapt AI Text: In Progress",
    description: "A tool that helps you text neurospicy folks in a way that they'll actually want to read.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/sarahp/adaptaitxt",
    websiteUrl: "https://www.adaptaitxt.com/",
  },
]

export default function ProjectShowcase() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <Card key={project.id} className="overflow-hidden flex flex-col">
          <div className="aspect-video relative">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          </div>
          <CardContent className="flex-1 p-6">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-muted-foreground mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag) => (
                <span key={tag} className="bg-muted px-2 py-1 rounded-full text-xs">
                  {tag}
                </span>
              ))}
            </div>
          </CardContent>
          <CardFooter className="px-6 pb-6 pt-0 flex gap-4">
            {project.videoUrl  ? (
              <Button variant="outline" size="sm" className="flex-1" asChild>
                <a href={project.videoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" /> Watch Video
                </a>
              </Button>
            ) : null}
            {project.githubUrl ? (
              <Button variant="outline" size="sm" className="flex-1" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> View Code
                </a>
              </Button>
            ) : null}
            {project.websiteUrl ? (
              <Button variant="outline" size="sm" className="flex-1" asChild>
                <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" /> View Website
                </a>
              </Button>
            ) : null}
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
