import type { FunctionComponent } from "@/common/types";
import { MainLayout } from "@/components/layout/MainLayout/MainLayout";
import { Card } from "@/components/ui/Card/Card";

const blogPosts = [
  {
    title: "10 Tips for a Sustainable Garden",
    description: "Learn how to create and maintain an eco-friendly garden that thrives.",
    date: "2024-01-15",
    image: "/src/assets/images/sustainable-garden.jpg"
  },
  {
    title: "Spring Gardening Essentials",
    description: "Get your garden ready for spring with these essential tips and tricks.",
    date: "2024-02-01",
    image: "/src/assets/images/spring-garden.jpg"
  },
  // Add more blog posts
];

export const Blog = (): FunctionComponent => {
  return (
    <MainLayout>
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-primary mb-8">Latest Blog Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card
              key={post.title}
             card={post}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};