"use client"
import { useRouter } from "next/navigation"

interface TagListProps {
  tags: string[]
}

export default function TagList({ tags }: TagListProps) {
  const router = useRouter()

  const handleTagClick = (tag: string) => {
    router.push(`/tags/${tag.toLowerCase()}`)
  }

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => handleTagClick(tag)}
          className="px-3 py-1 bg-gray-100 hover:bg-red-50 text-sm rounded-full transition-colors"
        >
          {tag}
        </button>
      ))}
    </div>
  )
}
