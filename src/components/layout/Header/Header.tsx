import { Link } from "@tanstack/react-router";
import Icons from "@/assets/images/svgs/svgComponent";
import type { FunctionComponent } from "@/common/types";

export const Header = (): FunctionComponent => {
  return (
    <header className="bg-primary text-neutral p-2 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex items-cente"> {/* Changed to items-end */}
          <Link to="/">
            <Icons tech='BrandIcon' className="w-16 h-16" />
          </Link>
          <h1 className="text-2xl font-extrabold self-center font-condensed italic mt-4">LANDSCAPING</h1> {/* Added leading-none */}
        </div>
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-tertiary transition-colors">Home</Link></li>
          <li><Link to="/about" className="hover:text-tertiary transition-colors">About</Link></li>
          <li><Link to="/services" className="hover:text-tertiary transition-colors">Services</Link></li>
          <li><Link to="/blog" className="hover:text-tertiary transition-colors">Blog</Link></li>
          <li><Link to="/contact" className="hover:text-tertiary transition-colors">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};