import { Link } from "react-router-dom";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text project-header'>
        My{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Projects
        </span>
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed project-intro'>
        I've embarked on numerous projects throughout the years, but these are
        the ones I hold closest to my heart. Many of them are open-source, so if
        you come across something that piques your interest, feel free to
        explore the codebase and contribute your ideas for further enhancements.
        Your collaboration is highly valued!
      </p>

      <div className='mt-20 flex'>
        <VerticalTimeline lineColor='#0061ff'>
          {projects.map((project, index) => (
            <VerticalTimelineElement
              key={project.name}
              className="vertical-timeline-element"
              contentStyle={{
                background: 'white',
                color: '#000',
                boxShadow: '0 3px 0 #d4d4d4',
                borderRadius: '15px',
                border: '1px solid #e5e7eb',
                padding: '2rem',
              }}
              contentArrowStyle={{
                borderRight: '7px solid white',
              }}
              iconStyle={{
                background: project.theme === 'btn-back-blue' ? '#0061ff' :
                          project.theme === 'btn-back-green' ? '#11d3f3' :
                          project.theme === 'btn-back-yellow' ? '#f7971e' :
                          project.theme === 'btn-back-red' ? '#ff4b1f' :
                          project.theme === 'btn-back-pink' ? '#e81cff' :
                          project.theme === 'btn-back-black' ? '#0a1647' : '#2b77e7',
                boxShadow: '0 0 0 4px white, 0 0 0 8px #e5e7eb',
              }}
              icon={
                <div className='flex justify-center items-center w-full h-full'>
                  <img
                    src={project.iconUrl}
                    alt={project.name}
                    className='w-1/2 h-1/2 object-contain'
                  />
                </div>
              }
            >
              <div className='project-timeline-content'>
                <h3 className='project-title text-2xl font-poppins font-semibold'>
                  {project.name}
                </h3>
                <p className='project-description mt-2 text-slate-600'>{project.description}</p>
                <div className='mt-5 flex items-center gap-2 font-poppins'>
                  <Link
                    to={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='project-link font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-300'
                  >
                    Live Link
                  </Link>
                  <img
                    src={arrow}
                    alt='arrow'
                    className='project-arrow w-4 h-4 object-contain'
                  />
                </div>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default Projects;
