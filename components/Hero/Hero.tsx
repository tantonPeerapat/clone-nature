"use client";
import React, { useState } from "react";
import Image from "next/image";
import ImageHome_1 from "@/assets/ImageHome@1.png";
import ImageHome_2 from "@/assets/ImageHome@2.png";
import { motion, AnimatePresence } from "motion/react";
import { MdOutlineSlowMotionVideo } from "react-icons/md";

type ImageItem = {
  id: number;
  src: any;
  alt: string;
};

const Hero = () => {
  const ImageHome: ImageItem[] = [
    { id: 1, src: ImageHome_1, alt: "ImageHome_1" },
    { id: 2, src: ImageHome_2, alt: "ImageHome_2" },
  ];

  const text = "Nature's Beauty Delivered to You";
  const letters = text.split("");

  const [activeId, setActiveId] = useState(2);
  const activeImage = ImageHome.find((item) => item.id === activeId);

  return (
    <div className="relative w-full h-[65vh] sm:h-[90vh] overflow-hidden flex flex-col items-center justify-center bg-gray-200">
      {/* แสดงรูปภาพ */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeId}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        >
          {activeImage && (
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              className="object-cover"
              priority
            />
          )}

          <div className="absolute inset-0 bg-black/30 z-0" />
        </motion.div>
      </AnimatePresence>

      <div className="z-20 w-full flex flex-col items-center justify-center">
        <div className="flex flex-wrap">
          {text.split("").map((letter, index) => (
            <motion.span
              key={index}
              className="text-2xl lg:text-4xl xl:text-6xl text-white font-bold"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: index * 0.05,
                type: "spring",
                stiffness: 100,
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>

        <motion.p
          className="py-4 text-xs lg:text-base text-white text-center w-[80%] sm:w-[60%] lg:w-[45%]"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Nature's beauty is just a click away with our online flower and plant
          shop. We offer a wide variety of flowers that will bring a touch of
          nature to your home!
        </motion.p>
      </div>
      <div className="z-20 flex space-x-6 mt-4">
        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.5,
            duration: 0.6,
            type: "spring",
            stiffness: 100,
          }}
          whileHover={{ scale: 1.1, boxShadow: "0px 8px 15px rgba(0,0,0,0.3)" }}
          whileTap={{ scale: 0.95 }}
          className="px-6 h-[34px] sm:h-[38px] border border-primary rounded-sm text-white bg-primary font-normal text-sm sm:text-shadow-lg cursor-pointer"
        >
          Book Now
        </motion.button>

        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.5,
            duration: 0.6,
            type: "spring",
            stiffness: 100,
          }}
          whileHover={{ scale: 1.1, boxShadow: "0px 8px 15px rgba(0,0,0,0.3)" }}
          whileTap={{ scale: 0.95 }}
          className="px-6 h-[34px] sm:h-[38px] border border-white rounded-sm text-white hover:text-primary hover:bg-white font-normal text-sm sm:text-shadow-lg cursor-pointer flex items-center justify-center gap-2"
        >
          <MdOutlineSlowMotionVideo size={20} /> Watch Video
        </motion.button>
      </div>

      <div className="absolute right-0 flex flex-col gap-4 z-20 pr-2">
        {ImageHome.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveId(item.id)}
            className={`px-1 transition cursor-pointer ${
              activeId === item.id
                ? "text-primary font-bold border-b-2"
                : "text-gray-400"
            }`}
          >
            0{item.id}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Hero;
