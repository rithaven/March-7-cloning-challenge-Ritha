import React from "react";
import Link from "next/link";
import FooterLinks from "../UI/FooterLinks";

const Footer = () => {
  return (
    <div className="bg-black p-4">
      <img className="md:h-16 h-6 md:mx-16 mx-6 " src="/footerlogo.png" alt="" />
      <div className="  text-white md:border-b md:border-white md:px-24 px-10">
        <div className="grid md:grid-cols-4 grid-cols-1">
          <FooterLinks title="Education & research" icon="/chevron-right.svg" />
          <FooterLinks title="Education & research" icon="/chevron-right.svg" />
          <FooterLinks title="Education & research" icon="/chevron-right.svg" />
          <FooterLinks title="Education & research" icon="/chevron-right.svg" />
        </div>
      </div>

      <div className="flex justify-between text-white p-6">
        <div className="md:flex gap-2 text-gray-300 flex-col-1">
          <p>Copyright UvA 2023</p>
          <p>About this site</p>
          <p>Privacy </p>
          <p>Cookie settings</p>
        </div>
        <div className="md:flex gap-1 items-center flex-col-1 ">
          <p>Follow UvA on social media</p>
          <div className="flex">
          <img className="h-6" src="/facebook.svg" alt="" />
          <img className="h-6" src="/twitter.svg" alt="" />
          <img className="h-6" src="/linkedin.svg" alt="" />
          <img className="h-6" src="/instagram.svg" alt="" />
          <img className="h-6" src="/whatsapp.svg" alt="" />
          <img className="h-6" src="/play.svg" alt="" />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
