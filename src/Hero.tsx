import { Star } from "lucide-react";
import backgroundImage from "./assets/background 1.png";


export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#E6E0D4] px-6 pt-6"
    >
      {/* MAIN CONTAINER */}
      <div className="mx-auto max-w-7xl rounded-[38px] bg-[#E6E0D4] px-10 py-8 shadow-xl overflow-visible">

        

        {/* HERO SECTION (SCALED 150%) */}
        <div className="scale-[1.0] origin-top mt-10 flex items-start justify-between">

          {/* LEFT SIDE */}
          <div className="flex w-1/2 flex-col">

            {/* MAIN TITLE */}
            <h1 className="text-right text-[8.4rem] font-bold leading-none text-[#6A4A33]">
              Solommour
            </h1>

            {/* CENTER CONTENT */}
            <div className="mt-6 flex flex-col items-center text-center">

              <div className="leading-none">

                <h2 className="text-[4.8rem] font-semibold text-[#6A4A33]">
                  Sweet Potato
                </h2>

                <h2 className="mt-1 text-[4.8rem] italic font-semibold text-[#6A4A33]">
                  Macaroons
                </h2>

                <h2 className="mt-3 text-[4.2rem] italic text-[#D8A24C]">
                  <span className="text-[#6A4A33]">&</span> More
                </h2>

              </div>

              {/* DESCRIPTION */}
              <p className="mt-10 max-w-[520px] text-center text-lg leading-9 text-[#6A4A33]/80">
                Artisan macaroons made from the finest kamote —
                earthy, naturally sweet, and unlike anything you've tasted.
              </p>
<br></br>
              {/* BUTTONS */}
              <div className="mt-10 flex items-center justify-center gap-10">
                <button className="rounded-[16px] bg-[#E8C89B] px-8 py-4 text-sm font-semibold text-[#6A4A33] shadow-md transition hover:scale-105">
                  ORDER NOW
                </button>{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}
                <button className="rounded-[16px] bg-white px-8 py-4 text-sm font-semibold text-[#6A4A33] shadow-sm transition hover:scale-105">
                  OUR STORY
                </button>
              </div>
<br></br>
  {/* STATS */}
              <div className="mt-16 flex items-center justify-center gap-12 text-[#6A4A33]">
                <div>
                  <h3 className="text-2xl font-bold">5 FLAVORS {"\u00A0"}{"\u00A0"} 100% NATURAL{"\u00A0"}{"\u00A0"}<Star size={20} className="fill-yellow-500 text-yellow-500" /> 4.9 RATING</h3>
                
                  
                 
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex w-1/2 items-start justify-start">
            <img
              src={backgroundImage}
              alt="Solommour"
              className="w-full max-w-[650px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}