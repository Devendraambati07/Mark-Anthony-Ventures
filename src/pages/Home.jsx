import React, { useEffect, useState } from "react";
import banner from "../assets/banner.avif";
import banner1 from "../assets/banner1.avif";
import banner2 from "../assets/banner2.avif";
import banner3 from "../assets/banner3.avif";

const images = [banner, banner1, banner2, banner3];

const Home = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);

  }, []);

  return (
    <main className="relative w-full h-screen 2xl:h-[800px] overflow-hidden">
      {images.map((img, i) => (
        <img key={i}
          src={img}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 
              ${i === index ? "opacity-100" : "opacity-0"}
            `}
        />))}

      <h1 className="absolute bottom-0 left-0 w-full  text-center poppins-bold tracking-[2px] text-[#FFD584] text-6xl md:text-8xl bg-black/40 py-1.5">
        MARK ANTHONY
      </h1>
    </main>
  );
};

export default Home;
