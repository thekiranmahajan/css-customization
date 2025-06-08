import React from "react";

const Sections = ({ emoji, bgColor }) => {
  return (
    <section
      className={`h-72 w-full flex items-center justify-center text-8xl ${bgColor}`}
    >
      {emoji}
    </section>
  );
};

export default Sections;
