import React, { useRef } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import img from "../assets/About.avif";

const About = () => {
    const scrollRef = useRef(null);

    // Scroll Up
    const scrollUp = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                top: -100,
                behavior: "smooth",
            });
        }
    };

    // Scroll Down
    const scrollDown = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                top: 100,
                behavior: "smooth",
            });
        }
    };

    return (
        <section className="bg-black text-white w-full p-4">

            <div className="relative flex justify-center items-center mt-8 md:mt-[-40px]">
                <img src={img} alt="" className="h-40 md:h-full w-full" />
                <p className="font-medium text-3xl absolute text-[#EFD8AC] bottom-2/4 left-1/4">
                    ABOUT US
                </p>
            </div>

            <div className="relative flex justify-center items-start mt-6">

                <div className="absolute -right-3 md:right-2 bottom-[40%] md:bottom-2 flex flex-col gap-4 z-10 text-[#FFD584]">
                    <button
                        onClick={scrollUp}
                        className="p-2 rounded-full  transition"
                    >
                        <ChevronUp size={22} />
                    </button>

                    <button
                        onClick={scrollDown}
                        className="p-2 rounded-full transition"
                    >
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

                    <p>
                        <strong className="text-[#EFD8AC]">
                            The Gold Standard in Real Estate Brokerage
                        </strong>
                        <br /><br />
                        At Mark Anthony, excellence isn’t a goal — it’s our standard. We are
                        redefining real estate brokerage through precision, professionalism,
                        and an unwavering commitment to our clients.
                        <br /><br />
                        Established in 2022, Mark Anthony has rapidly evolved into one of the
                        most distinguished real estate advisory and brokerage firms in India —
                        a benchmark of trust and performance in an ever-evolving market.
                        <br /><br />
                        Our clients choose us not merely for our results, but for our approach —
                        refined, transparent, and always centered on them. From prime residential
                        homes to high-value commercial investments, every transaction we manage
                        is executed with expertise, integrity, and discretion.
                        <br /><br />
                        “Working with Mark Anthony changed everything — they didn’t just find
                        us a home, they helped us realize a dream.”
                        <br /><br />
                        At Mark Anthony, every relationship is built on lasting values and
                        sustained through results that speak for themselves.
                    </p>

                </div>
            </div>

            <h1 className="bottom-0 left-0 w-full text-center poppins-bold tracking-[2px] text-[#FFD584] text-5xl md:text-8xl bg-black/90 py-4">
                MARK ANTHONY
            </h1>
        </section>
    );
};

export default About;
