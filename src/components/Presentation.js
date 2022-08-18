import React from "react";

export default function Presentation() {
  return (
    <section className="presentation">
      <section className="presentation__start-cooking">
        <div className="cnt-1">
          <h1 className="presentation__title">Start cooking in a flash</h1>
          <p className="presentation__description">Whether you’re a new cook or have been cooking for years, we’ll guide you through every recipe. We’re always two steps ahead so that all you have to do is focus on that delicious dish.</p>
          <button className="button">learn more</button>
        </div>
        <div className="start-cooking__animation">
          <div className="start-cooking__img1"></div>
          <div className="start-cooking__img2"></div>
          <div className="start-cooking__img3"></div>
          <div className="start-cooking__img4"></div>
          <div className="start-cooking__light"></div>
          <div className="start-cooking__lighter"></div>
          <div className="start-cooking__dark"></div>
          <div className="start-cooking__darker"></div>
        </div>
      </section>
      <section className="presentation__smart-recipes">
      <div className="smart-recipes__animation">
          <div className="smart-recipes__img1"><img src="images/quarter-plate-1.jpg" alt="quarter plate"/></div>
          <div className="smart-recipes__img2"><img src="images/quarter-plate-2.jpg" alt="quarter plate"/></div>
          <div className="smart-recipes__img3"><img src="images/quarter-plate-3.jpg" alt="quarter plate"/></div>
          <div className="smart-recipes__img4"><img src="images/quarter-plate-4.jpg" alt="quarter plate"/></div>
      </div>
        <div className="cnt-2">
          <h1 className="presentation__title">Smart recipes for smart appliances</h1>
          <p className="presentation__description">Tell us what smart appliances you have in your kitchen and we’ll find the perfect recipes for them. We’ll even set the correct times, temperatures, and settings so you can focus on the food.</p>
          <button className="button">learn more</button>
        </div>
      </section>
      <section className="presentation__favorite-cookbook">
        <div className="cnt-3">
          <h1 className="presentation__title">Make the internet your favorite cookbook</h1>
          <p className="presentation__description">We can take recipes from your favorite websites and give you smart step-by-step instructions. Making a cheesecake for your big celebration? Pasta from your favorite celeb chef? We can do it all, and now, so can you.</p>
          <button className="button">learn more</button>
        </div>
        <div className="favorite-cookbook__animation">
          <div className="favorite-cookbook__img1"><img src="images/plate-1.jpg" alt=" plate"/></div>
          <div className="favorite-cookbook__img2"><img src="images/plate-2.jpg" alt=" plate"/></div>
          <div className="favorite-cookbook__img3"><img src="images/plate-3.jpg" alt=" plate"/></div>
          <div className="favorite-cookbook__img4"><img src="images/plate-4.jpg" alt=" plate"/></div>
          <div className="favorite-cookbook__img5"><img src="images/plate-5.jpg" alt=" plate"/></div>
          <div className="favorite-cookbook__img6"><img src="images/plate-6.jpg" alt=" plate"/></div>
          <div className="favorite-cookbook__img7"><img src="images/plate-7.jpg" alt=" plate"/></div>
          <div className="favorite-cookbook__logo"><img src="images/logo-2.png" alt=" plate"/></div>
      </div>

      </section>
    </section>
  )
}