export default function OurStorySection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Lorem ipsum gypsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum
                ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.
                persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera
                que logró hacer un libro de textos especimen.
              </p>
              <p>
                exto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado
                en los 60s con la creación de las hojas "Letraset", las cuales contenían pasajes de Lorem Ipsum, y más
                recientemente
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src="/placeholder.svg?height=320&width=600"
              alt="Our team"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
