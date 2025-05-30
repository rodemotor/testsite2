import { useEffect, useState } from "react";

export default function Hero() {
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((v) => !v);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-start max-w-7xl mx-auto px-6 md:px-12"
    >
      <h1 className="text-6xl md:text-8xl font-extrabold leading-tight tracking-tight max-w-3xl text-neutral-900 dark:text-white">
        MauroKrekels<span className="text-indigo-600">.</span>
        <span className="inline-block w-6 ml-1 align-bottom">
          {showCursor ? "|" : " "}
        </span>
      </h1>
      <p className="mt-6 max-w-xl text-neutral-700 dark:text-neutral-300 text-lg md:text-xl font-light leading-relaxed">
        Webdeveloper, designer en creatieveling uit Nederland. Ik bouw
        moderne websites met React en Next.js.
      </p>
      <a
        href="#work"
        className="mt-10 inline-block bg-indigo-600 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-indigo-700 transition"
      >
        Bekijk mijn werk
      </a>
    </section>
  );
}
