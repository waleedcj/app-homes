import { Card } from "@/components/ui/Card/Card"

const demoServices = [
  {
    tags: [{ label: "Garden" }, { label: "Inner Court" }, { label: "Home" }],
    title: "GARDEN DESIGN",
    description: "Crafting the perfect garden space. We will design a garden that suits your lifestyle.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },
  {
    tags: [{ label: "Plant" }, { label: "Garden" }, { label: "Landscape Design" }],
    title: "PLANT SELECTION",
    description: "Hand-picked greenery for your oasis. Our experts select the right plants.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },
  {
    tags: [{ label: "Home" }, { label: "Garden" }, { label: "Garden" }, { label: "Garden" }, { label: "Landscape Design" }],
    title: "HARDSCAPING",
    description: "Adding structure to your landscape. We create functional and aesthetic hardscape features.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },
  {
    tags: [{ label: "Home" }, { label: "Garden" }, { label: "Garden" }, { label: "Garden" }, { label: "Landscape Design" }],
    title: "HARDSCAPING",
    description: "Adding structure to your landscape. We create functional and aesthetic hardscape features.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },
]

const ServicesSection = () => {
  return (
    <div className="relative bg-primary text-icon-bg mb-8">
    <section className="py-16 px-4 md:px-0 container mx-auto max-w-7xl ">
      <div className="mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-lg font-medium">[&nbsp;&nbsp;SERVICES&nbsp;&nbsp;]</h2>
          <a
            href="#"
            className="text-sm font-medium underline underline-offset-4 hover:text-gray-600 transition-colors"
          >
            See More Services
          </a>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {demoServices.map((service, index) => (
            <Card key={index} card={service} />
          ))}
        </div>
      </div>
    </section>
    </div>
  )
}

export default ServicesSection

