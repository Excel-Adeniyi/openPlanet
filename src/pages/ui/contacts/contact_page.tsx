import { FaLocationDot, FaPhoneVolume } from 'react-icons/fa6';
import Footer from '../../../layouts/footer';
import Navbar from '../../../layouts/navbar';
import './style/style.css';
import { MdAlternateEmail } from 'react-icons/md';
import SideBar from '../../../layouts/sidebar';
import ScheduleModal from '../../../global/modal/schedule_modal';
import { Helmet } from 'react-helmet-async';
export default function Contact() {
  return (
    <div>
      <div className='contact-banner'>
        <Helmet>
          <title>Contact Us Today: Let Openplanet secure your next property immediately</title>
          <link rel='canonical' href='https://openplanet.ng/contact' />
          <link
            rel='alternate'
            href='https://openplanet.ng/contact'
            hrefLang='en-ng'
          />
          <link
            rel='alternate'
            href='https://openplanet.ng/contact'
            hrefLang='en-us'
          />
          <link
            rel='alternate'
            href='https://openplanet.ng/contact'
            hrefLang='en-gb'
          />
          <link
            rel='alternate'
            href='https://openplanet.ng/contact'
            hrefLang='x-default'
          />
          <meta
            name='description'
            content="Get in touch with Openplanet's expert team to find your ideal property. Our professionals specialize in innovative real estate solutions and are committed to providing personalized services to meet your needs."
          />
          <meta
            property='og:title'
            content="Contact Us Today: Let Openplanet secure your next property immediately"
          />
          <meta
            property='og:description'
            content="Get in touch with Openplanet's expert team to find your ideal property. Our professionals specialize in innovative real estate solutions and are committed to providing personalized services to meet your needs."
          />
          <meta property='og:url' content='https://openplanet.ng/contact' />
          <meta property='og:type' content='website' />
          <meta
            property='og:image'
            content='https://excel-adeniyi.github.io/planetImages/logo_open.png'
          />
          <script type='application/ld+json'>
            {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://openplanet.ng/contact"
              },
              "headline": "Contact Us Today: Let Openplanet secure your next property immediately",
              "description": "Get in touch with Openplanet's expert team to find your ideal property. Our professionals specialize in innovative real estate solutions and are committed to providing personalized services to meet your needs.,
              "publisher": {
                "@type": "Organization",
                "name": "Openplanet",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://excel-adeniyi.github.io/planetImages/logo_open.png"
                }
              },
              "image": "https://excel-adeniyi.github.io/planetImages/logo_open.png",
              "url": "https://openplanet.ng/contact",
              "author": {
                "@type": "Organization",
                "name": "Openplanet"
              },
              "datePublished": "2025-01-02",
              "dateModified": "2025-01-02"
            }
            `}
          </script>
        </Helmet>
        <SideBar />
        <ScheduleModal />

        <Navbar />
        <div className='flex items-stretch justify-center h-full text-white mx-3 overflow-hidden'>
          <div className='self-center'>
            <div className='text-center introducing'>Contact</div>
            <div className='branding'>Connect With Us Through Our Channels</div>
          </div>
        </div>
      </div>
      <div className='grid lg:grid-cols-3 grid-cols-1 gap-8 bg-white lg:px-24 px-4 py-24'>
        <div className='text-black border-2 rounded-lg lg:px-24 py-24 tracking-wider'>
          <div className='flex justify-center text-red-700 text-3xl my-5'>
            <FaLocationDot />
          </div>
          <div className='text-xl font-sangbleu text-center'>Address</div>
          <div className=' text-center'>
            13, Mambilla Street, Aso Drive, Maitama, Nigeria
          </div>
        </div>
        <div className='text-black border-2 rounded-lg px-24 py-24 tracking-wider'>
          <div className='flex justify-center text-red-700 text-3xl my-5'>
            <MdAlternateEmail />
          </div>
          <div className='text-xl font-sangbleu text-center'>Email</div>
          <div className=' text-center'>Info@openplanet.ng</div>
        </div>
        <div className='text-black border-2 rounded-lg px-24 py-24 tracking-wider'>
          <div className='flex justify-center text-red-700 text-3xl my-5'>
            <FaPhoneVolume />
          </div>
          <div className='text-xl font-sangbleu text-center'>Phone</div>
          <div className=' text-center'>+2347078080312</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
