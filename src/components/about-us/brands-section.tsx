"use client";

import Image from "next/image";

export default function BrandsSection() {
  const brands = [
    {
      name: "SENNHEISER",
      logo: "/logo_main.svg",
    },
    {
      name: "allbirds",
      logo: "/logo_main.svg",
    },
    { name: "KOTN", logo: "/logo_main.svg" },
    {
      name: "GYMSHARK",
      logo: "/logo_main.svg",
    },
    { name: "Fable", logo: "/logo_main.svg" },
    {
      name: "Bunch Studios",
      logo: "/bunch-main-logo.svg",
    },
  ];

  // Split brands into two rows for mobile
  const firstRow = brands.slice(0, Math.ceil(brands.length / 2));
  const secondRow = brands.slice(Math.ceil(brands.length / 2));

  return (
    <section className="w-full py-10 px-4 lg:px-16 relative overflow-hidden bg-[conic-gradient(from_270deg_at_82.56%_50%,_var(--Primary-100,_#DAECFF)_0deg,_var(--Secondary-50,_#FFFEE7)_360deg)] sm:bg-[conic-gradient(from_180deg_at_50%_50%,_var(--Primary-100,_#DAECFF)_0deg,_var(--Secondary-50,_#FFFEE7)_360deg)]">
      {/* Decorative dots */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary-400 rounded-full"></div>
        <div className="absolute top-32 right-16 w-2 h-2 bg-secondary-400 rounded-full"></div>
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-primary-400 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-secondary-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-primary-400 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-secondary-400 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center sm:justify-between gap-6 lg:gap-auto">
          {/* Brands Section */}
          <div className="w-full lg:w-1/2">
            {/* Mobile: Two-row scrollable layout */}
            <div className="block lg:hidden">
              {/* First Row */}
              {/* Row 1: left to right */}
              <div className="overflow-hidden">
                <div className="flex gap-4 animate-scroll-ltr w-max">
                  {[...firstRow, ...firstRow].map((brand, index) => (
                    <div
                      key={`row1-${index}`}
                      className="flex items-center justify-center shrink-0 w-[160px] h-[80px]"
                    >
                      <Image
                        src={brand.logo}
                        alt={brand.name}
                        width={100}
                        height={50}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Row 2: right to left */}
              <div className="overflow-hidden">
                <div className="flex gap-4 animate-scroll-rtl w-max">
                  {[...secondRow, ...secondRow].map((brand, index) => (
                    <div
                      key={`row2-${index}`}
                      className="flex items-center justify-center shrink-0 w-[160px] h-[80px]"
                    >
                      <Image
                        src={brand.logo}
                        alt={brand.name}
                        width={100}
                        height={50}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop: Grid layout */}
            <div className="hidden lg:grid lg:grid-cols-2 lg:gap-6">
              {brands.map((brand, index) => (
                <div
                  key={`desktop-${index}`}
                  className="flex items-center justify-center rounded-lg h-[100px]"
                >
                  <Image
                    src={brand.logo || "/placeholder.svg"}
                    alt={brand.name}
                    width={120}
                    height={60}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl lg:text-3xl font-bold text-default-950 mb-6 sm:mb-8">
              Brands We have Worked With
            </h2>
            <p className="text-gray-500 leading-normal text-sm sm:text-base font-normal">
              Lorem ipsum gypsum es simplemente el texto de relleno de las
              imprentas y archivos de texto. Lorem Ipsum ha sido el texto de
              relleno estándar de las industrias desde el año
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
