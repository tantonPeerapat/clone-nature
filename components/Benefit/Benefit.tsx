import * as motion from "motion/react-client";
import benefit from "../../assets/Banefit.png";
import TimeCosuming from "../../assets/Time-Cosuming.png";
import Grow_Sprout from "../../assets/Grow_Sprout.png";
import Temperature from "../../assets/Temperature.png";
import Pruning from "../../assets/Pruning.png";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { text } from "stream/consumers";

const cardImages = [
  {
    image: TimeCosuming,
    title: "Quality Product",
    bg: false,
    text: "Our flowers are of the highest quality, carefully selected and sourced from reputable",
  },
  {
    image: Grow_Sprout,
    title: "Always Fresh",
    bg: true,
    text: "Our flowers are always fresh, handpicked and delivered promptly for maximum longevity and enjoyment.",
  },
  {
    image: Temperature,
    title: "Work Smart",
    bg: true,
    text: "We work smart, using innovative techniques and technology to streamline our processes",
  },
  {
    image: Pruning,
    title: "Excelent Service",
    bg: false,
    text: "We pride ourselves on providing excellent service, going above and beyond to meet our customers' needs.",
  },
];

interface CardsProps {
  image: StaticImageData;
  title: string;
  bg: boolean;
  text: string;
}

const Cards = ({ image, title, bg, text }: CardsProps) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={`${bg ? "bg-gray-100" : "bg-white"} p-10 shadow-md hover:shadow-xl rounded-2xl md:rounded-none`}
    >
      <Image
        src={image}
        alt="benefit"
        width={126}
        height={126}
        className="object-contain"
      />

      <h2 className="mt-2 text-[1.25rem] text-primary font-semibold">
        {title}
      </h2>
      <p className="mt-2">{text}</p>
    </motion.div>
  );
};

export default function Benefit() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full flex flex-col md:flex-row"
    >
      <Image src={benefit} alt="logo" width={1200} />

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 p-6 md:p-0">
        {cardImages.map((data, index) => (
          <Cards
            key={index}
            image={data.image}
            title={data.title}
            bg={data.bg}
            text={data.text}
          />
        ))}
      </div>
    </motion.div>
  );
}
