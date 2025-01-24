import type { FunctionComponent } from "@/common/types";

export const Footer = (): FunctionComponent => {
  return (
    <footer className="bg-green-900 text-white p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">GreenScape</h3>
          <p>Professional landscaping services for your dream outdoor space.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Contact</h3>
          <p>Email: info@greenscape.com</p>
          <p>Phone: (555) 123-4567</p>
          <p>Address: 123 Garden Street</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Hours</h3>
          <p>Monday - Friday: 8am - 6pm</p>
          <p>Saturday: 9am - 4pm</p>
          <p>Sunday: Closed</p>
        </div>
      </div>
      <div className="text-center mt-8 pt-8 border-t border-green-700">
        <p>&copy; 2024 GreenScape. All rights reserved.</p>
      </div>
    </footer>
  );
}; 