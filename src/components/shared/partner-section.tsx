"use client";

import Image from "next/image";
import bunchStudios from "../../../public/bunch-main-logo.svg";
import brightArcLogo from "../../../public/logo_main.svg";

const partners = [
  { name: "Bright Arc", logo: brightArcLogo },
  { name: "Bunch Studios", logo: bunchStudios },
  { name: "Bright Arc", logo: brightArcLogo },
];

export function PartnersSection() {
  return (
    <section className="py-10 lg:py-12 bg-secondary-50 overflow-hidden">
      <div className="relative">
        {/* Infinite scrolling container */}
        <div className="flex animate-infinite-scroll">
          {/* Multiple sets for seamless infinite loop */}
          {[...Array(4)].map((_, setIndex) => (
            <div key={setIndex} className="flex shrink-0">
              {partners.map((partner, index) => (
                <div
                  key={`${setIndex}-${index}`}
                  className="shrink-0 mx-8 lg:mx-12 flex items-center justify-center"
                >
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    width={120}
                    height={60}
                    className="h-8 lg:h-12 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-secondary-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-secondary-50 to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  );
}
