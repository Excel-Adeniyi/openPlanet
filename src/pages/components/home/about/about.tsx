import './styles/styles.css';
import useInteractor from '../../../../hooks/useInteractor';
function About() {
  const { moreRef, storyRef, titleRef, inView, figureeRef } = useInteractor();
  // console.log(inView);
  return (
    <div className='about_style'>
      <div
        ref={titleRef}
        className={`lg:mx-24 lg:px-24 pt-20 px-2 mx-4  text-red-700 about_title ${
          inView ? 'in-view' : ''
        }`}
      >
        Our Story
        <hr className='mt-4 hairline' />
      </div>
      <div
        ref={storyRef}
        className={`lg:mx-24 lg:px-24 mx-4 about_text ${
          inView ? 'in-view' : ''
        }`}
      >
        From the prestigious neighborhoods of Maitama to the dynamic landscapes
        of Abuja, OpenPlanet is redefining real estate with a bold vision. A
        vision rooted in intelligence, shaped by innovation, and driven by
        excellence; a vision that turns every &apos;Is it possible?&apos; into
        &apos;It&apos;s already done!&apos; OpenPlanet stands as the epitome of
        modern living and the hallmark of luxury in the capital city –{' '}
        <strong className='font-bold'>OPENPLANET</strong>.
      </div>
      <div className='grid lg:grid-cols-2 grid-cols-1 lg:mx-24 mx-4 lg:px-24 mt-10 gap-8'>
        <div className='grid lg:grid-cols-3  grid-cols-1 gap-8 lg:text-start text-center details_container  text-black'>
          <div
            className={`${inView ? ' in-view' : ''} figures`}
            ref={figureeRef}
          >
            <h1 className='style-font'>11</h1>
            <div className='about-describe'>
              Completed projects across the world
            </div>
          </div>
          <div
            className={`${inView ? ' in-view' : ''} figures`}
            ref={figureeRef}
          >
            <h1 className='style-font'>115K +</h1>
            <div className='about-describe'>
              sq.m of prime land for development
            </div>
          </div>
          <div
            className={`${inView ? ' in-view' : ''} figures`}
            ref={figureeRef}
          >
            <h1 className='style-font'>8</h1>
            <div className='about-describe'>
              Projects currently under development
            </div>
          </div>
        </div>
        <div>
          <div className='flex lg:ml-24'>
            <div
              className={`${inView ? ' in-view' : ''} figures`}
              ref={moreRef}
            >
              <div className='more-about_org '>
                Recognized as a rising star in Abuja's luxury real estate
                market, Openplanet is redefining modern living through
                exceptional property development. We focus exclusively on
                creating high-quality residential properties in Abuja, setting
                new standards for comfort, elegance, and sophistication. While
                our journey is rooted in Abuja, our vision extends to exploring
                mixed-use, commercial, and hospitality developments in the
                future. Openplanet is committed to becoming a name synonymous
                with excellence, innovation, and luxury in Nigeria's real estate
                landscape.
              </div>
              <div
                className={`${inView ? ' in-view' : ''} figures mt-2`}
                ref={moreRef}
              >
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
