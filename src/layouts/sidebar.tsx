import { GiEarthAfricaEurope } from 'react-icons/gi';
import './styles/sidebar.css';
import { IoMdCloseCircle } from 'react-icons/io';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa';
import { AiFillTikTok } from 'react-icons/ai';
import { useSidebarStore } from '../state_management/zustand/sidebar_store';
import { Link, useLocation } from 'react-router';
import { useScheduleModal } from '../state_management/zustand/schedule_modal_store';
export default function SideBar() {
  const {isOpen, toggleBar}:any = useSidebarStore()
  const {toggleModal}: any = useScheduleModal()
  const { pathname } = useLocation();
  const navto = (url: string) => {
    window.location.href = `${url}`
  }
  return (
    <div className={`${isOpen ? 'show_sidebar' : ''} fixed h-full bg-slate-700 sidebar_container text-white `}>
      <div className='grid grid-cols-2'>
        <div className='logo_gradient_sidebar flex mx-4 items-stretch justify-self-start '>
          <div className='self-center'>
            <GiEarthAfricaEurope className='icon-color' />
          </div>
          <div className='self-center my-3'>penPlanet</div>
        </div>
        <div className='my-3 flex justify-end mx-3 cursor-pointer' onClick={() => toggleBar()}>
          <IoMdCloseCircle className='my-2 text-xl mx-2' />

          <div className='border-l-2 text-sm py-2 px-2'>close</div>
        </div>
      </div>

      <div className='text-3xl mx-4 font-cormorantBold menus_styles mt-10'>
        <div className='my-4'><Link to={'/'} className={`text-white focus:text-red-400 ${pathname === '/' ? 'text-red-400' : 'text-white'}`} onClick={() => {toggleBar()}}>Home</Link></div>
        <div className='my-4'><Link to={'/projects'} className={`text-white focus:text-red-400 ${pathname === '/projects' ? 'text-red-400' : 'text-white'}`} onClick={() => {toggleBar()}}>Projects</Link></div>
        <div className='my-4'><Link to={'/about'} className={`text-white focus:text-red-400 ${pathname === '/about' ? 'text-red-400' : 'text-white'}`} onClick={() => {toggleBar()}}>About</Link></div>
        <div className='my-4'><Link to={'/team'} className={`text-white focus:text-red-400 ${pathname === '/team' ? 'text-red-400' : 'text-white'}`} onClick={() => {toggleBar()}}>Our Team</Link></div>
        <div className='my-4'><Link to={'/contact'} className={`text-white focus:text-red-400 ${pathname === '/contact' ? 'text-red-400' : 'text-white'}`} onClick={() => {toggleBar()}}>Contacts</Link></div>
        <div className='my-4 text-white focus:text-red-400 ' onClick={() => {toggleModal(), toggleBar()}} >Schedule Appointment</div>
      </div>
      <hr className=' mx-4' />
      <div className=' font-sangbleu tracking-wide mx-4 my-5 text-white'>
        <div className='mt-4 text-sm'>contact information</div>
        <div>
          <p className='flex text-xs text-red-200 my-2'>Info@openplanet.ng</p>
          <p className='flex text-xs text-red-200 my-2'>+2347078080312</p>
        </div>
      </div>
      <hr className='mx-4 mt-10' />
      <div className='mt-6'>
        <div className='text-center text-sm text-white '>Follow Us</div>
        <div className='flex justify-center text-white'>
          <div className='p-4 text-xl hover:text-red-700 focus:text-red-700'>
            <FaInstagram />
          </div>
          <div className='p-4 text-xl hover:text-red-700 focus:text-red-700'>
            <FaFacebook />
          </div>
          <div className='p-4 text-xl hover:text-red-700 focus:text-red-700'  onClick={() => navto('https://www.youtube.com/@OpenPlanet-o2n')}>
            <FaYoutube />
          </div>
          <div className='p-4 text-xl hover:text-red-700 focus:text-red-700' onClick={() => navto('https://www.tiktok.com/@openplanetproperties')}>
            <AiFillTikTok />
          </div>
        </div>
      </div>
    </div>
  );
}
