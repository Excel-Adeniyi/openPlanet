import {
  FaFacebook,
  FaInstagram,
  FaPhoneVolume,
  FaRegCopyright,
  FaYoutube,
} from 'react-icons/fa';
import './styles/footer_style.css';
import { AiFillTikTok } from 'react-icons/ai';
import { GiEarthAfricaEurope } from 'react-icons/gi';
import { RiHomeOfficeFill } from 'react-icons/ri';
import { MdOutlineAlternateEmail } from 'react-icons/md';
export default function Footer() {
  return (
    <footer className='footer-container'>
      <div className='bg-slate-200'>
        <div className='p-24 border-r-2 text-black'>
          <div className='text-center text-2xl '>Follow Us</div>
          <div className='flex justify-center text-black'>
            <div className='p-4 text-4xl hover:text-red-700 focus:text-red-700'>
              <FaInstagram />
            </div>
            <div className='p-4 text-4xl hover:text-red-700 focus:text-red-700'>
              <FaFacebook />
            </div>
            <div className='p-4 text-4xl hover:text-red-700 focus:text-red-700'>
              <FaYoutube />
            </div>
            <div className='p-4 text-4xl hover:text-red-700 focus:text-red-700'>
              <AiFillTikTok />
            </div>
          </div>
        </div>
      </div>
      <div className='bg-slate-900'>
        <div className='grid grid-cols-3 px-24 pt-10 pb-4'>
          <div className='my-10'>
            <div className='logo_gradient flex items-stretch justify-self-start'>
              <div className='self-center'>
                <GiEarthAfricaEurope className='icon-color' />
              </div>
              <div>penPlanet</div>
            </div>
            <div className='font-cormorantBold tracking-wide text-sm my-5 uppercase'>
              {' '}
              Creating Communities for Expatriates and Modern Nigerians{' '}
            </div>
          </div>
          <div className=' flex justify-center '>
            <div>
              <p className='uppercase my-5'>Useful Link</p>
              <p className='my-2'>Property</p>
              <p className='my-2'>About</p>
              <p className='my-2'>Contact</p>
            </div>
          </div>
          <div className=' flex justify-center '>
            <div>
              <p className='uppercase my-5'>Address</p>
              <p className='flex my-2'>
                <span className='my-1 mx-1'>
                  <RiHomeOfficeFill />
                </span>{' '}
                13, Mambilla Street, Aso Drive, Maitama, Nigeria
              </p>
              <p className='flex my-2'>
                <span className='my-1 mx-1'>
                  <FaPhoneVolume />
                </span>{' '}
                +2347078080312
              </p>
              <p className='flex my-2'>
                <span className='my-1 mx-1'>
                  <MdOutlineAlternateEmail />
                </span>{' '}
                Info@openplanet.ng
              </p>
            </div>
          </div>
        </div>
        <div className='px-24'>
          <hr />
          <div className='py-10 flex font-inter'>
            <div className='my-1 mx-1'>
              <FaRegCopyright />
            </div>
            2024 OpenPlanet, All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
