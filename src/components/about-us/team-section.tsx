"use client"

import { useRef } from "react"
import { Facebook, Github, Linkedin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export default function TeamSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const teamMembers = [
    {
      name: "Rahul Singh",
      role: "Design Director",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Rahul Singh",
      role: "Design Director",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Rahul Singh",
      role: "Design Director",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Rahul Singh",
      role: "Design Director",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start mb-8">
          <Badge variant="secondary" className="bg-primary-100 text-primary-700 mb-4">
            Team
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Meet our Experts</h2>
        </div>

        {/* Horizontal scrollable container for mobile */}
        <div
          ref={scrollContainerRef}
          className={cn("flex gap-6 pb-6 -mx-4 px-4", "sm:grid sm:grid-cols-2 sm:mx-0 sm:px-0", "lg:grid-cols-4")}
          style={{
            overflowX: "auto",
            scrollbarWidth: "none" /* Firefox */,
            msOverflowStyle: "none" /* IE and Edge */,
          }}
        >
          {/* Hide scrollbar for Chrome, Safari and Opera */}
          <style jsx global>{`
            .team-scroll::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className={cn("overflow-hidden border-0 shadow-md group shrink-0 w-[280px]", "sm:w-full")}
            >
              <div className="relative">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <CardContent className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black/70 to-transparent text-white">
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-sm opacity-90">{member.role}</p>
                  <div className="flex space-x-2 mt-2">
                    <Facebook className="h-4 w-4 hover:text-primary-300 cursor-pointer transition-colors" />
                    <Github className="h-4 w-4 hover:text-primary-300 cursor-pointer transition-colors" />
                    <Linkedin className="h-4 w-4 hover:text-primary-300 cursor-pointer transition-colors" />
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
