import Navbar from '../../../layouts/navbar';
import './styles/styles.css';
import projectdata from '../../../data/projects_data.json';
import Footer from '../../../layouts/footer';
import { FaLocationDot } from 'react-icons/fa6';
import Modal from '../../components/projects/modal/modal';
import { useState } from 'react';
import ScheduleModal from '../../../global/modal/schedule_modal';
import SideBar from '../../../layouts/sidebar';
import { Helmet } from 'react-helmet-async';
export default function ProjectPage() {
  const [current, setCurrent] = useState<any>();
  const [showModal, setShowModal] = useState(false);
  const clearState = () => {
    setCurrent({}), setShowModal(false);
  };

  return (
    <div className='bg-white'>
      <Helmet>
        <title>Projects - OpenPlanet</title>
        <link rel='canonical' href='https://openplanet.ng/projects' />
        <meta
          name='description'
          content='Discover the projects shaping the future of real estate on OpenPlanet. Explore stunning developments, unique opportunities, and innovative solutions tailored to your needs.'
        />
        <meta property='og:title' content='Projects - OpenPlanet' />
        <meta
          property='og:description'
          content='Explore the latest real estate projects on OpenPlanet. From stunning homes to innovative developments, find your perfect opportunity today.'
        />
        <meta property='og:url' content='https://openplanet.ng/projects' />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://excel-adeniyi.github.io/planetImages/logo_open.png'
        />
      </Helmet>
      <ScheduleModal />
      <SideBar />
      {current && showModal && (
        <Modal content={current} clearState={clearState} />
      )}
      <div className='projects-banner'>
        <Navbar />
        <div className='flex items-stretch justify-center h-full text-white mx-3 overflow-hidden'>
          <div className='self-center'>
            <div className='text-center introducing'>Projects</div>
            <div className='branding'>
              Property values are measured on different scales
            </div>
          </div>
        </div>
      </div>

      <div className='text-black grid lg:grid-cols-2 grid-cols-1 gap-8 py-24'>
        {projectdata &&
          projectdata.map((content, index) => {
            return (
              <div key={index} className='lg:px-24 px-4'>
                <div className={content.backGround}>
                  <div>
                    <div className='font-sangbleu text-xl'>{content.name}</div>
                    <div className='flex '>
                      <FaLocationDot className='my-1 mr-2' />
                      <div className='tracking-wider font-cormorant'>
                        {content.location}{' '}
                      </div>
                    </div>
                    <button
                      className='bg-transparent border-slate-300 py-2 hover:bg-white hover:text-black my-2'
                      onClick={() => {
                        setCurrent(content), setShowModal(true);
                      }}
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      <Footer />
    </div>
  );
}
