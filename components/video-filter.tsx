"use client"

import { useState } from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"

const tags = [
  { value: "all", label: "All Videos" },
  { value: "react", label: "React" },
  { value: "frontend-engineering", label: "Frontend Engineering" },
  { value: "design-system", label: "Design System" },
  { value: "component-library", label: "Component Library" },
  { value: "api-integration", label: "API Integration" },
  { value: "code-example", label: "Code Example" },
]

interface VideoFilterProps {
  onFilterChange: (tag: string) => void
}

export function VideoFilter({ onFilterChange }: VideoFilterProps) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("all")

  return (
    <div className="flex items-center space-x-4">
      <div className="flex-1 md:max-w-sm">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" role="combobox" aria-expanded={open} className="w-full justify-between">
              {value ? tags.find((tag) => tag.value === value)?.label : "Filter by topic..."}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full p-0">
            <Command>
              <CommandInput placeholder="Search topics..." />
              <CommandList>
                <CommandEmpty>No topic found.</CommandEmpty>
                <CommandGroup>
                  {tags.map((tag) => (
                    <CommandItem
                      key={tag.value}
                      value={tag.value}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue)
                        onFilterChange(currentValue === value ? "all" : currentValue)
                        setOpen(false)
                      }}
                    >
                      <Check className={cn("mr-2 h-4 w-4", value === tag.value ? "opacity-100" : "opacity-0")} />
                      {tag.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>

      <div className="flex space-x-2">
        <Button variant="outline" size="sm">
          Newest
        </Button>
        <Button variant="outline" size="sm">
          Popular
        </Button>
      </div>
    </div>
  )
}
