import { FaWhatsapp } from 'react-icons/fa';
import ScheduleModal from '../../../global/modal/schedule_modal';
import useInteractor from '../../../hooks/useInteractor';
import Footer from '../../../layouts/footer';
import SideBar from '../../../layouts/sidebar';
import Typewriter from 'typewriter-effect';

import {
  About,
  Carousel,
  CEO,
  CoreValues,
  OurService,
} from '../../components/home';
import MoreInfo from '../../components/home/more_info/more_info';
// import OtherBusiness from '../../components/home/other_business/business';
import './style/home_page.css';
import { Helmet } from 'react-helmet-async';

export default function HomePAge() {
  const { bannerRef } = useInteractor();
  const phoneNumber = '+2347078080312';
  const whatsappChat = () => {
    window.location.href = `https://wa.me/${phoneNumber}?text=Hello`;
  };
  return (
    <>
      <div className='grid lg:grid-rows-2 overflow-x-hidden home_container '>
        <Helmet>
          <title>Home Page - Openplanet</title>
          <link rel='conical' href='https://openplanet.ng' />
          <meta
            name='description'
            content='OpenPlanet – your ultimate platform for immersive real estate experiences. Explore stunning homes, unique properties, and personalized services to find your perfect match. Begin your journey with OpenPlanet today!'
          />
          <meta property='og:title' content='Home Page - OpenPlanet' />
          <meta
            property='og:description'
            content='Explore stunning homes, unique properties, and personalized services with OpenPlanet, your trusted real estate platform.'
          />
          <meta property='og:url' content='https://openplanet.ng' />
          <meta property='og:type' content='website' />
          <meta
            property='og:image'
            content='https://excel-adeniyi.github.io/planetImages/logo_open.png'
          />
        </Helmet>
        <div className='floating_button'>
          <div className='flex cursor-pointer' onClick={whatsappChat}>
            <div className='lg:bg-white lg:text-black lg:text-sm bg-black lg:my-4 font-sangbleu lg:px-2 text-white whatsapp_text'>
              <p>Support: Chat With Us Now</p>
            </div>
            <div>
              <FaWhatsapp className='bg-green-400 lg:text-5xl text-3xl text-white p-1 rounded-full' />
            </div>
          </div>
        </div>
        <ScheduleModal />
        <SideBar />
        <div className='relative other-container  '>
          <div className='relative overflow-x-hidden carousel_height'>
            <Carousel />
          </div>
          <About />
          <div className='circle_position lg:block hidden'>
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
          <div className={`talk_style`}>
            <div className={`${bannerRef ? 'in-view' : ''} msg`}>
              Live, Work & Play amidst Luxury & Nature;
              <div className='flex justify-center'>
                Discover{' '}
                <span className='text-red-700 mx-2 hidden lg:block'>
                  <Typewriter
                    options={{
                      strings: [
                        'Openplanet',
                        'Peace',
                        'Openplanet',
                        'Comfort',
                        'Openplanet',
                        'Happiness',
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
                <div className='lg:hidden mx-2 text-red-700'>Openplanet</div>
              </div>
            </div>
          </div>
          <div className='relative'>
            <CoreValues />
            <CEO />
            {/* <OtherBusiness /> */}
          </div>
          <MoreInfo />
          <Footer />
        </div>
      </div>
    </>
  );
}
