import { FaLocationDot } from 'react-icons/fa6';
import Splita from '../Splitter/splitter';
import './style/styles.css';
import { IoLogoWhatsapp } from 'react-icons/io';
import { ImCross } from 'react-icons/im';
export default function Modal({ content, clearState }: any) {
  // console.log(content)
  //   const init = content.
    const phoneNumber = '+2347078080312';
    const whatsappChat = (name:string, location: string) => {
      const messageInfo = '*Project name:*' + ' ' + name + '\n' + '*Location:*' + ' ' + location 
      const message = encodeURI(messageInfo)
      window.location.href = `https://wa.me/${phoneNumber}?text=${message}`;
    }
  return (
    <div className='modal_style  overflow-hidden h-full w-screen'>
      <div className='flex justify-center'>
        <div className='modal_card'>
          <div className='relative'>
            <div className='cross_button'>
              <button
                className='bg-transparent hover:outline-none outline-none border-none hover:border-none focus:border-none focus:outline-none hover:text-red-700 focus:text-red-700'
                onClick={clearState}
              >
                <ImCross />
              </button>
            </div>
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
            {content.apartments && (
              <div className='my-3'>
                <div className='font-cormorant'>Apartment</div>
                <div className='tracking-wider'>
                  <Splita splitKey={'\n'} content={content.apartments || ''} />
                </div>
              </div>
            )}
            {content.terraces1 && (
              <div>
                <div className='font-cormorant'>Terrace</div>
                <div className='tracking-wider'>
                  <Splita splitKey={'\n'} content={content.terraces1 || ''} />
                </div>
              </div>
            )}
            {content.detached && (
              <div>
                <div className='font-cormorant'>Duplex & Mansion</div>
                <div className='tracking-wider'>
                  <Splita splitKey={'\n'} content={content.detached || ''} />
                </div>
              </div>
            )}
          </div>
          <div className='my-5 mx-5 flex justify-center'>
            <button className='text-white flex w-96 justify-center bg-slate-700 hover:bg-slate-600 tracking-wider' onClick={() => whatsappChat(content.name, content.location)}>
              {' '}
              <IoLogoWhatsapp className='my-1 mx-2 ' /> Enquire on Whatsapp
            </button> 
          </div>
        </div>
      </div>
    </div>
  );
}
