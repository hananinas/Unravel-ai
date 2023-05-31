import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const Hero: React.FC = () => {
  const variants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  };



  return (
    <>
      <Helmet>
        <title>Unleashing the Potential of AI with Unravel AI</title>
        <meta name="description" content="Discover the power of AI and its capabilities to revolutionize the way you do business." />
      </Helmet>
      
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={variants}
        className="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter"
      >
        Unleashing the Potential of AI with Unravel AI.
      </motion.h1>
      
      <motion.p
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ delay: 0.5 }}
        className="text-lg mt-4 text-slate-600 max-w-xl"
      >
        Discover the power of AI and its capabilities to revolutionize the way you do business.
        Our cutting-edge solutions are designed to deliver results, streamline operations, and drive innovation, ensuring your business stays competitive in the digital age.
      </motion.p>
    </>
  );
};

export default Hero;
