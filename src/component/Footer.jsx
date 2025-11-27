import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const COMPANY = [
    { name: "HOME", link: "/" },
    { name: "ABOUT US", link: "/about" },
    { name: "CAREERS", link: "/careers" },
    { name: "SERVICES", link: "/services" },
    { name: "OUR CULTURE", link: "/culture" },
    { name: "CONTACT US", link: "/contact" },
  ];

  const Legal = [
    { name: "Terms & Conditions", link: "" },
    { name: "Policy of Us", link: "" },
  ];

  const Religion = [
    { name: "Indian", link: "" },
    { name: "Dubai", link: "" },
  ];

  const Solutions = [
    { name: "CRM", link: "" },
    { name: "Custom Support Agent", link: "" },
  ];

  return (
    <footer className="px-6 pt-12 bg-black text-white">
      {/* TOP GRID */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* COMPANY */}
        <div className="flex flex-col items-start">
          <p className="text-[#FFD584] font-semibold text-xs pb-2">
            COMPANY
          </p>
          {COMPANY.map((item, i) => (
            <Link
              key={i}
              to={item.link}
              className="text-xs  py-1 tracking-[2px] hover:text-[#FFD584] transition"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* LEGAL */}
        <div className="flex flex-col items-start">
          <p className="text-[#FFD584] font-semibold text-xs pb-2">
            LEGAL
          </p>
          {Legal.map((item, i) => (
            <Link
              key={i}
              to={item.link}
              className="text-xs py-1 tracking-[2px]"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* RELIGION */}
        <div className="flex flex-col items-start">
          <p className="text-[#FFD584] font-semibold text-xs pb-2">
            RELIGION
          </p>
          {Religion.map((item, i) => (
            <p
              key={i}
              className="text-xs py-1 tracking-[2px]"
            >
              {item.name}
            </p>
          ))}
        </div>

        {/* SOLUTIONS */}
        <div className="flex flex-col items-start">
          <p className="text-[#FFD584] font-semibold text-xs pb-2">
            SOLUTIONS
          </p>
          {Solutions.map((item, i) => (
            <p
              key={i}
              className="text-xs py-1 tracking-[2px]"
            >
              {item.name}
            </p>
          ))}
        </div>
      </section>

      {/* ABOUT + CONTACT + SOCIAL GRID */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mt-10">
        {/* ABOUT US */}
        <div className="col-span-1 md:col-span-3 text-start space-y-1">
          <p className="font-semibold  text-sm text-[#FFD584]">
            ABOUT US
          </p>
          <p className="text-sm text-[#FFD584] leading-relaxed">
            At Mark Anthony, excellence isn’t a goal — it’s our standard.
            We are redefining real estate brokerage through precision,
            professionalism, and an unwavering commitment to our clients.
            Established in 2022, Mark Anthony has rapidly evolved into one of
            the most distinguished real estate advisory firms in India.
          </p>
        </div>

        {/* CONNECT WITH US */}
        <div className="space-y-3 grid justify-start md:justify-center ">
          <p className="font-medium text-sm tracking-[2px] text-[#FFD584]">
            CONNECT WITH US
          </p>

          <div className="grid justify-start md:justify-center">
            <p className="font-medium text-xs tracking-[2px]">WRITE TO US AT</p>
            <p className="text-[10px] text-start md:text-center">info@markanthony.co.in</p>
          </div>

          <div className="grid justify-start md:justify-center">
            <p className="font-medium text-xs tracking-[2px]">Existing Clients</p>
            <p className="text-[10px] text-start md:text-center ">help@markanthony.co.in</p>
          </div>

          <div className="grid justify-start md:justify-center">
            <p className="font-medium text-xs tracking-[2px]">JOB/CAREER RELATED</p>
            <p className="text-[10px] text-start md:text-center ">hr@markanthony.co.in</p>
          </div>
        </div>

        {/* SOCIAL MEDIA */}
        <div className="flex flex-col justify-start md:justify-center gap-4">
          <p className="text-[#FFD584] font-medium text-sm  text-start md:text-center">KEEP IN TOUCH</p>

          <div className="flex items-center md:justify-center gap-4 text-[#FFD584] text-lg">
            {[FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube].map(
              (Icon, i) => (
                <div
                  key={i}
                  className="w-8 h-8 border-2 border-[#FFD584] rounded-full 
                  flex items-center justify-center hover:bg-[#FFD584] hover:text-black transition"
                >
                  <Icon className="text-lg" />
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
