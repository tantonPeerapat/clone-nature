"use client";
import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="px-12 lg:px-40 pt-6 lg:pt-18">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-[50%]">
          <motion.h1
            className="text-2xl sm:text-3xl lg:text-4xl text-primary font-semibold capitalize"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            We Help choose the most suitable plants for you
          </motion.h1>
        </div>
        <div className="mt-6 lg:mt-0 w-full lg:w-[50%]">
          <motion.p
            className="text-xs sm:text-base"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Our selection includes a wide variety of flowers, from classic roses
            to exotic orchids, as well as a variety of lush indoor and outdoor
            plants and also offer unique floral arrangements that are perfect
            for any occasion, whether you're looking to brighten up your home or
            send a thoughtful gift.
          </motion.p>
        </div>
      </div>
      <div>footer</div>
    </section>
  );
};

export default AboutUs;
