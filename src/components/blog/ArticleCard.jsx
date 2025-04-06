import React from "react";
import { IoIosArrowForward } from "react-icons/io";

function ArticleCard({ imageUrl, category, title, description }) {
  return (
    <article className="flex flex-col items-center w-[356px] max-md:w-[calc(50%_-_12px)] max-sm:w-full">
      <div className="overflow-hidden w-full h-[250px]">
        <img
          src={imageUrl}
          className="object-cover size-full"
          alt="Blog post image"
        />
      </div>
      <div className="flex flex-col gap-3 px-3 py-8 w-full">
        <span className="text-xs leading-7 text-brand">{category}</span>
        <h2 className="text-xl font-semibold leading-7 text-primary">
          {title}
        </h2>
        <p className="text-sm leading-7 opacity-70 text-primary">
          {description}
        </p>
        <a
          href="#"
          className="flex gap-2 items-center px-0 pt-1 pb-1.5 text-xs font-semibold leading-7 text-brand cursor-pointer"
          aria-label="View more details"
        >
          <span>VIEW MORE</span>
          <IoIosArrowForward />
        </a>
      </div>
    </article>
  );
}

export default ArticleCard;
