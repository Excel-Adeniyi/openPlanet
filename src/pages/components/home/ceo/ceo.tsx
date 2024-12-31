import './styles/style.css';
export default function CEO() {
  return (
    <div className='bg-white w-screen ceo_container h-full pb-10'>
      <div className='grid lg:grid-cols-3 grid-cols-1 lg:gap-10'>
        <div>
          <div className='ceo_image__style border-1 lg:block hidden mx-24'>
            <div className='overflow-hidden'>
              <img
                src='https://excel-adeniyi.github.io/planetImages/Headshot1.JPG'
                className=' rounded-lg w-full h-full shadow-lg'
              />
            </div>
            <div className='uppercase text-black text-center mt-3 text-font_style_bold text-lg'>
              Adelodun Adejare
            </div>
            <div className='text-center text-red-700 text-font_style_bold'>
              MD/CEO Openplant
            </div>
          </div>
        </div>
        <div className='w-screen lg:hidden block'>
          <div>
            <div className='overflow-hidden '>
              <img
                src='https://excel-adeniyi.github.io/planetImages/Headshot1.JPG'
                className='ceo_image rounded-lg mx-5 h-full shadow-lg'
              />
            </div>
            <div className='uppercase text-black text-center mt-3 text-font_style_bold text-lg'>
              Adelodun Adejare
            </div>
            <div className='text-center text-red-700 text-font_style_bold'>
              MD/CEO Openplant
            </div>
          </div>
        </div>
        <div className='lg:col-span-2 lg:pr-24 lg:mx-10 lg:py-10 hidden lg:block px-24'>
          <div className=' lg:pt-24 text-black font-cormorant text-xl  border-b-2 '>
            We Excel in Excellence, Grounded in Dedication.
          </div>
          <div className='text-black my-5 text-font_style'>
            OpenPlanet was founded on a passion for innovation and impact. Our
            mission is to craft transformative solutions, redefine
            possibilities, and deliver unforgettable experiences with every
            project we undertake.
          </div>
        </div>
        <div className="lg:hidden block">
          <div className=' lg:pt-24 text-black ceo_title mx-5 mt-10 border-b-2 '>
            We Excel in Excellence, Grounded in Dedication.
          </div>
          <div className='text-black my-5 text-font_style mx-5'>
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
