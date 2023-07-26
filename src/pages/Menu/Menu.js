import React from "react";
import UnderConstruction from "../../components/UnderConstruction/UnderConstruction";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import { banners } from "../../Data/Data";

function Menu() {
  return (
    <>
      <Header />
      <Banner name={banners[2].name} />
      <UnderConstruction />
      <Footer />
    </>
  );
}

export default Menu;
