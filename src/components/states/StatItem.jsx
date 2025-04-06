import React from "react";

function StatItem({ number, description }) {
  return (
    <div className="text-center">
      <div className="text-5xl font-extrabold leading-[60px] text-neutral-700">
        {number}
      </div>
      <div className="text-base leading-6 opacity-80 text-neutral-700">
        {description}
      </div>
    </div>
  );
}

export default StatItem;
