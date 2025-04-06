import React from "react";
import HeroContent from "./HeroContent";
import bngbg from  "../../assets/banrbg.jpg"

function HeroSection() {
  return (
    <section className="text-neutral-800">
      <div className="flex overflow-hidden relative flex-col justify-center items-center px-20 py-72 w-full min-h-[700px] max-md:px-5 max-md:py-24 max-md:max-w-full">
        <img
          src={bngbg}
          alt="Background image"
          className="object-cover absolute inset-0 size-full"
        />
        <HeroContent />
      </div>
    </section>
  );
}

export default HeroSection;
