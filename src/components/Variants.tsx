import { motion } from "motion/react";
import { useState } from "react";
import { varients1 } from "./DiffVarient";

const Variants = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div>
       <motion.div className="box" 
       variants={varients1}
       initial ="hidden"
       animate ={isVisible ? "visible" : "hidden"}
       transition={{duration:2, ease:"easeIn"}}
       exit={"exit"}
       onClick={()=>setIsVisible(!isVisible)}
       />
    </div>
  )
}
export default Variants;
