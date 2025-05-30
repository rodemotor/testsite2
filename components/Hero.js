import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6"
    >
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-bold tracking-tight text-neutral-900 dark:text-white"
      >
        Mauro Krekels
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="mt-6 text-lg md:text-xl text-neutral-700 dark:text-neutral-300 max-w-xl"
      >
        Freelance webdeveloper en designer — ik bouw slimme, snelle en schaalbare digitale ervaringen.
      </motion.p>

      <motion.a
        href="#work"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 0.6 }}
        className="mt-8 inline-block px-6 py-3 bg-black text-white rounded-xl text-sm md:text-base hover:bg-neutral-800 transition-colors"
      >
        Bekijk mijn werk
      </motion.a>
    </section>
  );
}
