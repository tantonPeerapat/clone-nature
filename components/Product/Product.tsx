"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import productImage_1 from "@/assets/product_1.jpg";
import productImage_2 from "@/assets/product_2.png";
import productImage_3 from "@/assets/product_3.png";
import productImage_4 from "@/assets/product_4.png";

import productImage_5 from "@/assets/product_5.png";
import productImage_6 from "@/assets/product_6.png";
import productImage_7 from "@/assets/product_7.png";
import productImage_8 from "@/assets/product_8.png";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import LinkButton from "./LinkButton";

const Product = () => {
  const [likes, setLikes] = useState<boolean[]>([]);
  const toggleLike = (index: any) => {
    setLikes((prevLikes) => {
      const newLikes = [...prevLikes];
      newLikes[index] = !newLikes[index];
      return newLikes;
    });
  };

  const catalog = [
    {
      id: 1,
      src: productImage_1,
      alt: "productImage_1",
    },
    {
      id: 2,
      src: productImage_2,
      alt: "productImage_2",
    },
    {
      id: 3,
      src: productImage_3,
      alt: "productImage_3",
    },
    {
      id: 4,
      src: productImage_4,
      alt: "productImage_4",
    },
    {
      id: 5,
      src: productImage_5,
      alt: "productImage_5",
    },
    {
      id: 6,
      src: productImage_6,
      alt: "productImage_6",
    },
    {
      id: 7,
      src: productImage_7,
      alt: "productImage_7",
    },
    {
      id: 8,
      src: productImage_8,
      alt: "productImage_8",
    },
  ];

  return (
    <section className="mt-2">
      <div className="w-full flex justify-center">
        <motion.h1
          className="text-2xl sm:text-3xl lg:text-4xl text-primary font-semibold capitalize"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          What we offer to you
        </motion.h1>
      </div>
      <motion.div
        className="w-full h-auto mt-4 px-10 lg:px-40 grid grid-cols-2 lg:grid-cols-4 gap-4"
        initial={{ x: -300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ type: "tween", ease: "easeOut", duration: 2 }}
      >
        {catalog.map((image, index) => (
          <div key={index} className="card-product">
            <LinkButton index={index} likes={likes} toggleLike={toggleLike} />
            <Image
              src={image.src}
              alt={image.alt}
              className="object-cover h-auto w-full rounded-tl-lg rounded-tr-lg"
            />
            <div className="p-4 flex flex-wrap sm:justify-between items-center gap-2">
              <div>
                <h2 className="text-md md:text-lg font-semibold text-primary">
                  Cactus Plant
                </h2>
                <p className="text-sm text-gray-600">
                  <span className="line-through text-gray-400 mr-1">($10)</span>
                  <span className="text-primary font-semibold">$8</span>
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                type="button"
                className="px-6 w-full sm:w-auto h-[34px] sm:h-[38px] border-2 border-primary rounded-sm font-medium text-primary hover:text-white hover:bg-primary cursor-pointer"
              >
                Buy Now
              </motion.button>
            </div>
          </div>
        ))}
      </motion.div>
      <motion.div
        className="w-full h-auto mt-4 px-10 lg:px-40 grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10"
        initial={{ x: 300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ type: "tween", ease: "easeOut", duration: 2 }}
      ></motion.div>
    </section>
  );
};

export default Product;
