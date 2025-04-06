"use client";
import React from "react";
import StatItem from "./StatItem";
import bnrbg from "../../assets/banrbg.jpg"

function CompanyStats() {
  return (
    <section className=" py-20 relative w-full max-sm:px-5 max-sm:py-10 " style={{backgroundImage: `url(${bnrbg})`}}>


      <div className="relative  mr-auto ml-96 max-w-[665px] max-md:mx-5 max-md:max-w-[991px] max-sm:m-0 max-sm:max-w-screen-sm">
        <header>
          <p className="mb-2 text-xs leading-3 text-brand">
            LOREM IPSUM DOLOR SIT
          </p>
          <h2 className="mb-3.5 text-2xl tracking-tighter leading-8 text-neutral-800 max-sm:text-2xl">
            <span>Company in </span>
            <span className="font-extrabold">Numbers</span>
          </h2>
          <p className="mb-9 text-xl font-light tracking-tighter leading-7 max-w-[630px] text-secondery max-sm:text-base">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
            blandit massa enim. Nullam id varius nunc.
          </p>
        </header>
        <button className="px-7 py-3.5 text-xs font-bold leading-4 text-brand rounded border-2 border-brand border-solid cursor-pointer">
          GET STARTED NOW
        </button>
      </div>

      <div className="grid absolute gap-5 grid-cols-[repeat(2,1fr)] right-[390px] top-[74px] max-md:relative max-md:top-auto max-md:right-auto max-md:px-5 max-md:py-0 max-md:mt-10 max-sm:gap-8 max-sm:mt-10 max-sm:grid-cols-[1fr]">
        <StatItem number="200+" description="Satisfied Clients" />
        <StatItem number="300+" description="Pro Consultants" />
        <div className="mt-5 max-md:mt-10">
          <StatItem number="20+" description="Years in Business" />
        </div>
        <div className="mt-5 max-md:mt-10">
          <StatItem number="100+" description="Sucessfull Cases" />
        </div>
      </div>

    </section>
  );
}

export default CompanyStats;
