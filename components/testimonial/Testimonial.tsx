"use client";
import { motion } from "framer-motion";
import Rectangle_1 from "../../assets/Rectangle-1.png";
import Rectangle_2 from "../../assets/Rectangle-2.png";
import Rectangle_3 from "../../assets/Rectangle-3.png";
import Comment_1 from "../../assets/comment_1.png";
import Comment_2 from "../../assets/comment_2.png";
import Comment_3 from "../../assets/comment_3.png";
import Image from "next/image";

const testimonials = [
  {
    imageUser: Rectangle_1,
    name: "John Doe",
    comment:
      "Highly recommend this website for quality flowers and plants. Great prices, timely delivery and excellent customer service.",
    image: Comment_1,
  },
  {
    imageUser: Rectangle_2,
    name: "Kate Szu",
    comment:
      "Great service, beautiful flowers, timely delivery. Highly recommend.",
    image: Comment_2,
  },
  {
    imageUser: Rectangle_3,
    name: "Grace",
    comment:
      "I am very happy with my purchase from this website, the plants were healthy and arrived on time.",
    image: Comment_3,
  },
];

const Testimonial = () => {
  return (
    <div className="mt-[4rem] w-full mx-auto px-4">
      <motion.h1
        className="text-primary text-2xl sm:text-3xl lg:text-4xl font-semibold text-center mb-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        What do they say about us
      </motion.h1>

      <motion.div
        initial={{ x: -300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ type: "tween", ease: "easeOut", duration: 2 }}
        className="p-6 flex flex-col md:flex-row gap-2 md:gap-8 items-center justify-center"
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="relative bg-gray-100 rounded-lg p-10 mb-6 w-[360px] h-[330px]"
          >
            <div className="flex flex-row items-center gap-4">
              <Image src={testimonial.imageUser} alt="" />
              <h3 className="text-[1.25rem] text-primary font-semibold">
                {testimonial.name}
              </h3>
            </div>
            <p className="mt-6">{`"${testimonial.comment}"`}</p>
            <Image
              src={testimonial.image}
              alt=""
              className="absolute bottom-0 right-2 w-[200px] h-[200px]"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Testimonial;
