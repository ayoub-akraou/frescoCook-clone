import React from "react";

export default function Articles() {
  return (
    <section className="articles">
      <h1 className="articles__title">What to cook first</h1>
      <p className="articles__description">Cook your next meal with Fresco and see how easy it can be to serve your favorites.</p>
      <article className="articles__wrapper">
        <figure className="articles__figure bg-primaryGreen">
          <a href="#link" className="figure__image"><img src="images/recipe-1.webp" alt="recipe"/></a>
          <div className="figure-data"><h3 className="figure__title">Top Rated on Fresco</h3>
          <figcaption className="figure__description">The best of the best</figcaption></div>
        </figure>
        <figure className="articles__figure bg-tyrianPurple">
          <a href="#link" className="figure__image"><img src="images/recipe-2.webp" alt="recipe"/></a>
          <div className="figure-data"><h3 className="figure__title">Instant Pot Pro Plus Recipes You'll Love</h3>
          <figcaption className="figure__description">Sync your Instant Pot and get cooking in a flash.</figcaption></div>
        </figure>
        <figure className="articles__figure bg-primaryTomato">
          <a href="#link" className="figure__image"><img src="images/recipe-3.webp" alt="recipe"/></a>
          <div className="figure-data"><h3 className="figure__title">Eat Fresh with Fresco</h3>
          <figcaption className="figure__description">Clean, lean and ready in a cinch.</figcaption></div>
        </figure>
        <figure className="articles__figure bg-primaryYellow">
          <a href="#link" className="figure__image"><img src="images/recipe-4.webp" alt="recipe"/></a>
          <div className="figure-data"><h3 className="figure__title">Thermomix Family Favorites</h3>
          <figcaption className="figure__description">Delicious, nourishing, and enough to feed the whole family. </figcaption></div>
        </figure>
        <figure className="articles__figure bg-primaryGreen">
          <a href="#link" className="figure__image"><img src="images/recipe-5.webp" alt="recipe"/></a>
          <div className="figure-data"><h3 className="figure__title">Air Fryer Recipes You Need to Try</h3>
          <figcaption className="figure__description">Crispy, crunchy and lower in fat.</figcaption></div>
        </figure>
        <figure className="articles__figure bg-primaryOrange">
          <a href="#link" className="figure__image"><img src="images/recipe-6.webp" alt="recipe"/></a>
          <div className="figure-data"><h3 className="figure__title">Panasonic 4-in-1 Multi Oven Recipes</h3>
          <figcaption className="figure__description">Tried and tested with your 4-in-1 oven in mind.</figcaption></div>
        </figure>
      </article>
      <button className="button bg-tyrianPurple text-floralWhite block mx-auto mt-10 md:mt-16">More Recipes </button>
    </section>
  )
}