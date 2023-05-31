import React from "react";
import { motion } from "framer-motion";
import  heroImage from "@assets/hero.svg";

const HeroImage: React.FC = () => {
  const variants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ delay: 0.2 }}
        className="py-6 md:order-1 md:block">
        <img src={heroImage} alt="About Us" />
      </motion.div>
    </>
  );
};

export default HeroImage;
