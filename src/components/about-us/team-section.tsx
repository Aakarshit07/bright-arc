// "use client";

// import { useRef } from "react";
// import { Facebook, Github, Linkedin } from "lucide-react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { cn } from "@/lib/utils";
// import Image from "next/image";

// export default function TeamSection() {
//   const scrollContainerRef = useRef<HTMLDivElement>(null);

//   const teamMembers = [
//     {
//       name: "Rahul Singh",
//       role: "Design Director",
//       image: "/person1.jpeg",
//     },
//     {
//       name: "Rahul Singh",
//       role: "Design Director",
//       image: "/person2.jpeg",
//     },
//     {
//       name: "Rahul Singh",
//       role: "Design Director",
//       image: "/person3.jpeg",
//     },
//     {
//       name: "Rahul Singh",
//       role: "Design Director",
//       image: "/person4.jpeg",
//     },
//   ];

//   return (
//     <section className="w-full">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex  items-center justify-center mb-8">
//           <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
//             Meet our Experts
//           </h2>
//         </div>

//         {/* Horizontal scrollable container for mobile */}
//         <div
//           ref={scrollContainerRef}
//           className={cn(
//             "flex gap-6 pb-6 -mx-4 px-4",
//             "sm:grid sm:grid-cols-2 sm:mx-0 sm:px-0",
//             "lg:grid-cols-4"
//           )}
//         >
//           {teamMembers.map((member, index) => (
//             <Card
//               key={index}
//               className={cn(
//                 "overflow-hidden shadow-none group shrink-0 w-[280px] py-0 items-stretch",
//                 "sm:w-full"
//               )}
//             >
//               <div className="relative w-full h-64">
//                 <Image
//                   src={member.image || "/placeholder.svg"}
//                   alt={member.name}
//                   fill
//                   className="object-cover group-hover:scale-105 transition-transform duration-300 rounded-md"
//                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 280px"
//                   priority
//                 />
//                 <CardContent className="absolute bottom-0 left-0 right-0 p-4 from-gray-900/70 via-gray-700/60 to-content4/20 text-white bg-linear-0 ">
//                   <h3 className="font-semibold text-lg">{member.name}</h3>
//                   <p className="text-sm opacity-90">{member.role}</p>
//                   <div className="flex space-x-2 mt-2">
//                     <Facebook className="h-4 w-4 hover:text-primary-300 cursor-pointer transition-colors" />
//                     <Github className="h-4 w-4 hover:text-primary-300 cursor-pointer transition-colors" />
//                     <Linkedin className="h-4 w-4 hover:text-primary-300 cursor-pointer transition-colors" />
//                   </div>
//                 </CardContent>
//               </div>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useRef } from "react";
import { Facebook, Github, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function TeamSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const teamMembers = [
    {
      name: "Rahul Singh",
      role: "Design Director",
      image: "/person1.jpeg",
    },
    {
      name: "Rahul Singh",
      role: "Design Director",
      image: "/person2.jpeg",
    },
    {
      name: "Rahul Singh",
      role: "Design Director",
      image: "/person3.jpeg",
    },
    {
      name: "Rahul Singh",
      role: "Design Director",
      image: "/person4.jpeg",
    },
  ];

  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Meet our Experts
          </h2>
        </div>

        {/* Horizontal scrollable container for all devices */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-6 -mx-4 px-4"
          style={{
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // IE and Edge
          }}
        >
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="overflow-hidden shadow-none group shrink-0 w-[280px] py-0 items-stretch"
            >
              <div className="relative w-full h-64">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300 rounded-md"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 280px"
                  priority
                />
                <CardContent className="absolute bottom-0 left-0 right-0 p-4 from-gray-900/70 via-gray-700/60 to-content4/20 text-white bg-linear-0">
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
  );
}
