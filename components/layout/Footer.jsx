import React from "react";
import Link from "next/link";
import FooterLinks from "../UI/FooterLinks";

const Footer = () => {
  return (
    <div className="bg-black p-4">
       <img className="h-16 mx-16 " src="/footerlogo.png" alt="" />
    <div className="  text-white border-b border-white px-24">
      <div className="grid grid-cols-4">
        <FooterLinks title="Education & research" icon="/chevron-right.svg" />
        <FooterLinks title="Education & research" icon="/chevron-right.svg" />
        <FooterLinks title="Education & research" icon="/chevron-right.svg" />
        <FooterLinks title="Education & research" icon="/chevron-right.svg" />
      </div>

    </div>
    
    <div className="flex justify-between text-white p-6">
     <div className="flex gap-2">
      <p>Copyright UvA 2023</p>
      <p>About this site</p>
      <p>Privacy </p>
      <p>Cookie settings</p>
     </div>
     <div className="flex gap-2 ">
       <p>Follow UvA on social media</p>
       <img className="h-6" src="/facebook.svg" alt="" />
       <img className="h-6" src="/twitter.svg" alt="" />
       <img className="h-6" src="/linkedin.svg" alt="" />
       <img className="h-6" src="/instagram.svg" alt="" />
       <img className="h-6" src="/play.svg" alt="" />
     </div>
    </div>
    </div>
  );
};

export default Footer;
