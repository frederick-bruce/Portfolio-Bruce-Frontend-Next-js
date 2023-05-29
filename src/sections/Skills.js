import React from 'react';
// components
import AnimatedLottie from '../components/Lottie';
import TechSkillIcon from '../components/skills/TechIcon';
import ListItem from '../components/skills/ListItem';
import HeadingAnimate from '../components/animate/HeadingAnimate';
import LoadAnimate from '../components/animate/LoadAnimate';
// mock
import { BACKEND_DESCRIPTIONS, BACKEND_SKILLS, FRONTEND_DESCRIPTIONS, FRONTEND_SKILLS } from '../constants/tech-skills';
import codingAnimationData from '../constants/lottie/coding.json';
import cloudAnimationData from '../constants/lottie/cloudinfra.json';

// ----------------------------------------------------------------------

export default function Skills() {
  return (
    <>
      <section className="container mx-auto mt-16 text-center sm:mt-10">
        <HeadingAnimate>
          <h2 className="mb-5 font-lato text-3xl font-semibold text-primary-700 dark:text-primary-300 sm:text-4xl">
            What i do
          </h2>
        </HeadingAnimate>

        {/* Frontend Development */}
        <LoadAnimate amount={0}>
          <div className="container mx-auto my-5 flex flex-col items-center p-5 md:flex-row">
            <div className="mb-10 md:mb-0 md:w-1/2 lg:w-full lg:max-w-lg">
              <AnimatedLottie animationDataFile={codingAnimationData} />
            </div>
            <div className="flex flex-col items-center text-center md:w-1/2 md:items-start md:pl-16 md:text-left lg:flex-grow lg:pl-24">
              <HeadingAnimate>
                <h1 className="mb-4 text-xl font-semibold tracking-wide text-primary-700 dark:text-primary-300 sm:text-2xl">
                  Frontend Development
                </h1>
              </HeadingAnimate>
              {/* Tech Stack  */}
              <div className="my-3 flex flex-wrap justify-items-center gap-x-4 gap-y-7 text-center sm:gap-x-7">
                {FRONTEND_SKILLS.map(({ label, icon, proficiency, iconClasses }, i) => (
                  <TechSkillIcon
                    key={`frontend-skill-${i}`}
                    popoverId={`frontend-skill-${i}`}
                    icon={icon}
                    iconClasses={iconClasses}
                    label={label}
                    proficiency={proficiency}
                  />
                ))}
              </div>
              {/* Description Part  */}
              <div className="mt-7 w-full space-y-5">
                {FRONTEND_DESCRIPTIONS.map((paragraph, i) => (
                  <ListItem key={`frontend-des-${i}`} paragraph={paragraph} />
                ))}
              </div>
            </div>
          </div>
        </LoadAnimate>
        {/* Backend Development */}
        <LoadAnimate amount={0}>
          <div className="container mx-auto my-5 flex flex-col items-center p-5 md:flex-row">
            <div className="mb-10 w-full md:mb-0 md:w-1/2 lg:w-full lg:max-w-lg">
              <AnimatedLottie animationDataFile={cloudAnimationData} />
            </div>
            <div className="flex flex-col items-center text-center md:w-1/2 md:items-start md:pl-16 md:text-left lg:flex-grow lg:pl-24">
              <HeadingAnimate>
                <h1 className="mb-4 text-xl font-semibold tracking-wide text-primary-700 dark:text-primary-300 sm:text-2xl">
                  Backend Development
                </h1>
              </HeadingAnimate>
              {/* Tech Stack  */}
              <div className="my-3 flex flex-wrap justify-items-center gap-x-4 gap-y-7 text-center sm:gap-x-7">
                {BACKEND_SKILLS.map(({ icon, iconClasses, label, proficiency }, i) => (
                  <TechSkillIcon
                    key={`backend-skill-${i}`}
                    popoverId={`backend-skill-${i}`}
                    icon={icon}
                    iconClasses={iconClasses}
                    label={label}
                    proficiency={proficiency}
                  />
                ))}
              </div>
              {/* Description Part  */}
              <div className="mt-5 w-full space-y-5 sm:mt-7">
                {BACKEND_DESCRIPTIONS.map((paragraph, i) => (
                  <ListItem key={`backend-des-${i}`} paragraph={paragraph} />
                ))}
              </div>
            </div>
          </div>
        </LoadAnimate>

     
      </section>
      <div id="works" />
    </>
  );
}
