import React from "react";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Presentation from "./components/Presentation";
import HowItWorks from "./components/HowItWorks";
import Articles from "./components/Articles";
import Reviews from "./components/Reviews";
import QRCode from "./components/QRCode";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <main>
        <Presentation />
        <HowItWorks />
        <Articles />
        <Reviews />
        <QRCode />
      </main>
        <Footer />
    </div>
  );
}
