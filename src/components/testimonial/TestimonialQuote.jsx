import React from "react";
import QuoteContent from "./QuoteContent";
import client1 from "../../assets/client-1.jpg"

function TestimonialQuote() {
  return (
    <section
      className="flex flex-col justify-center items-center px-5 py-20 w-full bg-zinc-100 min-h-[446px]"
      aria-label="Testimonial"
    >
      <div className="flex flex-col items-center w-full max-w-[926px]">
        <img
          src={client1}
          alt="Testimonial author"
          className="w-[60px] h-[60px] rounded-[30px] mb-[15px]"
        />

        <QuoteContent text="Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma - which is living with the results of other people's thinking. Don't let the noise of others' opinions drown out your own inner voice." />

        <div className="mt-16 text-xs font-extrabold opacity-90 text-neutral-900">
          -Steve Jobs. Apple
        </div>
      </div>
    </section>
  );
}

export default TestimonialQuote;
