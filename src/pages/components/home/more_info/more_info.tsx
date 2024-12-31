import './styles/styles.css';
export default function MoreInfo() {
  return (
    <div className='more_info_style flex items-stretch justify-center text-white relative'>
      <div className='text-ceter  self-center'>
        <h1 className='content1 my-10'>Revolutionizing</h1>
        <h1 className='content2 my-10'>Opulence</h1>
        <div className='grid grid-cols-3 gap-2 my-10'>
          <h1 className='content3'>Lifestyle</h1>
          <div className='col-span-2 content4'>
            To be essential, one must be affluent. That's why at OpenPlanet, we
            continually set benchmarks and break boundaries, as we believe that
            genuine architecture should captivate you!
          </div>
        </div>
      </div>
    </div>
  );
}
