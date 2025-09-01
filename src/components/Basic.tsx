import { motion } from "motion/react";

const Basic = () => {
  return (
    <div>
      {/* <motion.div className="box" animate={{x : 40, y:20}} /> */}
      {/* <motion.div className="box" animate={{rotateX:60}} /> */}
      {/* <motion.div className="box" animate={{rotateY:60}} /> */}
      {/* <motion.div className="box" animate={{rotate:45}} /> */}
      {/* scale increase the size */}
      {/* <motion.div className="box" animate={{scale:1.5}} /> */}
      {/* <motion.div className="box" animate={{skewX: 20}} /> */}
      {/* <motion.div className="box" animate={{skewY: 20}} /> */}

      <motion.div
        className="box"
        initial={{ x: 0 }}
        animate={{ x: 100 }}
        transition={{ delay: 1.5, ease:"easeInOut", duration:1.5 }}
      />
    </div>
  );
};
export default Basic;
