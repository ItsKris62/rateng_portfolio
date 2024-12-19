import PropTypes from 'prop-types';
import { motion } from "framer-motion";

const Card = ({ title, description }) => {
  return (
    <motion.div
      className="bg-secondary text-dark p-6 rounded-lg shadow-lg hover:shadow-2xl"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-sm">{description}</p>
    </motion.div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
