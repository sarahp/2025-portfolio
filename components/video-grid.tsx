"use client"

import { useState } from "react"
import { YouTubeEmbed } from "./youtube-embed"
import { VideoFilter } from "./video-filter"
import { Button } from "./ui/button"

const videos = [
  {
    id: "video1",
    title: "Building a To Do App with React",
    description: "A basic To Do app built with React, Next.js, and Tailwind CSS.",
    youtubeId: "4WQy931nKjw", // Replace with actual YouTube ID
    tags: ["react", "frontend-engineering", "code-example", "api-integration"],
    link: "https://todo-rose-chi.vercel.app/",
    github: "https://github.com/sarahp/todo"
  },
  {
    id: "video2",
    title: "Tufts Medicine Card Walkthrough",
    description: "A walkthrough of the Tufts Medicine Basic Card component.",
    youtubeId: "XOrown_U1sI", // Replace with actual YouTube ID
    tags: ["lit", "design-system", "frontend-engineering", "component-library"],
    link: "https://todo-rose-chi.vercel.app/",
  },
  {
    id: "video3",
    title: "CHOP Map Component Walkthrough",
    description: "A walkthrough of the CHOP Map component.",
    youtubeId: "byLllqyAOq4", // Replace with actual YouTube ID
    tags: ["lit", "design-system", "frontend-engineering", "component-library"],
    link: "https://todo-rose-chi.vercel.app/",
  },
  {
    id: "video4",
    title: "Dashboard Example Walkthrough",
    description: "A dashboard built with React, using Recharts",
    youtubeId: "KkCcqRpaDic", // Replace with actual YouTube ID
    tags: ["react", "frontend-engineering", "api-integration", "code-example"],
    link: "https://perpay-dashboard-ecru.vercel.app/",
    github: "https://github.com/sarahp/enterprise-dashboard"
  },
  {
    id: "video5",
    title: "CHOP Card Component Walkthrough",
    description: "A walkthrough of the CHOP Card component.",
    youtubeId: "lDA6BVVXqys", // Replace with actual YouTube ID
    tags: ["lit", "design-system", "frontend-engineering", "component-library"],
  },
  {
    id: "video6",
    title: "CHOP Header and Footer Walkthrough",
    description: "A walkthrough of the CHOP Header and Footer components.",
    youtubeId: "FYFD9638KFE", // Replace with actual YouTube ID
    tags: ["lit", "design-system", "frontend-engineering", "component-library"],
  },
  {
    id: "video7",
    title: "Drupal Integration: Enterprise Component Library",
    description: "A walkthrough of the Drupal integration with the enterprise component library.",
    youtubeId: "3vO4Zfw9hR4", // Replace with actual YouTube ID
    tags: ["drupal", "enterprise-component-library", "frontend-engineering", "code-example"],
  },
  {
    id: "video8",
    title: "CHOP CSS Variables Walkthrough",
    description: "A walkthrough of the CHOP CSS Variables.",
    youtubeId: "tJLOBccevWU", // Replace with actual YouTube ID
    tags: ["lit", "design-system", "frontend-engineering", "code-example"],
  }
]

export function VideoGrid() {
  const [selectedTag, setSelectedTag] = useState("all")

  const filteredVideos = videos.filter((video) => 
    selectedTag === "all" || video.tags.includes(selectedTag)
  )

  return (
    <div className="space-y-8">
      <VideoFilter onFilterChange={setSelectedTag} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredVideos.map((video) => (
          <div key={video.id} className="flex flex-col">
            <div className="aspect-video rounded-lg overflow-hidden bg-black">
              <YouTubeEmbed videoId={video.youtubeId} title={video.title} />
            </div>
            <div className="flex flex-row gap-2 pt-2 pb-2">
              <a href={video.link} target="_blank" rel="noopener noreferrer">
                <Button variant="outline">View website</Button>
              </a>
              {video.github ? (
                <a href={video.github} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline">View Code</Button>
                </a>
              ) : null}
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold">{video.title}</h3>
              <p className="text-muted-foreground mt-2">{video.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {video.tags.map((tag) => (
                  <span key={tag} className="bg-primary/10 text-primary px-2 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
