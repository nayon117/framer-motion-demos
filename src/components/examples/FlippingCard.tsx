import { motion } from "framer-motion";
import { useState } from "react";
import { varients2 } from "../DiffVarient";

const FlippingCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      onClick={() => setIsFlipped(!isFlipped)}
      className="perspective-1000 w-64 h-40"
      style={{ perspective: 1000 }}
    >
      <motion.div
        variants={varients2}
        initial="front"
        animate={isFlipped ? "back" : "front"}
        transition={{ duration: 0.6 }}
        className="w-full h-full rounded-lg shadow-lg relative"
        style={{
          transformStyle: "preserve-3d",
          width: "100%",
          height: "100%",
        }}
      >
        {/* Front Side */}
        <div
          className="absolute inset-0 flex items-center justify-center text-xl font-bold"
          style={{
            background: "#22c55e",
            backfaceVisibility: "hidden",
            borderRadius: "0.5rem",
            width: "100%",
            height: "100%",
          }}
        >
          Front Side
        </div>
        {/* Back Side */}
        <div
          className="absolute inset-0 flex items-center justify-center text-xl font-bold"
          style={{
            background: "#22c55e",
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            borderRadius: "0.5rem",
            width: "100%",
            height: "100%",
          }}
        >
          Back Side
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FlippingCard;
