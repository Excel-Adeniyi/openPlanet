import { GiEarthAfricaEurope } from 'react-icons/gi';
import './styles/navbar_style.css';
import { useLocation } from 'react-router';
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
                <li
                  className={`mx-10 ${
                    pathname === '/' ? 'text-slate-200' : 'text-slate-400'
                  }`}
                >
                  Home
                </li>
                <li
                  className={`mx-10 ${
                    pathname === '/project'
                      ? 'text-slate-200'
                      : 'text-slate-400'
                  }`}
                >
                  Projects
                </li>
                <li
                  className={`mx-10 ${
                    pathname === '/about' ? 'text-slate-200' : 'text-slate-400'
                  }`}
                >
                  About
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
