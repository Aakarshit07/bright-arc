"use client"

import { useRef } from "react"
import { cn } from "@/lib/utils"

export default function BrandsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const brands = [
    { name: "SENNHEISER", logo: "/placeholder.svg?height=60&width=120" },
    { name: "allbirds", logo: "/placeholder.svg?height=60&width=120" },
    { name: "KOTN", logo: "/placeholder.svg?height=60&width=120" },
    { name: "GYMSHARK", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Fable", logo: "/placeholder.svg?height=60&width=120" },
  ]

  return (
    <section
      className="py-16 lg:py-24"
      style={{
        background:
          "linear-gradient(to bottom, var(--Primary-100, #DAECFF) 0%, var(--Secondary-50, #FFFEE7) 100%) /* Mobile vertical gradient */, conic-gradient(from 180deg at 50% 50%, var(--Primary-100, #DAECFF) 0deg, var(--Secondary-50, #FFFEE7) 360deg) /* Desktop conic gradient */",
        backgroundSize: "100% 100%, 100% 100%",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Brands We have Worked With</h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum gypsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha
              sido el texto de relleno estándar de las industrias desde el año
            </p>
          </div>

          {/* Horizontal scrollable container for brands */}
          <div
            ref={scrollContainerRef}
            className={cn("flex flex-nowrap gap-6 pb-6 -mx-4 px-4", "lg:grid lg:grid-cols-3 lg:mx-0 lg:px-0")}
            style={{
              overflowX: "auto",
              scrollbarWidth: "none" /* Firefox */,
              msOverflowStyle: "none" /* IE and Edge */,
            }}
          >
            {/* Hide scrollbar for Chrome, Safari and Opera */}
            <style jsx global>{`
              .brands-scroll::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {brands.map((brand, index) => (
              <div
                key={index}
                className={cn(
                  "flex items-center justify-center p-6 bg-white rounded-lg shadow-sm flex-shrink-0 w-[200px]",
                  "lg:w-full",
                )}
              >
                <span className="text-lg font-semibold text-primary-800">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 1023px) {
          section {
            background: linear-gradient(to bottom, var(--Primary-100, #DAECFF) 0%, var(--Secondary-50, #FFFEE7) 100%) !important;
          }
        }
        @media (min-width: 1024px) {
          section {
            background: conic-gradient(from 180deg at 50% 50%, var(--Primary-100, #DAECFF) 0deg, var(--Secondary-50, #FFFEE7) 360deg) !important;
          }
        }
      `}</style>
    </section>
  )
}
