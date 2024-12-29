import { FaLocationDot } from 'react-icons/fa6';
import Splita from '../Splitter/splitter';
import './style/styles.css';
import { IoLogoWhatsapp } from 'react-icons/io';
export default function Modal({ content }: any) {
  // console.log(content)
  return (
    <div className='modal_style  overflow-hidden h-full w-screen'>
      <div className='flex justify-center'>
        <div className='modal_card'>
          <div className='relative'>
            <img src={content.image} />
            <div className='flex location_style py-5'>
              <FaLocationDot className='my-1 mr-2' />
              <div className='tracking-wider'>{content.location} </div>
            </div>
            <div></div>
          </div>
          <div className='grid grid-cols-2 gap-1 mx-5 my-5'>
            <div className='my-3'>
              <div className='font-cormorant'>Name</div>
              <div className='tracking-wider'>{content.name}</div>
            </div>
            <div className='my-3'>
              <div className='font-cormorant'>Apartment</div>
              <div className='tracking-wider'>
                <Splita splitKey={'\n'} content={content.apartments || ''} />
              </div>
            </div>
            <div>
              <div className='font-cormorant'>Terrace</div>
              <div className='tracking-wider'>
                <Splita splitKey={'\n'} content={content.terraces1 || ''} />
              </div>
            </div>
            <div>
              <div className='font-cormorant'>Duplex & Mansion</div>
              <div className='tracking-wider'>
                <Splita splitKey={'\n'} content={content.detached || ''} />
              </div>
            </div>
          </div>
          <div className='my-5 flex justify-center'>
            <button className='text-white flex w-96 justify-center'> <IoLogoWhatsapp className='my-1 mx-2 ' /> Enquire on Whatsapp</button>
          </div>
        </div>
      </div>
    </div>
  );
}
