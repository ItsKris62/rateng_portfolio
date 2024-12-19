import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-primary h-screen flex items-center justify-center text-accent">
      <div className="text-center p-5">
        <motion.h1
          className="text-5xl font-bold mb-5"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          Welcome to My Portfolio
        </motion.h1>
        <motion.p
          className="text-xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Showcasing my skills, projects, and experiences.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
