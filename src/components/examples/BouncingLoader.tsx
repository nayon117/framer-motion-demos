import { motion } from "motion/react";

const BouncingLoader = () => {
  return (
    <div className="flex items-center justify-center space-x-2">
      {[...Array(3)].map((_, idx) => (
        <motion.div
          key={idx}
          className="w-4 h-4 bg-teal-500 rounded-full"
          animate={{ y: [0, -15, 0] }}
          transition={{duration:0.5, ease:"easeInOut", repeat:Infinity, repeatDelay:idx * 0.1}}
        />
      ))}
    </div>
  );
};
export default BouncingLoader;
