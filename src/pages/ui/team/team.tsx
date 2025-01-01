import ScheduleModal from '../../../global/modal/schedule_modal';
import Navbar from '../../../layouts/navbar';
import SideBar from '../../../layouts/sidebar';
import team from '../../../data/team_data.json';
import './style/style.css';
import Footer from '../../../layouts/footer';

export default function Team() {
  return (
    <div>
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
        <div className='font-sangbleuBold tracking-wider text-center py-10 text-black uppercase text-3xl'>
          Board Of Directors
        </div>
        <div className='Lg:mx-24 lg:px-24 mx-4'>
          <div className='grid lg:grid-cols-5 grid-cols-1 gap-8 text-center'>
            {team.map((content: any, index: any) => (
              <>
                {content.image && (
                  <div className='my-10'>
                    <img
                      key={index}
                      src={content.image || '/default-image.png'}
                      alt={content.name || 'Service Image'}
                      className={` rounded-lg team-image_height`}
                    />
                    <h3 className='title-content mt-4 mb-3 text-2xl text-black'>{content.name}</h3>
                    <h3 className='font-cormorant text-red-700 '>
                      {content.position}
                    </h3>
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
