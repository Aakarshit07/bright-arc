import { DefaultLayout } from "@/components/layout/default-layout";
import BlogListingPage from "@/components/blog/blog-listing-page";

export default function BlogsPage() {
  return (
    <DefaultLayout>
      <BlogListingPage />
    </DefaultLayout>
  );
}
