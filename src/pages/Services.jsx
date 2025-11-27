import React, { useRef } from "react";
import img from "../assets/SERVICES.avif"
import { ChevronUp, ChevronDown } from "lucide-react";


const Services = () => {

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
                
        <section className="bg-black w-full p-4  text-[#FFD584] h-full md:h-screen 2xl:h-full ">
            <div className=" relative grid grid-cols-2 justify-center items-center mt-8 md:mt-[-40px] ">
                <div className="flex justify-center">
                    <img src={img} alt="" className=" w-96 h-48 md:h-68 " />
                </div>
                <div>
                    <p className="text-[#FFD584] font-medium text-3xl  ">OUR SERVICES</p>
                </div>
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
                    <strong className="text-sm text-[#FFD584]">Comprehensive Real Estate Expertise. Unmatched Excellence.</strong>
                    <br /><br />
                    At Mark Anthony, we offer a full suite of real estate brokerage and consulting services - seamlessly integrating local market intelligence with international best practices. Our goal is to deliver exceptional results across every segment of the property market.                    <br /><br />
                    Truth - We tell it as it is. Integrity and accuracy form the foundation of every transaction. - Trust - We understand that real estate is personal. We earn our clients’ confidence through consistency and results.
                    <br /><br />
                    1. Residential Sales & Leasing
                    <br /><br />
                    From luxury villas and penthouses to premium apartments and exclusive residences, we specialize in connecting discerning buyers and tenants with properties that reflect their lifestyle, values, and aspirations.
                    <br /><br />
                    Our deep understanding of market trends allows us to secure the best value — whether you’re buying, selling, or leasing.
                </p>
                
</div>
            </div>

            <h1 className="bottom-0 left-0 w-full text-center poppins-bold tracking-[2px] text-[#FFD584] text-5xl md:text-8xl bg-black/90 py-4">
                MARK ANTHONY
            </h1>

        </section >
    )
}

export default Services;