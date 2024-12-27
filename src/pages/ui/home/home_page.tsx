import Footer from '../../../layouts/footer';
import {
  About,
  Carousel,
  CEO,
  CoreValues,
  OurService,
} from '../../components/home';
import MoreInfo from '../../components/home/more_info/more_info';
import OtherBusiness from '../../components/home/other_business/business';
import './style/home_page.css';

export default function HomePAge() {
  return (
    <>
      <div className='grid grid-rows-2'>
        <div className='relative'>
          <Carousel />
        </div>
        <div className='relative other-container'>
          <About />
          <div className='circle_position'>
            {' '}
            <div className='spin-on-hovers'>
              <svg width='300' height='300' xmlns='http://www.w3.org/2000/svg'>
                {/* Circle for the green button */}
                {/* <circle cx='150' cy='150' r='50' fill='green' /> */}

                {/* Circular path for the revolving text */}
                <path
                  id='circlePath'
                  d='M 150,150 m -50,0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0'
                  fill='none'
                />

                {/* Text attached to the circular path */}
                <text fill='black' fontSize='12' fontWeight='bold'>
                  <textPath href='#circlePath'>
                    OpenPlanet....... OpenPlanet....... OpenPlanet.......
                    OpenPlanet.......
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
          <OurService />
          <div className='talk_style'>
            We are coming to disrupt every level of mediocrity in the Real
            Estate industry.
          </div>
          <div className='relative'>
            <CoreValues />
            <CEO />
            <OtherBusiness />
          </div>
          <MoreInfo />
          <Footer />
        </div>
      </div>
    </>
  );
}
