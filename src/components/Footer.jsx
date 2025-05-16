import React from "react";
import logoImage from "../assets/more/logo1.png";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    // <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
    // </footer>
    <footer className="md:flex items-center justify-center footer p-10 bg-neutral text-white">
      <aside className="flex-1">
        <img className="w-16" src={logoImage} alt="" />
        <h2 className="text-2xl">Espresso Emporium</h2>
        <p className="w-4/6">
          Always ready to be your friend. Come & Contact with us to share your
          memorable moments, to share with your best companion.
        </p>
        <div className="grid grid-flow-col items-center gap-5 my-5">
          <FaFacebook size={25} />
          <BsInstagram size={25} />
          <FaYoutube size={25} />
          <FaLinkedin size={25} />
        </div>
        <div>
          <h3 className="text-2xl mb-5">Get in Touch</h3>
          <p>+88 01533 333 333</p>
          <p>info@gmail.com</p>
          <p>Location </p>
        </div>
      </aside>
      <nav className="flex-1">
        <h2 className="text-4xl ">Connect with Us</h2>
        <div>
          <fieldset className="fieldset border-base-300 rounded-box w-xs border p-4 text-black">
            <input
              type="text"
              className="input text-black"
              placeholder="User name"
            />
            <input type="email" className="input" placeholder="Email" />
            <input type="email" className="input" placeholder="Email" />

            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
