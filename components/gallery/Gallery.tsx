"use client";
import { motion } from "framer-motion";
import Image from "next/image";

import galleryImage_1 from "../../assets/gallery-1.png";
import galleryImage_2 from "../../assets/gallery-2.png";
import galleryImage_3 from "../../assets/gallery-3.png";
import galleryImage_4 from "../../assets/gallery-4.png";
import galleryImage_5 from "../../assets/gallery-5.png";

const images = [galleryImage_2, galleryImage_3, galleryImage_4, galleryImage_5];

const Gallery = () => {
  return (
    <div className="w-full mx-auto px-4">
      {/* Title */}
      <motion.h1
        className="mt-16 mb-10 text-2xl sm:text-3xl lg:text-4xl text-primary font-semibold text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Our Gallery View
      </motion.h1>

      {/* Gallery Grid */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="grid grid-cols-12 gap-4"
      >
        {/* Left big image */}
        <div className="col-span-12 md:col-span-6 relative h-[620px]">
          <Image
            src={galleryImage_1}
            alt="Gallery main"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>

        {/* Right 4 images */}
        <div className="col-span-12 md:col-span-6 grid grid-cols-2 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative h-[300px]">
              <Image
                src={image}
                alt={`Gallery ${index + 1}`}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Gallery;
