import React from "react";
import UnderConstruction from "../../components/UnderConstruction/UnderConstruction";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import { banners } from "../../Data/Data";

function Login() {
  return (
    <>
      <Header />
      <Banner name={banners[4].name} />
      <UnderConstruction />
      <Footer />
    </>
  );
}

export default Login;
