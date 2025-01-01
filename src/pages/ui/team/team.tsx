import ScheduleModal from '../../../global/modal/schedule_modal';
import Navbar from '../../../layouts/navbar';
import SideBar from '../../../layouts/sidebar';
import team from '../../../data/team_data.json';
import './style/style.css';
import Footer from '../../../layouts/footer';

export default function OurTeam() {
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
