// pages/index.js
import Head from "next/head";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Project 1",
    description: "Een korte beschrijving van project 1.",
    image: "/project1.png",
    url: "#",
  },
  {
    title: "Project 2",
    description: "Een korte beschrijving van project 2.",
    image: "/project2.png",
    url: "#",
  },
  {
    title: "Project 3",
    description: "Een korte beschrijving van project 3.",
    image: "/project3.png",
    url: "#",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Mauro Krekels - Freelance Webdeveloper</title>
        <meta
          name="description"
          content="Freelance webdeveloper en designer — ik bouw slimme, snelle en schaalbare digitale ervaringen."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      {/* Hero Section */}
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

      {/* Werk / Projecten Section */}
      <section
        id="work"
        className="max-w-7xl mx-auto px-6 md:px-12 py-20"
      >
        <h2 className="text-4xl font-semibold mb-12 text-center text-neutral-900 dark:text-white">
          Werk
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {projects.map(({ title, description, image, url }, i) => (
            <motion.a
              key={title}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 * i }}
              className="group rounded-xl overflow-hidden shadow-lg border border-neutral-200 dark:border-neutral-700 cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-5 bg-white dark:bg-black">
                <h3 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-white">
                  {title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Over mij Section */}
      <section
        id="about"
        className="bg-neutral-100 dark:bg-neutral-900 py-20 px-6 md:px-12"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6 text-neutral-900 dark:text-white">
            Over mij
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-lg">
            Ik ben Mauro, een gepassioneerde webdeveloper en designer met jaren ervaring in het bouwen van gebruiksvriendelijke websites en applicaties. Mijn focus ligt op kwaliteit, performance en een strak design.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="max-w-4xl mx-auto px-6 md:px-12 py-20"
      >
        <h2 className="text-4xl font-semibold mb-8 text-center text-neutral-900 dark:text-white">
          Contact
        </h2>

        <form className="max-w-xl mx-auto flex flex-col space-y-6">
          <input
            type="text"
            placeholder="Naam"
            className="px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:bg-neutral-800 dark:border-neutral-700 dark:text-white"
          />
          <input
            type="email"
            placeholder="E-mail"
            className="px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:bg-neutral-800 dark:border-neutral-700 dark:text-white"
          />
          <textarea
            placeholder="Bericht"
            rows={6}
            className="px-4 py-3 border border-neutral-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-black dark:bg-neutral-800 dark:border-neutral-700 dark:text-white"
          ></textarea>
          <button
            type="submit"
            className="self-center bg-black text-white px-6 py-3 rounded-xl hover:bg-neutral-800 transition-colors"
          >
            Verstuur
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-neutral-600 dark:text-neutral-400">
        &copy; {new Date().getFullYear()} Mauro Krekels. Alle rechten voorbehouden.
      </footer>
    </>
  );
}
