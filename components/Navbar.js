import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="fixed top-0 left-0 w-full z-40 flex items-center justify-between px-6 md:px-12 py-4 backdrop-blur-md bg-white/30 dark:bg-black/30 border-b border-neutral-300 dark:border-neutral-700"
    >
      <Link href="/" className="font-bold text-lg">
        <span className="tracking-tight text-black dark:text-white">MK.</span>
      </Link>

      <div className="flex space-x-6 text-sm text-neutral-800 dark:text-neutral-200">
        <Link href="#work" className="hover:underline underline-offset-4">
          Werk
        </Link>
        <Link href="#about" className="hover:underline underline-offset-4">
          Over mij
        </Link>
        <Link href="#contact" className="hover:underline underline-offset-4">
          Contact
        </Link>
      </div>
    </motion.nav>
  );
}
