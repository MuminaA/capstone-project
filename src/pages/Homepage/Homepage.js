import React from "react";
import Hero from "../../components/Home/Hero/Hero";
import Specials from "../../components/Home/Specials/Specials";
import Testimonials from "../../components/Home/Testimonials/Testimonials";
import About from "../../components/Home/About/About";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Homepage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Specials />
      <Testimonials />
      <About />
      <Footer />
    </>
  );
};

export default Homepage;
