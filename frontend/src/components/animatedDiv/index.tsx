import { motion } from "framer-motion";
import { ReactNode } from "react";
const slideAnimation = {
    initial: { opacity: 0, x: "-10vw" },  
    animate: { opacity: 1, x: 0 },         
    exit: { opacity: 0, x: "100vw" },      
  };

const AnimatedDiv = ({ children }: { children: ReactNode }) => {
	return (
		<motion.div
			variants={slideAnimation}
			initial="initial"
			animate="animate"
			exit="exit"
			transition={{ duration: 1 }}
		>
			{children}
		</motion.div>
	);
};

export default AnimatedDiv;
