import { Link } from "@tanstack/react-router";
import type { FunctionComponent } from "@/common/types";

export const Header = (): FunctionComponent => {
  return (
    <header className="bg-green-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">GreenScape</div>
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-green-300">Home</Link></li>
          <li><Link to="/about" className="hover:text-green-300">About</Link></li>
          <li><Link to="/services" className="hover:text-green-300">Services</Link></li>
          <li><Link to="/blog" className="hover:text-green-300">Blog</Link></li>
          <li><Link to="/contact" className="hover:text-green-300">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}; 