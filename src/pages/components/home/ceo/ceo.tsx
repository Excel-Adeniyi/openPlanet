import './styles/style.css';
export default function CEO() {
  return (
    <div className='bg-white px-24 ceo_container pb-10'>
      <div className='grid grid-cols-3 gap-10'>
        <div>
          <div className='ceo_image__style border-1'>
            <div className='overflow-hidden'>
            <img
              src='https://excel-adeniyi.github.io/planetImages/Headshot1.JPG'
              className='ceo_image rounded-lg w-full h-full shadow-lg'
            />
            </div>
            <div className='uppercase text-black text-center mt-3 text-font_style_bold text-lg'>Adelodun Adejare</div>
            <div className='text-center text-red-700 text-font_style_bold'>MD/CEO Openplant</div>
          </div>
        </div>
        <div className='col-span-2 pr-24 mx-10 py-10'>
          <div className=' pt-24 text-black about_title  border-b-2 '>
            We Excel in Excellence, Grounded in Dedication.
          </div>
          <div className='text-black my-5 text-font_style'>
            OpenPlanet was founded on a passion for innovation and impact. Our
            mission is to craft transformative solutions, redefine
            possibilities, and deliver unforgettable experiences with every
            project we undertake.
          </div>
        </div>
      </div>
    </div>
  );
}
