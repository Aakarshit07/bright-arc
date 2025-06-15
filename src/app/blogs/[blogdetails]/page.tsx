import { BlogLayout } from "@/components/blog/blog-details/blog-layout";
import { DefaultLayout } from "@/components/layout/default-layout";

export default function BlogDetailPage() {
  // In real implementation, fetch blog data based on slug
  return (
    <DefaultLayout>
      <BlogLayout />
    </DefaultLayout>
  );
}
