import type React from "react"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  className?: string
}

export function ServiceCard({ icon, title, description, className }: ServiceCardProps) {
  return (
    <div
      className={cn("p-6 rounded-lg bg-[#2A2A2A] transition-colors duration-300 hover:bg-[#E56228] group", className)}
    >
      <div className="w-20 h-20 mb-4">{icon}</div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-gray-400 group-hover:text-white/90">{description}
      </p>
    </div>
  )
}

