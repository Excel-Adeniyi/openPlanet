import { useState, useEffect } from 'react';
import services from '../../../../data/service_data.json';
export default function Team() {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const intervals = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 30000);
    return () => clearInterval(intervals);
  }, []);
  return (
    <div>
      <div className='bg-blue-200'>
        <div className='mr-10 pr-10 py-24 relative service-container'>
          {services.map((content, index) => (
            <div className='relative' key={index}>
              <div
                className={`service_carousel ${
                  currentIndex === index ? 'active' : ''
                }`}
                aria-hidden={currentIndex !== index}
              >
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                  <div className='bg-white pl-24 rounded-r-full'>
                    <div className='text-black mx-24 service_title mt-10'>
                      Our Services
                      <hr className='mt-4 hairline mb-4' />
                      <div className='grid'>
                        <div
                          className={` ${
                            currentIndex === index
                              ? 'transitions'
                              : 'description_style'
                          }`}
                        >
                          <div className='title-content my-10'>
                            {content.title}
                          </div>
                          <div className='current-font'>
                            {content.description}
                          </div>
                          <div className='current-font'>
                            {content.description1}
                          </div>
                          <button className='background_color_style'>
                            Learn more
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${currentIndex === index ? 'transition' : ''}`}
                  >
                    <img
                      src={content.image || '/default-image.png'}
                      // alt={content.alt || 'Service'}
                      className={`house_style  rounded-lg shadow-xl ${
                        currentIndex === index ? 'transition' : ''
                      }`}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}