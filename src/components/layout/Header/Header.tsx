import { Link } from "@tanstack/react-router";
import Icons from "@/assets/images/svgs/svgComponent";
import brandLogo from "@/assets/images/mishmish.png"
import type { FunctionComponent } from "@/common/types";

export const Header = (): FunctionComponent => {
  return (
    <header className=" text-black p-2">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex items-cente"> {/* Changed to items-end */}
          <Link to="/">
            <img src={brandLogo} className="w-[150px]"/>
          </Link>
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