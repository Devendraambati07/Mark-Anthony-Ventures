import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const NotFound = () => {
  return (
    <section className="w-full h-screen bg-black text-[#FFD584] flex flex-col items-center justify-center px-6">

      {/* SEO-Friendly Heading */}
      <h1 className="text-7xl md:text-9xl font-extrabold tracking-widest text-[#FFD584]">
        404
      </h1>

      {/* Subtitle */}
      <p className="mt-4 text-center text-lg md:text-xl tracking-wide text-white/80 max-w-xl">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>

      {/* Underline Decoration */}
      <div className="mt-6 h-1 w-24 bg-[#FFD584] rounded-full"></div>

      {/* Description */}
      <p className="mt-4 text-center max-w-lg text-white/60 leading-relaxed">
        The link you clicked may be broken, or the page may have been removed.
        Please check the URL or return to the homepage.
      </p>

      {/* Button */}
      <Link
        to="/"
        className="mt-8 flex items-center gap-3 bg-[#FFD584] text-black px-6 py-3 rounded-full text-sm font-semibold tracking-wide
        hover:bg-white hover:text-black transition-all duration-300 shadow-lg"
      >
        <FaArrowLeft /> BACK TO HOME
      </Link>

      {/* Footer Branding */}
      <p className="absolute bottom-8 text-sm text-white/30 tracking-widest">
        MARK ANTHONY — REAL ESTATE
      </p>
    </section>
  );
};

export default NotFound;
