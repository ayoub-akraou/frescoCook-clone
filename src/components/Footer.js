import React from "react";

export default function Footer() {
  return(
    <footer className="footer">
      <div className="footer__wrapper">
        <img className="main-logo" src="images/logo-1.svg" alt="main logo"/>
        <ul className="footer__links">
          <li><a className="footer__link" href="#link">Mobile App</a></li>
          <li><a className="footer__link" href="#link">Appliances</a></li>
          <li><a className="footer__link" href="#link">Recipes</a></li>
          <li><a className="footer__link" href="#link">Support</a></li>
        </ul>
        <ul className="footer__links">
          <li><a className="footer__link" href="#link">Appliance Partners</a></li>
          <li><a className="footer__link" href="#link">Get Demo</a></li>
          <li><a className="footer__link" href="#link">About Us</a></li>
          <li><a className="footer__link" href="#link">Careers</a></li>
          <li><a className="footer__link" href="#link">Legal</a></li>
        </ul>
        <ul className="footer__links">
          <li className="footer__micro-title">News</li>
          <li><a className="footer__link" href="#link">Security and smart appliances</a></li>
          <li><a className="footer__link" href="#link">Fresco Raises $20 Million Series B</a></li>
          <li><a className="footer__link" href="#link">Drop becomes Fresco</a></li>
        </ul>
        <div className="footer__box">
          <ul className="social-media-links">
            <li><a href="#link"><img src="images/instagram.svg" alt="instagram logo"/></a></li>
            <li><a href="#link"><img src="images/linkedin.svg" alt="linkedin logo"/></a></li>
            <li><a href="#link"><img src="images/twitter.svg" alt="twitter logo"/></a></li>
            <li><a href="#link"><img src="images/facebook.svg" alt="facebook logo"/></a></li>
            <li><a href="#link"><img src="images/pinterest.svg" alt="pinterest logo"/></a></li>
          </ul>

          <form >
            <label className="form__label"> Subscribe to our newsletter</label>
            <div className="form__box">
              <input type="email" placeholder="Your email address"/>
              <button className="form__button">Subscribe</button>
            </div>
          </form>
          <p className="text-lg font-extralight text-end">This field is required</p>
        </div>
      </div>
      <p className="copy-right text-lg sm:text-xl md:text-2xl font-extralight">© copyright 2022</p>
    </footer>
  )
}