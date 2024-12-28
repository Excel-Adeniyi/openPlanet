import { useState, useEffect } from 'react';
import team from '../../../../data/team_data.json';
import './style/style.css';

export default function Team() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % team.length);
    }, 15000); // Change slides every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='team-container'>
      <div className='font-cormorant text-center text-white pt-10 text-xl'>
        OUR TEAM
      </div>
      <div className='text-center text-4xl font-cormorantBold my-4'>
        Visionaries, Innovators & Achievers
      </div>
      <div className='mr-10 pr-10 py-24 relative service-container'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {/* Text Content */}
          <div>
            {team.map((content, index) => (
              <div
                key={index}
                className={`text-content ${
                  currentIndex === index ? 'active' : 'hidden'
                }`}
              >
                <div className='bg-slate-200 text-container pl-24 pb-10 py-5 px-25 mx-25 '>
                  <div className='text-black mx-24 service_title mt-10'>
                    <div className='w-10/12'>
                      <h3 className='title-content mt-10 mb-3'>{content.name}</h3>
                      <h3 className='font-cormorant text-red-700 mb-10'>{content.position}</h3>
                      <p className='current-font'>{content.description1}</p>
                      <p className='current-font'>{content.desctiption2}</p>
                      <p className='current-font'>{content.description3}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Image Carousel */}
          <div className='carousel-images flex items-center justify-center'>
            {team.map((content, index) => (
              <>
                {
                  content.image && <img
                    key={index}
                    src={content.image || '/default-image.png'}
                    alt={content.name || 'Service Image'}
                    className={`c_image rounded-lg ${
                      index === currentIndex ? 'image-focused' : 'image-blurred'
                    }`}
                  />
                }
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
