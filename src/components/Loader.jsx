import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const greetings = [
  "Hello",
  "नमस्ते",
  "ਸਤ ਸ੍ਰੀ ਅਕਾਲ",
  "Hola",
  "Bonjour",
  "Ciao",
  "Hallo",
  "こんにちは",
  "안녕하세",
  "ਸਤ ਸ੍ਰੀ ਅਕਾਲ",
  "Hello",
  "नमस्ते",
  "ਸਤ ਸ੍ਰੀ ਅਕਾਲ",
  "Hola",
  "Bonjour",
  "Ciao",
  "Hallo",
  "你好"
];

const Loader = ({ setLoading }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 100);

    if (index === greetings.length) {
      clearInterval(timer);
      setTimeout(() => setLoading(false), 150);
    }

    return () => clearInterval(timer);
  }, [index, setLoading]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <AnimatePresence mode="wait">
        <motion.h1
          key={index}
          className="text-white font-semibold tracking-wide text-[8vw] md:text-[6vw] lg:text-[4vw]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y:"-100%" }}
          transition={{ duration: 0.01 }}
        >
          {greetings[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
};

export default Loader;