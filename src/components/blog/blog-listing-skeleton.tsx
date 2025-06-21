import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function BlogListingSkeleton() {
  return (
    <section className="py-12 bg-background flex flex-col gap-[70px] md:gap-[106px]">
      <div className="container mx-auto px-4 lg:px-16 max-w-7xl">
        {/* Hero Section Skeleton */}
        <div className="mb-12">
          <Skeleton className="h-[450px] lg:h-[600px] w-full rounded-3xl" />
        </div>

        {/* Category Tabs Skeleton */}
        <div className="mb-8">
          <div className="flex gap-4 flex-wrap">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="h-10 w-24 rounded-full" />
            ))}
          </div>
        </div>

        {/* Blog Grid Skeleton */}
        <div className="flex flex-wrap gap-6 lg:gap-8 items-start justify-center lg:justify-between">
          {Array.from({ length: 6 }).map((_, i) => (
            <Card
              key={i}
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[350px] flex-shrink-0"
            >
              <CardContent className="p-0">
                <Skeleton className="w-full h-[250px] rounded-t-xl" />
                <div className="p-4">
                  <div className="flex gap-4 mb-2">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-4 w-20" />
                  </div>
                  <Skeleton className="h-6 w-full mb-4" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
