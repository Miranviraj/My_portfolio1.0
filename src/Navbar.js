import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">MyApp</div>

        {/* Desktop Menu (Always Visible) */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-white hover:text-gray-300">Home</a>
          <a href="#" className="text-white hover:text-gray-300">About</a>
          <a href="#" className="text-white hover:text-gray-300">Services</a>
          <a href="#" className="text-white hover:text-gray-300">Contact</a>
        </div>

        {/* Mobile Menu Button (Only Shows on Mobile) */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu (Smooth Transition) */}
      <div
        className={`absolute top-16 left-0 w-full bg-blue-700 transition-all duration-300 ease-in-out 
        ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        <div className="flex flex-col items-center p-4 space-y-2">
          <a href="#" className="text-white block hover:text-gray-300">Home</a>
          <a href="#" className="text-white block hover:text-gray-300">About</a>
          <a href="#" className="text-white block hover:text-gray-300">Services</a>
          <a href="#" className="text-white block hover:text-gray-300">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
