import { motion } from "motion/react";
const images = [
  {
    src: "https://images.unsplash.com/photo-1446034295857-c39f8844fad4?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Caption for Image 1",
  },
  {
    src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Caption for Image 2",
  },
  {
    src: "https://images.unsplash.com/photo-1559666126-84f389727b9a?q=80&w=3877&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Caption for Image 3",
  },
];

const ImageGallary = () => {
  return (
    <div className="w-[80%] flex ">
      {images.map((image, idx) => (
        <motion.div
          key={idx}
          whileHover={{ scale: 1.05 }}
          transition={{duration:0.6 , type:"spring", stiffness:300, ease:"easeInOut"}}
          drag
          dragConstraints={{
            top:-50,left:-50,right:50,bottom:50
          }}
          className="relative m-1 overflow-hidden rounded-lg shadow-lg"
        >
          <img src={image.src} alt="image" className="w-full h-auto" />
          <motion.div whileHover={{opacity:1}} className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
            <p className="text-lg text-white">{image.caption}</p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};
export default ImageGallary;
