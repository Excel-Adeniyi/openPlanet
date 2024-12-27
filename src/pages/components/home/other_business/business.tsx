import './styles/styles.css';
export default function OtherBusiness() {
  return (
    <div className='bg-white px-24  relative'>
      <div>
        <hr className='border-l-2 border-slate-300' />
      </div>
      <div className='mt-4 pb-10 text-black business_title'>
        <h2 className='text-2xl'>Other Businesses</h2>
      </div>
      <div className='grid grid-cols-3 gap-8 py-10 '>
        <div className='flex justify-center'>
          <div className='border-2  card '>
                <img src='https://excel-adeniyi.github.io/planetImages/Alhaja Binta K..png' className='w-full h-full card-img'/>
          </div>
        </div>
        <div className='flex justify-center'>
          <div className='border-2  card '>
          <img src='https://excel-adeniyi.github.io/planetImages/princess_oregon.png' className='w-full h-full card-img'/>
          </div>
        </div>
        <div className='flex justify-center'>
          <div className='border-2 card '>
          <img src='https://excel-adeniyi.github.io/planetImages/jacob_n.png' className='w-full h-full card-img'/>
          </div>
        </div>
      </div>
    </div>
  );
}
