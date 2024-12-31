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
      <div className='font-cormorant text-center text-white lg:pt-10 pt-4 text-xl'>
        OUR TEAM
      </div>
      <div className='text-center lg:text-4xl text-2xl font-cormorantBold my-4 py-2'>
        Visionaries, Innovators & Achievers
      </div>
      <div className='lg:mr-2 lg:pr-2 lg:py-24 relative service-containers py-10 overflow-hidden'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
        <div className='lg:hidden flex w-screen  items-center  justify-center'>
            {team.map((content, index) => (
              <>
                {
                  content.image && <div className='my-10'><img
                    key={index}
               
                    src={content.image || '/default-image.png'}
                    alt={content.name || 'Service Image'}
                    className={` rounded-lg ${
                      index === currentIndex ? 'block px-2 image-hie' : 'hidden'
                    }`}
                  />
                  </div>
                }
              </>
            ))}
          </div>
          {/* Text Content */}
          <div className='w-screen px-1'>
            {team.map((content, index) => (
              <div
                key={index}
                className={`text-content ${
                  currentIndex === index ? 'active' : 'hidden'
                }`}
              >
                <div className='bg-slate-200 lg:block hidden text-container lg:pl-24 h-full pb-10 lg:py-5 py-2 px-4 lg:px-25 lg:mx-25 '>
                  
                  <div className='text-black lg:mx-24 service_title mt-10 '>
                    <div className='w-10/12'>
                      <h3 className='title-content mt-10 mb-3'>{content.name}</h3>
                      <h3 className='font-cormorant text-red-700 mb-10'>{content.position}</h3>
                      <p className='current-font'>{content.description1}</p>
                      <p className='current-font'>{content.desctiption2}</p>
                      <p className='current-font'>{content.description3}</p>
                    </div>
                  </div>
                </div>

                <div className='bg-slate-200 w-screen lg:hidden block py-10 height-container'>
                  
                  <div className='text-black mt-10 px-4 mx-1 '>
                    <div className=''>
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
          <div className='lg:flex hidden py-2  items-center justify-end'>
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
