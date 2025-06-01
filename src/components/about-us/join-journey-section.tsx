import { Button } from "@/components/ui/button"

export default function JoinJourneySection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-50 to-primary-100 relative overflow-hidden">
      {/* Background decorative element */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <div className="w-96 h-96 bg-gray-300 rounded-full flex items-center justify-center">
          {/* Location pin icon */}
          <div className="w-24 h-32 bg-gray-400 rounded-t-full relative">
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <img
                src="/placeholder.svg?height=253&width=400&text=Team+Photo"
                alt="Team members standing together"
                className="rounded-lg shadow-lg"
                style={{
                  width: "400.316px",
                  height: "253px",
                  flexShrink: 0,
                }}
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="text-center lg:text-left relative">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Become Part of Our Journey</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Lorem ipsum gypsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha
              sido el texto de relleno estándar de las industrias desde el año
            </p>
            <Button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 text-lg font-medium">
              Join Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
