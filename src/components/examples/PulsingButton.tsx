import { motion } from "motion/react";

const PulsingButton = () => {
  return (
    <div>
      <motion.div
        className="px-4 py-2 bg-green-400 text-white rounded-xl outline-none"
        animate={{ scale: [1, 1.1, 1],
          backgroundColor:["#32CD32","#4CBB17", "#32CD32"]
         }}
        transition={{duration:0.8 , ease:"easeInOut", repeat:Infinity}}
      >
        Click Me
      </motion.div>
    </div>
  );
};
export default PulsingButton;
