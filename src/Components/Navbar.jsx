import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full bg-charcoal/80 backdrop-blur-md text-white shadow-lg z-50"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <motion.h1
          className="text-2xl md:text-3xl font-extrabold text-accent tracking-wide"
          whileHover={{ scale: 1.05 }}
        >
          Vyom<span className="text-white">Garud</span>
        </motion.h1>

        <div className="hidden md:flex space-x-8 font-medium">
          {["Home", "About", "Capabilities", "Highlights", "Contact"].map(
            (item) => (
              <motion.div whileHover={{ scale: 1.1 }} key={item}>
                <Link
                  to={
                    item === "Home"
                      ? "/"
                      : `/${item.toLowerCase()}`
                  }
                  className="hover:text-accent transition-colors"
                >
                  {item}
                </Link>
              </motion.div>
            )
          )}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-accent focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          className="md:hidden flex flex-col items-center bg-charcoal border-t border-gray-700 space-y-4 py-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {["Home", "About", "Capabilities", "Highlights", "Contact"].map(
            (item) => (
              <Link
                key={item}
                to={
                  item === "Home"
                    ? "/"
                    : `/${item.toLowerCase()}`
                }
                className="text-lg hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            )
          )}
        </motion.div>
      )}
    </motion.nav>
  );
}
