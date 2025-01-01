import { RiCustomerService2Fill } from 'react-icons/ri';
import Footer from '../../../layouts/footer';
import Navbar from '../../../layouts/navbar';
import { AboutTopContent } from '../../components/abouts';
import { CoreValues } from '../../components/home';
import './styles/styles.css';
import { useNavigate } from 'react-router';
import SideBar from '../../../layouts/sidebar';
import ScheduleModal from '../../../global/modal/schedule_modal';
export default function AboutPage() {
  const navigate = useNavigate();
  return (
    <div className='bg-white'>
      <SideBar />
      <ScheduleModal />

      <div className='about-banner'>
        <Navbar />
        <div className='flex items-stretch justify-center h-full text-white overflow-hidden'>
          <div className='self-center'>
            <div className='text-center introducing'>Who We Are</div>
            <div className='branding'>
              Luxury Living, Serenity & Unrivalled Quality
            </div>
          </div>
        </div>
      </div>
      <AboutTopContent />
      <div className='lg:mx-24 lg:px-24 mb-10 px-2 flex justify-center relative rounded-lg overflow-hidden'>
        <div className='image-overlay rounded-lg w-full lg:mx-24 flex justify-center items-stretch'>
          <div className='self-center'>
            <div className='flex justify-center'>
              <RiCustomerService2Fill className='text-4xl' />
            </div>
            <button
              onClick={() => navigate('/contact')}
              className='bg-transparent border-1 border-white text-xl px-8 py-2 background_color_styless hover:bg-white focus:bg-white focus:text-black text-white rounded-full'
            >
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
      <CoreValues />
      <div className=''>
        {/* <Team /> */}
      </div>
      <Footer />
    </div>
  );
}
