import './styles/style.css';
import { useState, useEffect } from 'react';
import services from '../../../../data/service_data.json';
import useInteractor from '../../../../hooks/useInteractor';
export default function OurServices() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const {serviceImageRef} = useInteractor()
  useEffect(() => {
    const intervals = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 30000);
    return () => clearInterval(intervals);
  }, []);
  return (
    <div className='bg-blue-200 w-screen'>
      <div className='lg:mx-24 lg:pr-2 mx-5 lg:px-24 lg:py-24 relative service-container'>
        {services.map((content, index) => (
          <div className='relative' key={index}>
            <div
              className={`service_carousel ${
                currentIndex === index ? 'active' : ''
              }`}
              aria-hidden={currentIndex !== index}
            >
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>   
                <div  data-aos='fade-up'
                  className={`${serviceImageRef ? 'in-view' : ""} image_transition ${currentIndex === index ? 'transition' : ''} overflow-hidden w-screen`}
                >
                  <img
                    src={content.image || '/default-image.png'}
                    // alt={content.alt || 'Service'}
                   
                    className={`house_style  rounded-lg shadow-xl overflow-hidden ${
                      currentIndex === index ? 'transition' : ''
                    }`}
                  />
                </div>
                <div >
                  <div className={`text-black service_title lg:mt-10 image_transition ${serviceImageRef ? 'in-view' : ""}`}>
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
                        <div className='title-content my-10'>{content.title}</div>
                        <div className='current-font'>
                          {content.description}
                        </div>
                        <div className='current-font'>
                          {content.description1}
                        </div>
                        <button className='background_color_style'>Learn more</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
