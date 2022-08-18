import React from "react";

export default function HowItWorks() {
  return(
    <section className="how-it-works">
      <h1 className="how-it-works__title">How does it work?</h1>
      <p className="how-it-works__description">Whether it’s a quick weeknight dinner or a slow cook sensation, Fresco makes home cooking so easy you’ll want to do it every day.</p>
      <div className="how-it-works__app">
        <div className="ctn">
          <img src="images/app-1.webp" alt="mobile app screenshot"/>
          <div className="app__box">
            <h3 className="app__title before:content-['1']">Pick a recipe.</h3>
            <p className="app__description">Choose a delicious recipe from your favorite blogger or website within the app.</p>
          </div>
        </div>
        <div className="ctn">
          <img src="images/app-2.webp" alt="mobile app screenshot"/>
          <div className="app__box">
            <h3 className="app__title before:content-['2']">Make it yours.</h3>
            <p className="app__description">Web recipes are converted into our smart recipe format, making it effortless to cook at home.</p>
          </div>
        </div>
        <div className="ctn">
          <img src="images/app-3.webp" alt="mobile app screenshot"/>
          <div className="app__box">
            <h3 className="app__title before:content-['3']">Cook it up.</h3>
            <p className="app__description">We send the right instructions to your appliance at the right time so all you have to do is follow the steps and enjoy.</p>
          </div>
        </div>
      </div>
      <div className="how-it-works__brands">
        <h3 className="brands__title ">Fresco works with the world’s leading appliance brands.</h3>
        <div className="brands__wrapper">
          <img src="images/brand-1.webp" alt="brand logo"/>
          <img src="images/brand-2.webp" alt="brand logo"/>
          <img src="images/brand-3.webp" alt="brand logo"/>
          <img src="images/brand-4.webp" alt="brand logo"/>
          <img src="images/brand-5.webp" alt="brand logo"/>
          <img src="images/brand-6.webp" alt="brand logo"/>
          <img className="col-start-3" src="images/brand-7.webp" alt="brand logo"/>
          <img src="images/brand-8.webp" alt="brand logo"/>
        </div>
        <button className="button bg-tyrianPurple text-floralWhite mx-auto block">Partner With Fresco</button>
      </div>
    </section>
  )
}