import brand from '../images/icon-brand-recognition.svg';
import detail from '../images/icon-detailed-records.svg';
import fully from '../images/icon-fully-customizable.svg';

function Advanced() {
  return (
    <>
       <section className='bg-gray-100 pt-32 pb-10 py-10 lg:py-32 max-width lg:pt-20 lg:pb-40'>
        <div >
        <h2 className='text-4xl font-bold text-slate-800 mb-3 text-center'>Advanced Statistics</h2>
        <p className='text-slate-400 text-center mb-10 lg:mb-20'>Track how your links are performing across the web <br></br>with our advanced statistics dashboard</p>
        </div>
        <div className=' card grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 relative'>
            <div className='line'></div>
         <div className='bg-white p-5 rounded mb-3 relative'>
            <img src={brand} className='bg-slate-800 rounded-full p-3 -mt-12'/>
                <h3 className='text-slate-800 text-lg mt-5 mb-2 font-bold'>Brand Recognition</h3>
                <p className='text-slate-400 text-sm'>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content</p>
            </div>
            <div className='bg-white p-5 rounded mb-3 relative'>
                <img src={detail}  className='bg-slate-800 rounded-full p-3 -mt-12'/>
                <h3 className='text-slate-800 text-lg  mt-5 mb-2 font-bold'>Detailed Records</h3>
                <p className='text-slate-400 text-sm'>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
            </div>
            <div className='bg-white p-5 rounded mb-3 relative'>
                <img src={fully} className='bg-slate-800 rounded-full p-3 -mt-12'/>
                <h3 className='text-slate-800 text-lg mt-5 mb-2 font-bold'>Fully Customizable</h3>
                <p className='text-slate-400 text-sm'>
                    Improve brand awareness and content discoverable links, supercharging audience engagement.
                </p>
            </div>
        </div>
        </section>
        </>
  )
}
export default Advanced