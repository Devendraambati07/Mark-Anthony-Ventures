import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaBars,
  FaTimes,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import Logo from "../assets/logo.avif";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { name: "HOME", link:"/"},
    { name: "ABOUT US", link: "/about" },
    { name: "CAREERS", link: "/careers" },
    { name: "SERVICES", link: "/services" },
    { name: "OUR CULTURE", link: "/culture" },
    // { name: "WE ARE THE DIFFERENCES", link: "/difference" },
    { name: "CONTACT US", link: "/contact" },
  ];

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* TOP NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-[999] transition-all duration-500
        ${scrolled ? "bg-black/90 backdrop-blur-lg shadow-lg" : "bg-transparent"}`}
      >
        <div className="md:max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={Logo} alt="Logo" className="w-20" />
          </Link>

          <div className="flex items-center gap-4">
            <FaUser className="text-xl text-[#FFD584]" />
            <FaBars
              className="text-xl text-[#FFD584] cursor-pointer"
              onClick={() => setOpen(true)}
            />
          </div>
        </div>
      </nav>

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-black text-[#FFD584] 
        shadow-xl transition-transform duration-500 ease-out z-[1000]
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between items-center p-6 border-b border-white/20">
          <span></span>
          <FaTimes onClick={() => setOpen(false)} className="text-xl cursor-pointer" />
        </div>

        {/* MENU ITEMS */}
        <ul
          key={open ? "menu-open" : "menu-close"}
          className="flex flex-col gap-5 md:gap-10 px-5 py-5 text-[15px] tracking-wider font-light"
        >
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`
                opacity-0
                animate-menuItem
                animation-delay-${index + 1}00
                hover:text-white 
                transition-all duration-300
                hover:translate-x-2
              `}
            >
              <Link to={item.link} onClick={() => setOpen(false)}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* SOCIAL ICONS */}
        <div className="px-10 mt-10">
          <p className="text-[12px] tracking-widest mb-4">KEEP IN TOUCH</p>

          <div className="flex justify-center items-center gap-4">
            {[FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube].map((Icon, i) => (
              <div
                key={i}
                className="w-10 h-10 border-2 border-[#FFD584] rounded-full flex items-center justify-center 
                transition-all duration-300 hover:scale-110 hover:bg-[#FFD584] hover:text-black"
              >
                <Icon className="text-xl" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
