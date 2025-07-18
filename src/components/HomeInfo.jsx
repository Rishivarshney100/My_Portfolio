import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 3)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5 transition-all duration-700 ease-in-out transform translate-y-0 opacity-100 hover:translate-y-[-10px]'>
        Hi, I'm
        <span className='font-semibold mx-2 text-white'>Rishi Varshney</span>
        👋
        <br />
        SDE [PDMS - DPM - Engineering] Intern At Autodesk ɪɴ
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box transition-all duration-700 ease-in-out transform translate-y-0 opacity-100 hover:translate-y-[-10px]'>
        <p className='font-medium sm:text-xl text-center text-white'>
          Worked with many companies <br /> and picked up many skills along the way
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn text-white'>
          Learn more
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 1) {
    return (
      <div className='info-box transition-all duration-700 ease-in-out transform translate-y-0 opacity-100 hover:translate-y-[-10px]'>
        <p className='font-medium text-center sm:text-xl text-white'>
          Led multiple projects to success over the years. <br /> Curious about the impact?
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn text-white'>
          Visit my projects
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    console.log('Current Stage:', currentStage);
    return (
      <div className='info-box transition-all duration-700 ease-in-out transform translate-y-0 opacity-100 hover:translate-y-[-10px]'>
        <p className='font-medium sm:text-xl text-center text-white'>
          Want to contact or hire me? <br/> I'm just a few keystrokes away
        </p>
        <Link to='/contact' className='neo-brutalism-white neo-btn text-white'>
          Let's talk
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  return null;
};

export default HomeInfo;
