import React from "react";

import bnrshap from "../../assets/bnrshap.png"

function HeroContent() {
  return (
    <div className="flex relative flex-col mb-0 max-w-full w-[422px] max-md:mb-2.5">
      <div className="flex flex-col px-10 w-full text-xl font-semibold max-md:px-5 max-md:max-w-full">
        <div className="flex gap-6 items-center">
          <img
            src={bnrshap}
            alt="Decorative element"
            className="object-contain shrink-0 self-stretch my-auto aspect-[3.7] w-[37px]"
          />
          <h2 className="grow shrink self-stretch w-[210px]">
            MAKE BETTER THINGS
          </h2>
          <img
            src={bnrshap}
            alt="Decorative element"
            className="object-contain shrink-0 self-stretch my-auto aspect-[3.7] w-[37px]"
          />
        </div>
      </div>
      <h1 className="mt-3 text-5xl font-extrabold tracking-tighter leading-none text-center max-md:max-w-full max-md:text-4xl">
        PORTO TEMPLATE
      </h1>
      <p className="self-center mt-5 text-xl font-light leading-none text-center">
        Check out our options and features
      </p>
    </div>
  );
}

export default HeroContent;
