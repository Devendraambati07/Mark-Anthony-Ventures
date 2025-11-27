import React, { useRef } from "react";
import img from "../assets/About.avif"
import { ChevronUp, ChevronDown } from "lucide-react";


const Culture = () => {

    const scrollRef = useRef(null);

    const scrollUp = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                top: -100,
                behavior: "smooth",
            });
        }
    };

    const scrollDown = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                top: 100,
                behavior: "smooth",
            });
        }
    };

    return (
        <section className="bg-black  w-full p-4  text-[#EFD8AC] h-full md:h-screen 2xl:h-full">
            <div className=" relative flex justify-center items-center mt-8 md:mt-[-40px] ">
                <img src={img} alt="" className=" h-40 md:h-full w-full " />
                <p className="text-[#EFD8AC] font-medium text-3xl absolute bottom-2/4 left-1/4 ">OUR PHILOSOPHY</p>
            </div>
            <div className="relative  flex justify-center items-start mt-6 ">
                <div className="absolute -right-3 md:right-2 bottom-[40%] md:bottom-2 flex flex-col gap-4 z-10 text-[#FFD584] ">
                    <button onClick={scrollUp} className="p-2 rounded-full transition">
                        <ChevronUp size={22} /></button>
                    <button onClick={scrollDown} className="p-2 rounded-full transition">
                        <ChevronDown size={22} />
                    </button>
                </div>
                <div
                    ref={scrollRef}
                    className="
            max-w-5xl 
            font-normal 
            text-sm 
            tracking-[1px] 
            text-white 
            h-[300px] md:h-[200px] 
            overflow-hidden 
            overflow-y-scroll
            pr-6
            scroll-smooth
            [scrollbar-width:none]
            [-ms-overflow-style:none]
          "
                    style={{
                        scrollbarWidth: "none",
                    }}
                >
                    <style>
                        {`
              div::-webkit-scrollbar {
                display: none;
              }
            `}
                    </style>
                    <p className="max-w-5xl font-normal text-sm text-white">
                        <strong className="text-[#EFD8AC] ">Building Relationships Beyond Real Estate</strong>
                        <br /><br />
                        We are not just brokers - we are trusted advisors. Our philosophy rests on three unshakable pillars: Truth, Trust, and Transparency. These values guide every interaction, every negotiation, and every decision we make.
                        <br /><br />
                        Truth - We tell it as it is. Integrity and accuracy form the foundation of every transaction. - Trust - We understand that real estate is personal. We earn our clients’ confidence through consistency and results.
                        <br /><br />
                        - Transparency - Clarity is power. We ensure every client is informed, empowered, and confident throughout their property journey.
                        <br /><br />
                        “Working with Mark Anthony changed everything — they didn’t just find us a home, they helped us realize a dream.”
                        <br /><br />
                        Our culture celebrates passion, precision, and partnership - where each consultant is empowered to act as a true ambassador of the brand, delivering not just service, but significance.

                    </p>
                </div> 
            </div>
            <h1 className="bottom-0 left-0 w-full text-center poppins-bold tracking-[2px] text-[#FFD584] text-5xl md:text-8xl bg-black/90 py-4">
                MARK ANTHONY
            </h1>


        </section >
    )
}

export default Culture; 