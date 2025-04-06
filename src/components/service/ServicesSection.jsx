import React from "react";
import ServiceCard from "./ServiceCard";

import { CiMobile1 } from "react-icons/ci";
import { IoLayersOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { LuMonitor } from "react-icons/lu";

function ServicesSection() {
  const services = [
    {
      id: 1,
      iconSrc: <CiMobile1 className="text-2xl text-brand " />,
      title: "Mobile Apps",
      description: (
        <>
          Lorem ipsum dolor sit amet,
          <br />
          coctetur adipiscing elit.
        </>
      ),
    },
    {
      id: 2,
      iconSrc:<IoLayersOutline className="text-2xl text-brand " />,
      title: "Creative Websites",
      description: (
        <>
          Lorem ipsum dolor sit amet,
          <br />
          coctetur adipiscing elit.
        </>
      ),
    },
    {
      id: 3,
      iconSrc: <IoIosSearch className="text-2xl text-brand " />,
      title: "SEO Optimization",
      description: (
        <>
          Lorem ipsum dolor sit amet,
          <br />
          coctetur adipiscing elit.
        </>
      ),
    },
    {
      id: 4,
      iconSrc: <LuMonitor className="text-2xl text-brand " />,
      title: "Brand Solutions",
      description: (
        <>
          Lorem ipsum dolor sit amet,
          <br />
          coctetur adipiscing elit.
        </>
      ),
    },
  ];

  return (
    <section className="py-[100px] ">
      <div className="container">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold tracking-tighter leading-none text-center text-primary">
            We Can Help You
          </h2>
          <p className="mt-7 text-2xl tracking-tighter leading-10 text-center text-primary max-md:max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
            <br />
            phasellus blandit massa enim.
          </p>
          <p className="mt-8 text-lg leading-7 text-center text-secondery max-md:max-w-full">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
            blandit massa enim.
            <br />
            Nullam id varius nunc. Vivamos bibendum magna ex.
          </p>
          <div className="self-stretch mt-16 w-full max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className={`w-3/12 ${
                    index > 0 ? "ml-5" : ""
                  } max-md:ml-0 max-md:w-full`}
                >
                  <ServiceCard
                    iconSrc={service.iconSrc}
                    title={service.title}
                    description={service.description}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
