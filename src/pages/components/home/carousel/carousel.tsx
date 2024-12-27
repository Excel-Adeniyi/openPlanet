import { useEffect, useState } from 'react';
import Navbar from '../../../../layouts/navbar';
import './style/style.css';
import carouselData from '../../../../data/carousel_data.json';
import { BsArrowRight } from 'react-icons/bs';
export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervals = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
    }, 15000);
    return () => clearInterval(intervals);
  }, []);
  return (
    <div className='relative'>
      <div className='carousel-container'>
        {carouselData.map((styles, index) => {
          return (
            <div
              className={`carousel ${styles.background} ${
                currentIndex === index ? 'active' : ''
              }`}
            >
              <Navbar />
              <div className='carousel-let mx-10'>
                <div className='carousel-letter '>
                  <div className='style-letter'>{styles.letter}</div>
                </div>
                <div className='carousel-body'>
                  <div className='carousel-head'>{styles.head}</div>
                  <div className='carousel-title'>{styles.title}</div>
                  <div className='carousel-description'>
                    {styles.description}
                  </div>
                  <div className='relative circle-size'>
                    <div className='overSpin'>
                      <div className='spin-on-hover'>
                        <svg
                          width='150'
                          height='150'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          {/* Circle for the green button */}
                          {/* <circle cx='150' cy='150' r='50' fill='green' /> */}

                          {/* Circular path for the revolving text */}
                          <path
                            id='circlePath'
                            d='M 150,150 m -50,0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0'
                            fill='none'
                          />

                          {/* Text attached to the circular path */}
                          <text fill='white' fontSize='12' fontWeight='bold'>
                            <textPath href='#circlePath'>
                              Learn More...
                            </textPath>
                          </text>
                        </svg>
                      </div>
                    </div>
                    <button className='rounded-full green_buton py-5 my-2 bg-blue-500 hover:bg-blue-700 border-none focus:outline-0 focus:bg-blue-700 svg-style'>
                      <BsArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
