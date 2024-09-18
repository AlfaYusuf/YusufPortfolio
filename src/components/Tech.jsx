import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28 flex flex-col items-center justify-center' key={technology.name}>
          <BallCanvas icon={technology.icon} />
          <h1 className='mt-2'>{technology.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
