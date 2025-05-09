"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { YouTubeEmbed } from "./youtube-embed"

const featuredVideos = [
  {
    id: "video1",
    title: "Building a To Do App with React",
    description: "A basic To Do app built with React, Next.js, and Tailwind CSS.",
    youtubeId: "4WQy931nKjw", // Replace with actual YouTube ID
    tags: ["React", "To Do App", "Frontend Engineering", "Code Example"],
  },
  {
    id: "video2",
    title: "Tufts Medicine Card Walkthrough",
    description: "A walkthrough of the Tufts Medicine Basic Card component.",
    youtubeId: "XOrown_U1sI", // Replace with actual YouTube ID
    tags: ["React", "Tufts Medicine", "Design System", "Frontend Engineering", "Component Library"],
  },
  {
    id: "video3",
    title: "CHOP Map Component Walkthrough",
    description: "A walkthrough of the CHOP Map component.",
    youtubeId: "byLllqyAOq4", // Replace with actual YouTube ID
    tags: ["React", "CHOP", "Design System", "Frontend Engineering", "Component Library"],
  },
]

export default function FeaturedVideos() {
  const [activeVideo, setActiveVideo] = useState(featuredVideos[0])

  return (
    <div className="grid md:grid-cols-3 gap-8">
      <div className="md:col-span-2">
        <div className="aspect-video rounded-lg overflow-hidden bg-black">
          <YouTubeEmbed videoId={activeVideo.youtubeId} title={activeVideo.title} />
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-semibold">{activeVideo.title}</h3>
          <p className="text-muted-foreground mt-2">{activeVideo.description}</p>
          <div className="flex gap-2 mt-3">
            {activeVideo.tags.map((tag) => (
              <span key={tag} className="bg-primary/10 text-primary px-2 py-1 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold mb-4">More Featured Videos</h3>

        {featuredVideos
          .filter((v) => v.id !== activeVideo.id)
          .map((video) => (
            <Card
              key={video.id}
              className="cursor-pointer hover:border-primary/50 transition-colors"
              onClick={() => setActiveVideo(video)}
            >
              <CardContent className="p-4">
                <h4 className="font-medium">{video.title}</h4>
                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{video.description}</p>
              </CardContent>
            </Card>
          ))}

        <Button variant="outline" className="w-full" asChild>
          <Link href="/videos">
            View All Videos <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
