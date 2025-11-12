import React from "react";
import { motion } from "framer-motion";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";

interface LinkButtonProps {
  index: number;
  likes: boolean[];
  toggleLike: (index: number) => void;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  index,
  likes,
  toggleLike,
}) => {
  return (
    <motion.div
      className="absolute top-2 right-2 bg-white p-2 rounded-full cursor-pointer shadow-md"
      whileTap={{ scale: 0.8 }}
      whileHover={{ scale: 1.1 }}
      onClick={() => toggleLike(index)}
    >
      {likes[index] ? (
        <motion.div
          key="liked"
          initial={{ scale: 0 }}
          animate={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <IoMdHeart size={22} className="text-primary" />
        </motion.div>
      ) : (
        <motion.div
          key="unliked"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <IoMdHeartEmpty size={22} />
        </motion.div>
      )}
    </motion.div>
  );
};

export default LinkButton;
