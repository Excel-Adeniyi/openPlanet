import { GiEarthAfricaEurope } from 'react-icons/gi';
import './styles/navbar_style.css';
import { Link, useLocation, useNavigate } from 'react-router';
import { RiMenu4Fill } from 'react-icons/ri';
import { useSidebarStore } from '../state_management/zustand/sidebar_store';
import { useScheduleModal } from '../state_management/zustand/schedule_modal_store';
function Navbar() {
  const { pathname } = useLocation();
  const { toggleBar }: any = useSidebarStore();
  const { toggleModal }: any = useScheduleModal();
  const navigate = useNavigate();
  return (
    <>
      <nav className='lg:px-24 px-5 lg:py-8 py-4 w-screen'>
        <div className='grid grid-cols-3 gap-8 justify-items-start'>
          <div
            className='logo_gradient flex items-stretch justify-self-start cursor-pointer'
            onClick={() => navigate('/')}
          >
            <div className='self-center'>
              <GiEarthAfricaEurope className='icon-color' />
            </div>
            <div className='self-center'>penPlanet</div>
          </div>
          <div className='col-span-2 w-full lg:block hidden font-cormorant'>
            <div className='justify-between flex'>
              <div className='flex items-center justify-center '>
                <ul className='flex gap-8 justify-content-center text-center nav-font'>
                  <li>
                    <Link
                      to={'/'}
                      className={`mx-10 ${
                        pathname === '/'
                          ? 'text-slate-200'
                          : 'text-slate-400 hover:text-slate-300 tracking-wider focus:text-slate-300'
                      }`}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={'/projects'}
                      className={`mx-10 ${
                        pathname === '/project'
                          ? 'text-slate-200'
                          : 'text-slate-400 hover:text-slate-300 tracking-wider focus:text-slate-300'
                      }`}
                    >
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={'/about'}
                      className={`mx-10 ${
                        pathname === '/about'
                          ? 'text-slate-200'
                          : 'text-slate-400 hover:text-slate-300 tracking-wider focus:text-slate-300'
                      }`}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={'/contact'}
                      className={`mx-10 ${
                        pathname === '/contact'
                          ? 'text-slate-200 tracking-wider'
                          : 'text-slate-400 tracking-wider'
                      }`}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div className='justify-end flex'>
                <button
                  className='rounded-full nav-button'
                  onClick={() => toggleModal()}
                >
                  Shedule Appointment
                </button>
              </div>
            </div>
          </div>

          <div className='lg:hidden col-span-2 flex justify-end w-full items-stretch '>
            <div
              className='self-center flex text-xl cursor-pointer'
              onClick={() => toggleBar()}
            >
              <div className='text-sm mx-1  uppercase'>Menu |</div>
              <RiMenu4Fill />
            </div>
          </div>
        </div>
      </nav>
      <hr />
    </>
  );
}

export default Navbar;
