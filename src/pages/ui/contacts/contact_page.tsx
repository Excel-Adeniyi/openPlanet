import { FaLocationDot, FaPhoneVolume } from 'react-icons/fa6';
import Footer from '../../../layouts/footer';
import Navbar from '../../../layouts/navbar';
import './style/style.css';
import { MdAlternateEmail } from 'react-icons/md';
import SideBar from '../../../layouts/sidebar';
import ScheduleModal from '../../../global/modal/schedule_modal';
export default function Contact() {
  return (
    <div>
      <div className='contact-banner'>
        <SideBar />
        <ScheduleModal />

        <Navbar />
        <div className='flex items-stretch justify-center h-full text-white mx-3 overflow-hidden'>
          <div className='self-center'>
            <div className='text-center introducing'>Contact</div>
            <div className='branding'>Connect With Us Through Our Channels</div>
          </div>
        </div>
      </div>
      <div className='grid lg:grid-cols-3 grid-cols-1 gap-8 bg-white lg:px-24 px-4 py-24'>
        <div className='text-black border-2 rounded-lg lg:px-24 py-24 tracking-wider'>
          <div className='flex justify-center text-red-700 text-3xl my-5'>
            <FaLocationDot />
          </div>
          <div className='text-xl font-sangbleu text-center'>Address</div>
          <div className=' text-center'>
            13, Mambilla Street, Aso Drive, Maitama, Nigeria
          </div>
        </div>
        <div className='text-black border-2 rounded-lg px-24 py-24 tracking-wider'>
          <div className='flex justify-center text-red-700 text-3xl my-5'>
            <MdAlternateEmail />
          </div>
          <div className='text-xl font-sangbleu text-center'>Email</div>
          <div className=' text-center'>Info@openplanet.ng</div>
        </div>
        <div className='text-black border-2 rounded-lg px-24 py-24 tracking-wider'>
          <div className='flex justify-center text-red-700 text-3xl my-5'>
            <FaPhoneVolume />
          </div>
          <div className='text-xl font-sangbleu text-center'>Phone</div>
          <div className=' text-center'>+2347078080312</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
