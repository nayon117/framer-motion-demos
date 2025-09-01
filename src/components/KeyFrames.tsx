import { motion } from "motion/react";

const KeyFrames = () => {
  return (
    <div>
      <motion.div
        className="box"
        // animate={{ scale: [1, 1.5, 2, 1] }}
        animate={{ rotate: [0, 45, 270, 45, 0],
          borderRadius:["20%", "20%", "40%", "40%", "20%"]
         }}
        transition={{ duration: 5, ease: "easeInOut" }}
      />
    </div>
  );
};
export default KeyFrames;
