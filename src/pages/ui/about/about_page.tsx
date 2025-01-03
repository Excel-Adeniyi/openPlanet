import { RiCustomerService2Fill } from 'react-icons/ri';
import Footer from '../../../layouts/footer';
import Navbar from '../../../layouts/navbar';
import { AboutTopContent } from '../../components/abouts';
import { CoreValues } from '../../components/home';
import './styles/styles.css';
import { useNavigate } from 'react-router';
import SideBar from '../../../layouts/sidebar';
import ScheduleModal from '../../../global/modal/schedule_modal';
import { Helmet } from 'react-helmet-async';
export default function AboutPage() {
  const navigate = useNavigate();
  return (
    <div className='bg-white'>
      <Helmet>
        <title>About Openplanet: Real Estates Experts in Nigeria</title>
        <link rel='canonical' href='https://openplanet.ng/about' />
        <link rel='alternate' href='https://openplanet.ng/about' hrefLang='en-ng'/>
        <link rel='alternate' href='https://openplanet.ng/about' hrefLang='en-us'/>
        <link rel='alternate' href='https://openplanet.ng/about' hrefLang='en-gb'/>
        <link rel='alternate' href='https://openplanet.ng/about' hrefLang='x-default'/>
        <meta
          name='description'
          content='Learn more about Openplanet, your trusted Nigerian platform for immersive real estate experiences. Discover our mission, vision, and commitment to redefining real estate services in Nigeria.'
        />
        <meta property='og:title' content='About Openplanet: Real Estates Experts in Nigeria' />
        <meta
          property='og:description'
          content='Discover the story behind Openplanet and how we’re transforming real estate in Nigeria. Learn about our values, mission, and dedication to delivering exceptional service.'
        />
        <meta property='og:url' content='https://openplanet.ng/about' />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://excel-adeniyi.github.io/planetImages/logo_open.png'
        />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://openplanet.ng/about"
            },
            "headline": "About Openplanet: Real Estates Experts in Nigeria",
            "description": "Learn more about Openplanet, your trusted Nigerian platform for immersive real estate experiences.",
            "publisher": {
              "@type": "Organization",
              "name": "Openplanet",
              "logo": {
                "@type": "ImageObject",
                "url": "https://excel-adeniyi.github.io/planetImages/logo_open.png"
              }
            },
            "image": "https://excel-adeniyi.github.io/planetImages/logo_open.png",
            "url": "https://openplanet.ng/about",
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

      <div className='about-banner'>
        <Navbar />
        <div className='flex items-stretch justify-center h-full text-white overflow-hidden'>
          <div className='self-center'>
            <h2 className='text-center introducing'>Who We Are</h2>
            <div className='branding'>
              Luxury Living, Serenity & Unrivalled Quality
            </div>
          </div>
        </div>
      </div>
      <AboutTopContent />
      <div className='lg:mx-24 lg:px-24 mb-10 px-2 flex justify-center relative rounded-lg overflow-hidden'>
        <div className='image-overlay rounded-lg w-full lg:mx-24 flex justify-center items-stretch'>
          <div className='self-center'>
            <div className='flex justify-center'>
              <RiCustomerService2Fill className='text-4xl' />
            </div>
            <button
              onClick={() => navigate('/contact')}
              className='bg-transparent border-1 border-white text-xl px-8 py-2 background_color_styless hover:bg-white focus:bg-white focus:text-black text-white rounded-full'
            >
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
      <CoreValues />
      <div className=''>{/* <Team /> */}</div>
      <Footer />
    </div>
  );
}
