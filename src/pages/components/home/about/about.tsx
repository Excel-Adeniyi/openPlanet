import './styles/styles.css';
function About() {
  return (
    <div className='about_style'>
      <div className='mx-24 px-24 pt-20 text-red-700 about_title'>
        Our Story
        <hr className='mt-4 hairline' />
      </div>
      <div className='mx-24 px-24 about_text'>
        From the prestigious neighborhoods of Maitama to the dynamic landscapes
        of Abuja, OpenPlanet is redefining real estate with a bold vision. A
        vision rooted in intelligence, shaped by innovation, and driven by
        excellence; a vision that turns every &apos;Is it possible?&apos; into
        &apos;It&apos;s already done!&apos; OpenPlanet stands as the epitome of
        modern living and the hallmark of luxury in the capital city –{' '}
        <strong className='font-bold'>OPENPLANET</strong>.
      </div>
      <div className='grid grid-cols-2 mx-24 px-24 mt-10 gap-8'>
        <div className='grid grid-cols-3 gap-8 text-black'>
          <div>
            <h1 className='style-font'>35</h1>
            <div className='about-describe'>
              Completed projects across the world
            </div>
          </div>
          <div>
            <h1 className='style-font'>400K +</h1>
            <div className='about-describe'>
              sq.m of prime land for development
            </div>
          </div>
          <div>
            <h1 className='style-font'>5</h1>
            <div className='about-describe'>
              Projects currently under development
            </div>
          </div>
        </div>
        <div>
          <div className='flex ml-24'>
            <div>
              <div className='more-about_org '>
                Known as the Rolls Royce of Luxury Real Estate in Nigeria and
                Africa&apos;s most sophisticated Real Estate brand, Sujimoto has
                become a synonym for Luxury at its peak. Our core business focus
                include Residential Development mainly in premium neighborhood
                such as Ikoyi, Banana Island, Abuja, Cape Town, Johannesburg and
                Dubai; mix-used developments, Commercial as well as Hospitality
                Developments.
              </div>
              <div className=' mt-2'>
                <button className='background_color_style'>About Us</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
