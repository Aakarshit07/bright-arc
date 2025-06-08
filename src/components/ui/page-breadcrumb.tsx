// import Link from "next/link"
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb"

// interface PageBreadcrumbProps {
//   items: { label: string; href?: string }[]
// }

// export function PageBreadcrumb({ items }: PageBreadcrumbProps) {
//   return (
//     <Breadcrumb>
//       <BreadcrumbList>
//         {items.map((item, index) => (
//           <>
//             <BreadcrumbItem key={`${index}+${item.label}`}>
//               {item.href ? (
//                 <BreadcrumbLink asChild>
//                   <Link href={item.href}>{item.label}</Link>
//                 </BreadcrumbLink>
//               ) : (
//                 <BreadcrumbPage>{item.label}</BreadcrumbPage>
//               )}
//             </BreadcrumbItem>
//             {index < items.length - 1 && <BreadcrumbSeparator key={`separator-${index}`} />}
//           </>
//         ))}
//       </BreadcrumbList>
//     </Breadcrumb>
//   )
// }
