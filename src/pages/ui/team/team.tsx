import ScheduleModal from '../../../global/modal/schedule_modal';
import Navbar from '../../../layouts/navbar';
import SideBar from '../../../layouts/sidebar';
import team from '../../../data/team_data.json';
import './style/style.css';
import Footer from '../../../layouts/footer';
import { Helmet } from 'react-helmet-async';

export default function OurTeam() {
  return (
    <div>
      <Helmet>
        <title>Meet Our Team: Experts Behind Openplanet's Success</title>
        <link rel='canonical' href='https://openplanet.ng/team' />
        <link
          rel='alternate'
          href='https://openplanet.ng/team'
          hrefLang='en-ng'
        />
        <link
          rel='alternate'
          href='https://openplanet.ng/team'
          hrefLang='en-us'
        />
        <link
          rel='alternate'
          href='https://openplanet.ng/team'
          hrefLang='en-gb'
        />
        <link
          rel='alternate'
          href='https://openplanet.ng/team'
          hrefLang='x-default'
        />
        <meta
          name='description'
          content='Meet the exceptional team behind Openplanet, who drive real estate innovation and provide personalized services. Learn more about our professionals committed to delivering outstanding real estate solutions.'
        />
        <meta
          property='og:title'
          content="Meet Our Team: Experts Behind Openplanet's Success"
        />
        <meta
          property='og:description'
          content='Discover the talented professionals at Openplanet. Get to know the dedicated team that is transforming real estate services and making your dreams a reality.'
        />
        <meta property='og:url' content='https://openplanet.ng/team' />
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
        "@id": "https://openplanet.ng/team"
      },
      "headline": "Meet Our Team: Experts Behind Openplanet's Success",
      "description": "Meet the exceptional team behind Openplanet, who drive real estate innovation and provide personalized services. Learn more about our professionals committed to delivering outstanding real estate solutions.",
      "publisher": {
        "@type": "Organization",
        "name": "Openplanet",
        "logo": {
          "@type": "ImageObject",
          "url": "https://excel-adeniyi.github.io/planetImages/logo_open.png"
        }
      },
      "image": "https://excel-adeniyi.github.io/planetImages/logo_open.png",
      "url": "https://openplanet.ng/team",
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

      <div className='team-banner'>
        <SideBar />
        <ScheduleModal />

        <Navbar />
        <div className='flex items-stretch justify-center h-full text-white mx-3 overflow-hidden'>
          <div className='self-center'>
            <div className='text-center introducing'>Meet Our Team</div>
            <div className='branding'>
              Meet the Visionaries Shaping OpenPlanet's Future
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white'>
        <div className='Lg:mx-24 lg:px-24 mx-4'>
          {team.map((content: any, index: any) => (
            <div key={index} className=''>
              <div className='font-sangbleuBold tracking-wider text-center py-10 text-black uppercase text-3xl'>
                Board Of Directors
              </div>
              <div className='grid lg:grid-cols-3 grid-cols-1 gap-8 text-center'>
                {content.board.map((content: any, index: any) => {
                  return (
                    <div className='my-10 mx-10'>
                      <img
                        key={index}
                        src={content.image || '/default-image.png'}
                        alt={content.name || 'Service Image'}
                        className={` rounded-lg team-image_height fit-content`}
                      />
                      <h3 className='title-content mt-4 mb-3 text-2xl text-black'>
                        {content.name}
                      </h3>
                      <h3 className='font-cormorant text-red-700 '>
                        {content.position}
                      </h3>
                    </div>
                  );
                })}
              </div>
              <div className='font-sangbleuBold tracking-wider text-center py-10 text-black uppercase text-3xl'>
                Management Team
              </div>
              <div className='grid lg:grid-cols-3 grid-cols-1 gap-8 text-center'>
                {content.management.map((content: any, index: any) => {
                  return (
                    <div className='my-10 mx-10'>
                      <img
                        key={index}
                        src={content.image || '/default-image.png'}
                        alt={content.name || 'Service Image'}
                        className={` rounded-lg team-image_height fit-content`}
                      />
                      <h3 className='title-content mt-4 mb-3 text-2xl text-black'>
                        {content.name}
                      </h3>
                      <h3 className='font-cormorant text-red-700 '>
                        {content.position}
                      </h3>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
