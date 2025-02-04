import { useState } from "react";
import type { FunctionComponent } from "@/common/types";
import { MainLayout } from "@/components/layout/MainLayout/MainLayout";
import { Button } from "@/components/ui/Button/Button";

export const Contact = (): FunctionComponent => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <MainLayout>
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">Contact Us</h1>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-brand-black mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-tertiary rounded-lg focus:ring-2 focus:ring-accent"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-brand-black mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-tertiary rounded-lg focus:ring-2 focus:ring-accent"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-brand-black mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full p-3 border border-tertiary rounded-lg focus:ring-2 focus:ring-accent"
                required
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-accent text-neutral hover:bg-secondary"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </MainLayout>
  );
}; 