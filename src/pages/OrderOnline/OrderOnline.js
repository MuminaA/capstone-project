import React from "react";
import UnderConstruction from "../../components/UnderConstruction/UnderConstruction";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import { banners } from "../../Data/Data";

function OrderOnline() {
  return (
    <>
      <Header />
      <Banner name={banners[3].name} />
      <UnderConstruction />
      <Footer />
    </>
  );
}

export default OrderOnline;
