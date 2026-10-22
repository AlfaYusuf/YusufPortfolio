import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { useTheme } from "../context/ThemeContext";

const ExperienceCard = ({ experience, isDark }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: isDark ? "#1d1836" : "#ffffff",
        color: isDark ? "#fff" : "#1d1d1f",
        boxShadow: isDark
          ? "0 3px 0 #915EFF"
          : "0 3px 0 #915EFF, 0 4px 20px rgba(0,0,0,0.1)",
      }}
      contentArrowStyle={{
        borderRight: isDark ? "7px solid #232631" : "7px solid #ffffff"
      }}
      date={experience.date}
      dateClassName={isDark ? "" : "text-gray-700"}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3
          className='text-[24px] font-bold'
          style={{ color: isDark ? "#fff" : "#1d1d1f" }}
        >
          {experience.title}
        </h3>
        <p
          className='text-[16px] font-semibold'
          style={{ margin: 0, color: isDark ? "#aaa6c3" : "#6b6b80" }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-[14px] pl-1 tracking-wider'
            style={{ color: isDark ? "#f3f3f3" : "#333" }}
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline lineColor={isDark ? "#232631" : "#915EFF"}>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              isDark={isDark}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
