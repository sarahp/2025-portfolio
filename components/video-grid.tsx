import { YouTubeEmbed } from "./youtube-embed"

const videos = [
  {
    id: "video1",
    title: "Building a Scalable Design System in React",
    description: "Learn how to create and implement a design system for large enterprise applications.",
    youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube ID
    date: "May 15, 2023",
    tags: ["React", "Design Systems"],
  },
  {
    id: "video2",
    title: "State Management Patterns for Enterprise Apps",
    description: "Advanced state management techniques for complex React applications.",
    youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube ID
    date: "June 22, 2023",
    tags: ["React", "State Management"],
  },
  {
    id: "video3",
    title: "Performance Optimization in Next.js",
    description: "Strategies to improve loading and runtime performance in Next.js applications.",
    youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube ID
    date: "July 10, 2023",
    tags: ["Next.js", "Performance"],
  },
  {
    id: "video4",
    title: "Building Accessible Enterprise Applications",
    description: "Implementing accessibility best practices in large-scale React applications.",
    youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube ID
    date: "August 5, 2023",
    tags: ["Accessibility", "React"],
  },
  {
    id: "video5",
    title: "Micro-Frontend Architecture Explained",
    description: "A deep dive into implementing micro-frontends for enterprise applications.",
    youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube ID
    date: "September 18, 2023",
    tags: ["Architecture", "Micro-Frontends"],
  },
  {
    id: "video6",
    title: "Advanced TypeScript Patterns for React",
    description: "Leveraging TypeScript to build type-safe React applications at scale.",
    youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube ID
    date: "October 7, 2023",
    tags: ["TypeScript", "React"],
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
