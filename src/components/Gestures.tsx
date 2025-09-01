import { motion } from "motion/react";

const Gestures = () => {
  return (
    <div>
        {/* while hover */}
        {/* <motion.div className="box" 
        whileHover={{scale:1.2, rotate:45}}
        transition={{duration:0.6, type:"spring", stiffness:300}}
        /> */}

        {/* while tap */}
        {/* <motion.div className="box"
        whileTap={{scale:0.8, backgroundColor:"crimson"}}
        transition={{type:"spring", stiffness:300}}
        /> */}

        {/* while drag */}
        <motion.div className="box"
        drag
        dragConstraints={{
          top:-50,
          left:-50,
          right:50,
          bottom:50
        }}
        />
    </div>
  )
}
export default Gestures;
