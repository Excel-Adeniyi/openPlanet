import './styles/style.css';
import { useState, useEffect } from 'react';
import services from '../../../../data/service_data.json';
import useInteractor from '../../../../hooks/useInteractor';
import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from 'react-icons/io';
import { FaDotCircle } from 'react-icons/fa';
export default function OurServices() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { serviceImageRef } = useInteractor();
  useEffect(() => {
    const intervals = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 30000);
    return () => clearInterval(intervals);
  }, []);
  const nextView = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };
  const prevView = () => {
    if (currentIndex !== 0) {
      setCurrentIndex((prevIndex) => (prevIndex - 1) % services.length);
    }
  };
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
                <div
                  data-aos='fade-up'
                  className={`${
                    serviceImageRef ? 'in-view' : ''
                  } image_transition ${
                    currentIndex === index ? 'transition' : ''
                  } overflow-hidden w-screen`}
                >
                  <img
                    src={content.image || '/default-image.png'}
                    // alt={content.alt || 'Service'}

                    className={`house_style  rounded-lg shadow-xl overflow-hidden ${
                      currentIndex === index ? 'transition' : ''
                    }`}
                  />
                </div>
                <div>
                  <div
                    className={`text-black service_title lg:mt-10 image_transition ${
                      serviceImageRef ? 'in-view' : ''
                    }`}
                  >
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
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='bg-transparent mx-4 flex justify-between'>
        <button
          className='bg-transparent outline-none focus:outline-none hover:outline-none hover:text-red-400 focus:text-red-400 focus:border-none hover:border-none border-none rounded-full text-black text-2xl'
          onClick={prevView}
        >
          <IoMdArrowDropleftCircle />
        </button>
        <div className='flex '>
          {services.map((_current, index) => {
            return (
              <div
                className={`mx-2 ${
                  index === currentIndex ? 'text-white' : 'text-slate-200'
                } text-xs `}
                key={index}
              >
                <div className=''>
                  <FaDotCircle />
                </div>
              </div>
            );
          })}
        </div>
        <button
          className='bg-transparent outline-none focus:outline-none hover:outline-none hover:text-red-400 focus:text-red-400 focus:border-none hover:border-none border-none rounded-full text-black text-2xl'
          onClick={nextView}
        >
          <IoMdArrowDroprightCircle />
        </button>
      </div>
    </div>
  );
}
