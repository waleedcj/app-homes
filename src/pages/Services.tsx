import type { FunctionComponent } from "@/common/types";
import { MainLayout } from "@/components/layout/MainLayout/MainLayout";
import { Card } from "@/components/ui/Card/Card";

const services = [
  {
    title: "Landscape Design",
    description: "Custom landscape design services tailored to your vision and property.",
    imageUrl: "/src/assets/images/landscape-design.jpg"
  },
  {
    title: "Garden Maintenance",
    description: "Regular maintenance to keep your garden looking beautiful all year round.",
    imageUrl: "/src/assets/images/garden-maintenance.jpg"
  },
  {
    title: "Hardscaping",
    description: "Installation of patios, walkways, retaining walls, and other hardscape features.",
    imageUrl: "/src/assets/images/hardscaping.jpg"
  },
  {
    title: "Irrigation Systems",
    description: "Design and installation of efficient irrigation systems.",
    imageUrl: "/src/assets/images/irrigation.jpg"
  }
];

export const Services = (): FunctionComponent => {
  return (
    <MainLayout>
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}; 