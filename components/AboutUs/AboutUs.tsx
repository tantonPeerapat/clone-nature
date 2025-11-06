"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Indoor_Plant from "@/assets/Indoor_Plant.png";
import Outdoor_Plant from "@/assets/Outdoor_Plant.png";
import Plants_Pots from "@/assets/Plants_Pots.png";

const AboutUs = () => {
  return (
    <section>
      <div className="px-12 lg:px-40 pt-6 lg:pt-18">
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
              Our selection includes a wide variety of flowers, from classic
              roses to exotic orchids, as well as a variety of lush indoor and
              outdoor plants and also offer unique floral arrangements that are
              perfect for any occasion, whether you're looking to brighten up
              your home or send a thoughtful gift.
            </motion.p>
          </div>
        </div>
      </div>
      <motion.div
        className="mt-4 mx-4 lg:mx-40 lg:mt-10 flex flex-col lg:flex-row gap-6 lg:gap-15"
        initial={{ x: "100%", opacity: 0 }} // เริ่มจากด้านขวานอกจอ
        animate={{ x: 0, opacity: 1 }} // เคลื่อนเข้ามาและปรากฏ
        transition={{
          type: "tween", // ใช้ tween สำหรับการเคลื่อนแบบ linear/ง่ายๆ
          ease: "easeOut", // เลื่อนนุ่มๆ
          duration: 2, // ปรับให้ช้า 2 วินาที
        }}
      >
        <div className="p-4 w-full h-[280px] lg:h-[380px] lg:p-6 shadow-md rounded-md">
          <Image src={Indoor_Plant} alt="Indoor_Plant"></Image>
          <h2 className="text-primary text-base sm:text-2xl font-semibold">
            Indoor Plants
          </h2>
          <p className="mt-4 text-xs sm:text-base">
            Bring the beauty of nature to your outdoor spaces with our wide
            selection of outdoor plants
          </p>
        </div>
        <div className="p-4 w-full bg-primary h-[280px] lg:h-[380px] lg:p-6 shadow-md rounded-md">
          <Image src={Outdoor_Plant} alt="Outdoor_Plant"></Image>
          <h2 className="text-white text-base sm:text-2xl font-semibold">
            Outdoor Plants
          </h2>
          <p className="mt-4 text-xs text-white sm:text-base">
            Bring a touch of greenery to your living spaces with our collection
            of indoor plants, perfect for purifying the air and adding a natural
            touch to your home.
          </p>
        </div>
        <div className="p-4 w-full h-[280px] lg:h-[380px] lg:p-6 shadow-md rounded-md">
          <Image src={Indoor_Plant} alt="Indoor_Plant"></Image>
          <h2 className="text-primary text-base sm:text-2xl font-semibold">
            Plants Pots
          </h2>
          <p className="mt-4 text-xs sm:text-base">
            Add a touch of style to your indoor or outdoor spaces with our
            collection of pots plants, available in a variety of sizes and
            designs to fit any decor
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutUs;
