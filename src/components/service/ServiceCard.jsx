import React from "react";

function ServiceCard({ iconSrc, title, description }) {
  return (
    <article className="flex flex-col grow items-center text-center max-md:mt-10">
        {iconSrc}
      <h3 className="mt-5 text-lg font-bold tracking-tighter leading-none text-neutral-800">
        {title}
      </h3>
      <p className="self-stretch mt-6 text-sm leading-7 text-neutral-500">
        {description}
      </p>
    </article>
  );
}

export default ServiceCard;
