export default function AchievementsSection() {
  const achievements = [
    { number: "170+", label: "Interview taken" },
    { number: "10+", label: "streaming platforms" },
    { number: "1200+", label: "Videos published" },
    { number: "300K+", label: "views content" },
  ]

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">We have Achieved</h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum gypsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha
              sido el texto de relleno estándar de las industrias desde el año
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center lg:text-left">
                <div className="flex items-start space-x-3">
                  <div
                    className="w-1 h-16 rounded-full"
                    style={{
                      background: "linear-gradient(to bottom, #ffd512, #cc8302, #eb5757)",
                    }}
                  ></div>
                  <div>
                    <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-1">{achievement.number}</div>
                    <div className="text-gray-600 text-sm">{achievement.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
