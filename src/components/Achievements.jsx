import { achievements } from "../constants";

const Achievements = () => {
  return (
    <div className='py-16'>
      <h3 className='subhead-text'>Achievements</h3>
      <div className='mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto'>
        {achievements.map((achievement, index) => (
          <div
            key={`achievement-${index}`}
            className='bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300'
          >
            <div className='relative aspect-square w-full overflow-hidden'>
              <img
                src={achievement.image}
                alt={achievement.title}
                className='w-full h-full object-contain transition-transform duration-300 hover:scale-110'
              />
            </div>
            <div className='p-8'>
              <h3 className='text-2xl font-semibold text-gray-800 mb-3'>
                {achievement.title}
              </h3>
              <p className='text-gray-600 mb-4 text-lg'>{achievement.description}</p>
              {achievement.link && (
                <a
                  href={achievement.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300 text-lg'
                >
                  Learn More
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements; 