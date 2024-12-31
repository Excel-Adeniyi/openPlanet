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
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router';
export default function Footer() {
  return (
    <footer className='footer-container w-screen text-white'>
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
        <div className='grid lg:grid-cols-3 grid-cols-1 lg:gap-8 lg:px-24 px-5 pt-10 pb-4'>
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
          <div className='grid grid-cols-2 gap-4 lg:hidden'>
            <div className=' flex justify-start  tracking-wider'>
              <div>
              <p className='uppercase my-5'>Useful Link</p>
              <Link to={'/projects'}><p className='my-2 text-sm text-white'>Property</p></Link>
              <Link to={'/about'}><p className='my-2 text-sm text-white'>About</p></Link>
              <Link to={'/contact'}><p className='my-2 text-sm text-white'>Contact</p></Link>
              </div>
            </div>
            <div className=' flex justify-start  tracking-wider'>
              <div>
                <p className='uppercase my-5'>Contact</p>
                <p className='flex my-2 text-sm'>
                  <span className='my-1 mx-1'>
                    <FaPhoneVolume />
                  </span>{' '}
                  +2347078080312
                </p>
                <p className='flex my-2 text-sm'>
                  <span className='my-1 mx-1'>
                    <MdOutlineAlternateEmail />
                  </span>{' '}
                  Info@openplanet.ng
                </p>
              </div>
            </div>
            <div className='col-span-2 flex justify-start '>
              <div>
                <p className='uppercase my-5'>Address</p>
                <p className='flex my-2 text-sm'>
                  <span className='my-1 mx-1'>
                    <FaLocationDot />
                  </span>{' '}
                  13, Mambilla Street, Aso Drive, Maitama, Nigeria
                </p>
              </div>
            </div>
          </div>
          <div className=' flex justify-center lg:block hidden '>
            <div>
              <p className='uppercase my-5'>Useful Link</p>
              <Link to={'/projects'}><p className='my-2 text-white'>Property</p></Link>
              <Link to={'/about'}><p className='my-2 text-white'>About</p></Link>
              <Link to={'/contact'}><p className='my-2 text-white'>Contact</p></Link>
            </div>
          </div>
          <div className=' flex justify-center lg:block hidden '>
            <div>
              <p className='uppercase my-5'>Address</p>
              <p className='flex my-2'>
                <span className='my-1 mx-1'>
                  <FaLocationDot />
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
        <div className='lg:px-24 px-5'>
          <hr />
          <div className='py-10 flex lg:justify-start justify-center font-inter'>
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
