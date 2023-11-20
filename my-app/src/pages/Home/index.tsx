// Home.js or Home.jsx
import React from "react";
import ResponsiveAppBar from "../../components/Header/NavBar";
import "./style.scss";
import SwipeableTextMobileStepper from "../../components/SliderHome";
import ActionAreaCard from "../../components/CardHome";
import CreateAccountLink from "../../components/CreateAccountLink";
import Resources from "../../components/Resources";
import HelperHome from "../../components/Duvidas";
import Footer from "../../components/Footer";
function Home() {
  return (
    <div className="ContainerMain">
      <section>
        <ResponsiveAppBar />
      </section>
      <section>
        <SwipeableTextMobileStepper />
      </section>
      <section className="CardAction">
        <ActionAreaCard />
      </section>
      <section>
        <CreateAccountLink />
      </section>
      <section className="Resources">
        <Resources />
      </section>
      <section>
        <HelperHome />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default Home;
