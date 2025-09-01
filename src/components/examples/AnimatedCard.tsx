import { motion } from "motion/react";

const AnimatedCard = () => {
  return (
    <motion.div
    initial={{scale:1, rotate:0}}
    whileHover={{scale:1.06, rotate:3}}
    whileTap={{scale:0.95}}
    drag
    dragConstraints={{
      top:-50, left:-50,right:50, bottom:50
    }}
    transition={{type:"spring" , stiffness:300}}
    dragElastic={0.3}

    className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer">
       <img src="https://plus.unsplash.com/premium_photo-1695680239804-0301e04d8f1e?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="card"  className="w-full h-48 object-cover"/>
       <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">Pumkins</h2>
        <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quod!</p>
        <button className="px-4 py-2 text-white outline-none bg-teal-500 hover:bg-teal-300 transition rounded">Learn More</button>
       </div>
    </motion.div>
  )
}
export default AnimatedCard;
