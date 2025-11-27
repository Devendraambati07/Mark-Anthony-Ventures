import React from "react";
import careerImg from "../assets/About.avif"; // Add your banner image

const Career = () => {
  const openings = [
    {
      title: "Frontend Developer",
      type: "Full Time",
      location: "Bangaluru, India",
    },
    {
      title: "UI/UX Designer",
      type: "Full Time",
      location: "Bangaluru, India",
    },
    {
  title: "Back-End Developer",
  type: "Full Time",
  location: "Bangaluru, India",
},
    {
      title: "Sales Executive",
      type: "Full Time",
      location: "Bangaluru, India",
    },
        {
      title: "Per-Sales Executive",
      type: "Full Time",
      location: "Bangaluru, India",
    },
            {
      title: "Data Entry",
      type: "Full Time",
      location: "Bangaluru, India",
    },
  ];

  return (
    <section className="bg-black text-white">
      {/* HERO SECTION */}
      <div className="relative flex justify-center items-center">
        <img
          src={careerImg}
          alt="Career Banner"
          className="w-full h-60 md:max-h-[70vh] object-cover opacity-80"
        />
        <h1 className="absolute text-xl md:text-6xl font-bold poppins-bold text-[#FFD584] tracking-[4px]">
          CAREERS AT MARK ANTHONY
        </h1>
      </div>

      {/* ABOUT CAREERS */}
      <div className="max-w-6xl mx-auto px-6 py-16 text-[#EFD8AC]">
        <h2 className="text-xl md:text-4xl font-semibold mb-6">
          Be a Part of Excellence
        </h2>
        <p className="text-sm leading-relaxed text-white">
          At Mark Anthony, we don’t just hire employees — we build leaders.
          Our culture values innovation, ownership, and a relentless pursuit
          of excellence. If you’re ambitious, passionate, and ready to grow,
          you’ll fit right in.
          <br /><br />
          Join a team where your ideas matter, your work is recognized, and your
          growth is a priority. Together, we move forward.
        </p>
      </div>

      {/* OPEN POSITIONS */}
      <div className="max-w-6xl mx-auto px-6 md:py-16">
        <h2 className="text-xl md:text-4xl text-[#FFD584] font-semibold mb-8">
          Current Openings
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {openings.map((job, index) => (
            <div
              key={index}
              className="border border-[#FFD584] rounded-xl p-6 bg-black/40 hover:bg-black/70
              transition-all duration-300 shadow-lg"
            >
              <h3 className="text-base font-semibold text-[#FFD584]">
                {job.title}
              </h3>
              <p className="text-xs text-[#EFD8AC] mt-2">{job.type}</p>
              <p className="text-xs text-[#EFD8AC]">{job.location}</p>

              <button className="mt-6 px-5 py-2 text-base rounded-lg border border-[#FFD584] text-[#FFD584]
                hover:bg-[#FFD584] hover:text-black transition-all">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* WHY JOIN US */}
      <div className="max-w-6xl mx-auto px-6 py-16 text-[#EFD8AC]">
        <h2 className="text-xl md:text-4xl font-semibold mb-14">Why Work With Us?</h2>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base leading-relaxed">
          <li className="bg-black/40 p-6 border border-[#FFD584] rounded-xl">
            ⭐ Professional growth & leadership opportunities
          </li>
          <li className="bg-black/40 p-6 border border-[#FFD584] rounded-xl">
            ⭐ Work with elite real estate experts
          </li>
          <li className="bg-black/40 p-6 border border-[#FFD584] rounded-xl">
            ⭐ Transparent work culture & high-performance environment
          </li>
          <li className="bg-black/40 p-6 border border-[#FFD584] rounded-xl">
            ⭐ Competitive salary & reward programs
          </li>
        </ul>
      </div>

      {/* CTA SECTION */}
      <div className="text-center pb-18  md:py-16 bg-black/80">
        <h2 className="text-xl md:text-4xl font-semibold text-[#FFD584]">
          Want to Work With Us?
        </h2>
        <p className="text-[#EFD8AC] text-base mt-2 mb-6">
          Send us your resume and our HR team will contact you.
        </p>

        <a
          href="mailto:career@markanthony.co.in"
          className="px-8 py-3 border border-[#FFD584] text-[#FFD584] rounded-lg
          hover:bg-[#FFD584] hover:text-black transition-all"
        >
          Send Resume
        </a>
      </div>
    </section>
  );
};

export default Career;
