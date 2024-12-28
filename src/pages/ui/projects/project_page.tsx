import Navbar from '../../../layouts/navbar';
import './styles/styles.css';
export default function ProjectPage() {
  return (
    <div className='bg-white'>
      <div className='projects-banner'>
        <Navbar />
        <div className='flex items-stretch justify-center h-full overflow-hidden'>
          <div className='self-center'>
            <div className='text-center introducing'>Projects</div>
            <div className='branding'>
              Property values are measured on different scales
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
