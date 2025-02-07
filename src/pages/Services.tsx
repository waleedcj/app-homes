import type { FunctionComponent } from "@/common/types";
import { MainLayout } from "@/components/layout/MainLayout/MainLayout";
import { Card } from "@/components/ui/Card/Card";


const demoServices = [
  {
    tags: [{ label: "Garden" }, { label: "Inner Court" }, { label: "Home" }],
    title: "GARDEN DESIGN",
    description: "Crafting the perfect garden space. We will design a garden that suits your lifestyle.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jhNVfiGswhCaFLTBe6dMHBZ3umBlSp.png",
  },
  {
    tags: [{ label: "Plant" }, { label: "Garden" }, { label: "Landscape Design" }],
    title: "PLANT SELECTION",
    description: "Hand-picked greenery for your oasis. Our experts select the right plants.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jhNVfiGswhCaFLTBe6dMHBZ3umBlSp.png",
  },
  {
    tags: [{ label: "Home" }, { label: "Garden" }, { label: "Garden" }, { label: "Garden" }, { label: "Landscape Design" }],
    title: "HARDSCAPING",
    description: "Adding structure to your landscape. We create functional and aesthetic hardscape features.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jhNVfiGswhCaFLTBe6dMHBZ3umBlSp.png",
  },
]

export const Services = (): FunctionComponent => {
  return (
    <MainLayout>
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {demoServices.map((service, index) => (
            <Card
              key={index}
              // title={service.title}
              // description={service.description}
              // imageUrl={service.imageUrl}
              // className="border border-tertiary bg-neutral"
              // titleClass="text-primary"
              // textClass="text-brand-black"
              card={service}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};