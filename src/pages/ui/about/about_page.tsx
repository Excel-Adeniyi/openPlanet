import { RiCustomerService2Fill } from 'react-icons/ri';
import Footer from '../../../layouts/footer';
import Navbar from '../../../layouts/navbar';
import { AboutTopContent, Team } from '../../components/abouts';
import { CoreValues } from '../../components/home';
import './styles/styles.css';
export default function AboutPage() {
  return (
    <div className='bg-white'>
      <div className='about-banner'>
        <Navbar />
        <div className='flex items-stretch justify-center h-full overflow-hidden'>
          <div className='self-center'>
            <div className='text-center introducing'>Who We Are</div>
            <div className='branding'>
              Luxury Living, Serenity & Unrivalled Quality
            </div>
          </div>
        </div>
      </div>
      <AboutTopContent />
      <div className='mx-24 px-24 mb-10 flex justify-center relative rounded-lg overflow-hidden'>
        <div className='image-overlay rounded-lg w-full mx-24 flex justify-center items-stretch'>
          <div className='self-center'>
            <div className='flex justify-center'>
              <RiCustomerService2Fill className='text-4xl'/>
            </div>
            <button className='bg-transparent border-1 border-white text-xl px-8 py-2 background_color_styless hover:bg-white focus:bg-white focus:text-black text-white rounded-full'>
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
      <CoreValues />
      <Team />
      <Footer />
    </div>
  );
}
