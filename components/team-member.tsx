import Image from "next/image"
import { UpLogo } from "./logo"

interface TeamMemberProps {
  image: string
  name: string
  role: string
}

export function TeamMember({ image, name, role }: TeamMemberProps) {
  return (
    <div className="relative aspect-square group">
      <Image
        src={image || "/placeholder.svg"}
        alt={name}
        fill
        loading="lazy"
        className="object-contain bg-gradient-to-r from-[rgba(44,44,47,0.8)] via-[rgba(229,98,40,0.8)] to-[rgba(44,44,47,0.8)]"
      />
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
        <div className="w-12 h-12">
          <UpLogo />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white">{name}</h3>
          <p className="text-gray-400">{role}</p>
        </div>
      </div>
    </div>
  )
}

