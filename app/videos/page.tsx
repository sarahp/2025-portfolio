import { VideoGrid } from "@/components/video-grid"
import { VideoFilter } from "@/components/video-filter"

export default function VideosPage() {
  return (
    <div className="container mx-auto max-w-6xl py-12 px-4 border-2 border-[hsl(var(--border))] bg-[hsl(var(--card))] shadow-inner p-4 text-sm">
      <h1 className="text-4xl font-bold font-monomb-8">Video Walkthroughs</h1>
      <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
        Browse my collection of quick frontend engineering walkthroughs, covering React, Next.js, state management,
        performance optimization, and enterprise architecture.
      </p>

      <div className="mt-8">
        <VideoGrid />
      </div>
    </div>
  )
}
