import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      className="bg-dark text-accent p-5 flex justify-between items-center"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      <nav>
        <ul className="flex gap-6">
          {["Home", "Skills", "Projects", "Contact"].map((link) => (
            <motion.li
              key={link}
              whileHover={{ scale: 1.1, color: "#8E8FF8" }}
              className="cursor-pointer transition-colors"
            >
              {link}
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
