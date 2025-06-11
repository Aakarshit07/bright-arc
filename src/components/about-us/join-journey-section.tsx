// import { Button } from "@/components/ui/button";
// import Image from "next/image";

// export default function JoinJourneySection() {
//   return (
//     <section className="py-16 lg:py-24 bg-linear-90 from-primary-50 to-primary-100 relative overflow-hidden">
//       {/* Background decorative element */}
//       <div className="absolute inset-0 flex items-end sm:items-center sm:justify-center opacity-95">
//         <div className="w-96 h-96 flex items-center justify-center">
//           <Image
//             src="/gps_route.svg"
//             alt="GPS Route Icon"
//             width={384}
//             height={384}
//             className="w-full h-full object-contain"
//           />
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
//           {/* Left side - Image */}
//           <div className="flex justify-center lg:justify-start">
//             <div className="relative">
//               <Image
//                 src="/success_people.jpeg"
//                 alt="Team members standing together"
//                 width={400}
//                 height={253}
//                 className="rounded-lg shadow-lg"
//                 style={{
//                   width: "400.316px",
//                   height: "253px",
//                   flexShrink: 0,
//                 }}
//                 priority
//               />
//             </div>
//           </div>

//           {/* Right side - Content */}
//           <div className="text-center lg:text-left relative">
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
//               Become Part of Our Journey
//             </h2>
//             <p className="text-gray-600 leading-relaxed mb-8">
//               Lorem ipsum gypsum es simplemente el texto de relleno de las
//               imprentas y archivos de texto. Lorem Ipsum ha sido el texto de
//               relleno estándar de las industrias desde el año
//             </p>
//             <Button className="bg-primary-900 hover:bg-primary-800 text-white px-4 py-3 text-lg font-medium">
//               Join Now
//             </Button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function JoinJourneySection() {
  return (
    <section className="py-8 lg:py-12 bg-gradient-to-br from-primary-50 to-primary-100 relative overflow-hidden">
      {/* Background decorative element */}
      <div className="absolute inset-0 flex items-end sm:items-center sm:justify-center opacity-95">
        <div className="w-96 h-96 flex items-center justify-center">
          <Image
            src="/gps_route.svg"
            alt="GPS Route Icon"
            width={384}
            height={384}
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-16 items-center lg:justify-between">
          {/* Left side - Image */}
          <div className="w-full flex justify-center lg:justify-start">
            <div className="relative">
              <Image
                src="/success_people.jpeg"
                alt="Team members standing together"
                width={400}
                height={253}
                className="rounded-lg shadow-lg"
                style={{
                  width: "400.316px",
                  height: "253px",
                  flexShrink: 0,
                }}
                priority
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="w-full text-center lg:text-left relative">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Become Part of Our Journey
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Lorem ipsum gypsum es simplemente el texto de relleno de las
              imprentas y archivos de texto. Lorem Ipsum ha sido el texto de
              relleno estándar de las industrias desde el año
            </p>
            <Button className="bg-primary-900 hover:bg-primary-800 text-white px-4 py-3 text-lg font-medium">
              Join Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
