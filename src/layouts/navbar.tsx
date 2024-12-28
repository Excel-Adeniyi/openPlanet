import { GiEarthAfricaEurope } from 'react-icons/gi';
import './styles/navbar_style.css';
import { Link, useLocation } from 'react-router';
function Navbar() {
  const { pathname } = useLocation();
  return (
    <>
      <nav className='px-24 py-8'>
        <div className='grid grid-cols-3 gap-8 justify-items-start'>
          <div className='logo_gradient flex items-stretch justify-self-start'>
            <div className='self-center'>
              <GiEarthAfricaEurope className='icon-color' />
            </div>
            <div>penPlanet</div>
          </div>
          <div className='col-span-2 w-full '>
            <div className='justify-between flex'>
              <div className='flex items-center justify-center '>
                <ul className='flex gap-8 justify-content-center text-center nav-font'>
                  <li>
                    <Link
                      to={'/'}
                      className={`mx-10 ${
                        pathname === '/'
                          ? 'text-slate-200'
                          : 'text-slate-400 hover:text-slate-300 focus:text-slate-300'
                      }`}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to={'/projects'}
                      className={`mx-10 ${
                        pathname === '/project'
                          ? 'text-slate-200'
                          : 'text-slate-400 hover:text-slate-300 focus:text-slate-300'
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
                          : 'text-slate-400 hover:text-slate-300 focus:text-slate-300'
                      }`}
                    >
                      About
                    </Link>
                  </li>
                  <li
                    className={`mx-10 ${
                      pathname === '/contact'
                        ? 'text-slate-200'
                        : 'text-slate-400'
                    }`}
                  >
                    Contact
                  </li>
                </ul>
              </div>

              <div className='justify-end flex'>
                <button className='rounded-full nav-button'>
                  Shedule Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <hr />
    </>
  );
}

export default Navbar;
