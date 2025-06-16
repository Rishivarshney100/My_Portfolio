import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { experiences, skills, education } from "../constants";
import Achievements from "../components/Achievements";

import "react-vertical-timeline-component/style.min.css";
import "../styles/timeline.css";

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text animate-fade-in'>
        Hello, I'm{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          Rishi Varshney
        </span>{" "}
        👋
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500 animate-slide-up'>
        <p className='section-text text-lg leading-relaxed'>
          A Final year student, really into tech—especially stuff like AI, IoT, and NLP. I've worked on projects like Query Wizard and smart fashion tech, and I love building things that solve real-world problems. Right now, I'm exploring everything from machine learning models to web dev and trying to put together a solid portfolio. Always up for learning new stuff and experimenting with cool ideas!
        </p>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Education</h3>
        <div className='mt-12 flex'>
          <VerticalTimeline>
            {education.map((edu, index) => (
              <VerticalTimelineElement
                key={edu.company_name}
                date={edu.date}
                dateClassName="vertical-timeline-element-date"
                iconStyle={{ background: edu.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full rounded-full overflow-hidden transition-transform duration-300 hover:scale-110'>
                    {edu.icon && (
                      <img
                        src={edu.icon}
                        alt={edu.company_name}
                        className='w-full h-full object-cover'
                      />
                    )}
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: edu.iconBg,
                  boxShadow: "none",
                  transition: "all 0.3s ease",
                }}
                contentArrowStyle={{
                  borderRight: `7px solid ${edu.iconBg}`,
                }}
                className="hover:scale-[1.02] transition-transform duration-300"
              >
                <div>
                  <h3 className='section-title'>
                    {edu.title}
                  </h3>
                  <p
                    className='section-subtitle'
                    style={{ margin: 0 }}
                  >
                    {edu.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {edu.points.map((point, index) => (
                    <li
                      key={`education-point-${index}`}
                      className='section-points pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20 group' key={skill.name}>
              <div className='btn-back rounded-xl transition-all duration-300 group-hover:scale-110' />
              <div className='btn-front rounded-xl flex justify-center items-center flex-col transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain transition-transform duration-300 group-hover:scale-110'
                />
                <p className='skill-name text-sm text-center mt-2'>{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p className='section-text text-lg leading-relaxed'>
            I've worked with all sorts of companies, leveling up my skills and
            teaming up with smart people. Here's the rundown:
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                dateClassName="vertical-timeline-element-date"
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full rounded-full overflow-hidden transition-transform duration-300 hover:scale-110'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-full h-full object-cover'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                  transition: "all 0.3s ease",
                }}
                contentArrowStyle={{
                  borderRight: `7px solid ${experience.iconBg}`,
                }}
                className="hover:scale-[1.02] transition-transform duration-300"
              >
                <div>
                  <h3 className='section-title'>
                    {experience.title}
                  </h3>
                  <p
                    className='section-subtitle'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='section-points pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <Achievements />

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default About;
