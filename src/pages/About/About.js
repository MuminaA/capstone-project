import React from "react";
import UnderConstruction from "../../components/UnderConstruction/UnderConstruction";
import Banner from "../../components/Banner/Banner";
import { banners } from "../../Data/Data";
import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer';

function About() {
  return (
    <>
      <Header />
      <Banner name={banners[1].name} />
      <UnderConstruction />
      <Footer />
    </>
  );
}

export default About;
