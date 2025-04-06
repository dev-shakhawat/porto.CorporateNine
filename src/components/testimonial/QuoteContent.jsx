import React from "react";

function QuoteContent({ text }) {
  return (
    <div className="flex relative flex-col items-center mt-10 w-full">
      <blockquote className="relative">
        <span
          className="absolute top-0 left-2.5 text-7xl text-neutral-800"
          aria-hidden="true"
        >
          &quot;
        </span>
        <p className="px-16 text-xl leading-8 text-center max-w-[797px] text-neutral-800 max-md:text-xl max-md:leading-7 max-sm:px-10 max-sm:text-lg max-sm:leading-6">
          {text}
        </p>
        <span
          className="absolute right-2.5 text-7xl bottom-[-60px] text-neutral-800"
          aria-hidden="true"
        >
          &quot;
        </span>
      </blockquote>
    </div>
  );
}

export default QuoteContent;
