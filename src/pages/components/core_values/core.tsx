import { VscWorkspaceTrusted } from 'react-icons/vsc';
import './styles/styles.css';
import { PiUserCircleCheckFill } from 'react-icons/pi';
import { RiStarSFill } from 'react-icons/ri';
import useInteractor from '../../../hooks/useInteractor';
import { useNavigate } from 'react-router';
export default function CoreValues() {
  const navigate = useNavigate()
  const { coreTitleRef, coreHeadRef, coreDefRef1, coreDefRef2, coreDefRef3 } =
    useInteractor();
  return (
    <div className='core_background pt-24 text-white relative'>
      <div className='lg:mx-24 mx-10'>
        <div className=''>
          <div className={`core_title ${coreTitleRef ? 'in-view' : ''}`}>
            OUR CORE VALUES
          </div>
          <div className={`core_abbre my-10 ${coreHeadRef ? 'in-view' : ''}`}>
            T.A.P
          </div>
          <div className='grid lg:grid-cols-3 grid-cols-1 gap-8'>
            <div
              className={`text-center tap_style ${
                coreDefRef1 ? 'in-view' : ''
              }`}
            >
              <div className='flex justify-center my-6'>
                <VscWorkspaceTrusted className='icon-size' />
              </div>
              <div className='core_title uppercase'>TRUST</div>
              <div className='text-center my-6 text-font_style_bold'>
                {' '}
                Establishing and nurturing trust is vital to building long-term
                relationships with clients. This involves consistent
                communication, delivering on commitments, and prioritizing
                honesty in all dealings. Trust grows when clients feel secure,
                knowing their needs are understood and their interests are
                protected.
              </div>
            </div>
            <div
              className={`text-center acc_style ${
                coreDefRef2 ? 'in-view' : ''
              }`}
            >
              <div className='flex justify-center my-6'>
                <PiUserCircleCheckFill className='icon-size' />
              </div>
              <div className='core_title font-bold uppercase'>
                Accountability
              </div>
              <div className='text-center my-6 text-font_style_bold'>
                {' '}
                Being accountable means taking ownership of every decision,
                action, and result. It reflects a commitment to transparency,
                admitting mistakes when they occur, and ensuring corrective
                measures are taken. Clients value companies that demonstrate
                responsibility, as it reassures them of reliability and
                integrity.
              </div>
            </div>
            <div className={`prof_style ${coreDefRef3 ? 'in-view' : ''}`}>
              <div className='my-2 '>
                <div className='flex justify-center'>
                  <RiStarSFill className='icon-size' />
                  <RiStarSFill className='icon-size' />
                  <RiStarSFill className='icon-size' />
                </div>
                <div className='flex justify-center'>
                  <RiStarSFill className='icon-size' />
                  <RiStarSFill className='icon-size' />
                </div>
              </div>
              <div className='text-center core_title uppercase text-white'>
                Professionalism
              </div>
              <div className='text-center my-6 text-font_style_bold'>
                Professionalism involves demonstrating expertise, maintaining
                high standards, and adhering to ethical principles in every
                aspect of the business. It requires clear communication, respect
                for clients, and a commitment to continuous improvement. A
                professional approach ensures clients feel confident in the
                company's abilities and dedication to excellence.
              </div>
            </div>
          </div>

          <div className='text-xs capitalize flex justify-center my-6'>
            <button onClick={() => navigate('/about')} className='bg-transparent border-1 border-white px-8 py-2 background_color_styless hover:bg-white focus:bg-white focus:text-black text-white rounded-full'>
              ABOUT US
            </button>
          </div>
          <div className='h-24 relative flex justify-center'>
            <div className='border_style h-24 absolute b-0'></div>
          </div>
        </div>
      </div>
    </div>
  );
}
