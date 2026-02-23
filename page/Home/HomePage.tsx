import AboutUs from "@/components/AboutUs/AboutUs";
import Benefit from "@/components/Benefit/Benefit";
import Gallery from "@/components/gallery/Gallery";
import Hero from "@/components/Hero/Hero";
import NavBar from "@/components/Navbar/NavBar";
import Product from "@/components/Product/Product";
import Testimonial from "@/components/testimonial/Testimonial";

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <NavBar />
      <Hero />
      <AboutUs />
      <Product />
      <Benefit />
      <Gallery />
      <Testimonial />
    </div>
  );
};

export default HomePage;
