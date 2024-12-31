export default function AboutTopContent() {
  return (
    <div className='my-24 text-black lg:mx-24 lg:px-24  mx-4  pt-10'>
      <hr className='border-1 border-black' />
      <div className=' tracking-widest uppercase text-sm my-4 text-red-700'>
        Profile at a Glance
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 '>
        <div>
            <div className="font-sangbleu my-4 text-red-700 text-2xl">Elegance Redefined, Harmony Unmatched, Excellence Assured</div>
          <p className='text-sm text-justify'>
            OpenPlanet is a distinguished real estate company headquartered in
            Abuja, passionately redefining the industry with visionary designs,
            lush landscapes, and exceptional living spaces. Since our journey
            began in 2012, we have remained committed to enhancing lives through
            thoughtfully crafted environments that radiate elegance and harmony.
          </p>
          <p className='my-4 text-sm text-justify'>
            Our offerings are tailored for individuals who seek beauty,
            functionality, and a lifestyle rooted in sophistication and
            innovation.
          </p>
        </div>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-6'>
          <div>
            <div className='text-red-700 tracking-widest my-2'>Our Vision</div>
            <div className='text-sm text-justify'>
              To become a trailblazer in Africa’s real estate landscape,
              delivering iconic projects that merge creativity, sustainability,
              and innovation, leaving a lasting legacy of impact and
              distinction.
            </div>
            <div className='text-sm my-4 text-justify'>
              {' '}
              With eight groundbreaking projects currently underway, OpenPlanet
              continues to lead with purpose and passion, crafting spaces that
              resonate with comfort, community, and class. From every foundation
              to the final detail, we aim to transform how people experience
              real estate.
            </div>
          </div>
          <div className="">
            <div className='text-red-700 tracker-widest my-4'>Our Mission</div>
            <div className='text-sm text-justify'>
              To pioneer excellence in real estate by creating unique spaces
              that inspire, nurture, and exceed expectations.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
