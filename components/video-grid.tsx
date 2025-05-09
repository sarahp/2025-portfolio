import { YouTubeEmbed } from "./youtube-embed"

const videos = [
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
  {
    id: "video4",
    title: "Dashboard Example Walkthrough",
    description: "A dashboard built with React, using an API",
    youtubeId: "dPGirRuLWmw", // Replace with actual YouTube ID
    tags: ["React", "Frontend Engineering", "API Integration", "Code Example"],
  },
]

export function VideoGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {videos.map((video) => (
        <div key={video.id} className="flex flex-col">
          <div className="aspect-video rounded-lg overflow-hidden bg-black">
            <YouTubeEmbed videoId={video.youtubeId} title={video.title} />
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold">{video.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{video.date}</p>
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
  )
}
