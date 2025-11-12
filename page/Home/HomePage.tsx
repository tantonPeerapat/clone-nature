import AboutUs from "@/components/AboutUs/AboutUs";
import Hero from "@/components/Hero/Hero";
import NavBar from "@/components/Navbar/NavBar";
import Product from "@/components/Product/Product";
import React from "react";

const HomePage = () => {
  return (
    <div className="overflow-hidden h-[10000px]">
      <NavBar />
      <Hero />
      <AboutUs />
      <Product />
    </div>
  );
};

export default HomePage;
