import Navbar from '../../../layouts/navbar';
import './styles/styles.css';
import projectdata from '../../../data/projects_data.json';
import Footer from '../../../layouts/footer';
import { FaLocationDot } from 'react-icons/fa6';
import Modal from '../../components/projects/modal/modal';
import { useState } from 'react';
import ScheduleModal from '../../../global/modal/schedule_modal';
import SideBar from '../../../layouts/sidebar';
export default function ProjectPage() {
  const [current, setCurrent] = useState<any>();
  const [showModal, setShowModal] = useState(false);
  const clearState = () => {
    setCurrent({}), setShowModal(false);
  };

  return (
    <div className='bg-white'>
      <ScheduleModal />
      <SideBar />
      {current && showModal && (
        <Modal content={current} clearState={clearState} />
      )}
      <div className='projects-banner'>
        <Navbar />
        <div className='flex items-stretch justify-center h-full overflow-hidden'>
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
                      <div className='tracking-wider'>{content.location} </div>
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
