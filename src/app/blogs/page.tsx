import { DefaultLayout } from "@/components/layout/default-layout";
import BlogListingPage from "@/lib/blog-listing-page";

export default function BlogsPage() {
  return (
    <DefaultLayout>
      <BlogListingPage />
    </DefaultLayout>
  );
}
