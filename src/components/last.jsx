import Logo from '../images/logofooter.svg';
import facebook from '../images/icon-facebook.svg';
import twitter from '../images/icon-twitter.svg';
import pinterest from '../images/icon-pinterest.svg';
import insta from '../images/icon-instagram.svg'

function Last() {
  return (
    <>
        <footer className=' bg-slate-900 py-10 lg:py-20'>
        <div className='max-width grid place-items-center grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-5 '>
         <img src={Logo}/>
         <div>
            <h3 className='text-white text-lg font-bold tracking-wide'>Features</h3>
            <ul>
               <li><button className='text-slate-200 text-sm mt-1'>Analytics</button></li>
            </ul>
               <li><button className='text-slate-200 text-sm mt-1'>Branded Links</button></li>
               <li><button className='text-slate-200 text-sm mt-1'>Link Shortening</button></li>
       </div>
      <div>
            <h3 className='text-white text-lg font-bold tracking-wide'>Resources</h3>
            <ul>
               <li><button className='text-slate-200 text-sm mt-1'>Support</button></li>
            </ul>
               <li><button className='text-slate-200 text-sm mt-1'>Developers</button></li>
               <li><button className='text-slate-200 text-sm mt-1'>Blog</button></li>
      </div>        
         <div>
            <h3 className='text-white text-lg font-bold tracking-wide'>Company</h3>
            <ul>
               <li><button className='text-slate-200 text-sm mt-1'>About</button></li>
               <ul>
                  <li><button className='text-slate-200 text-sm mt-1'>Our Team</button></li>
                  <li><button className='text-slate-200 text-sm mt-1'>Careers</button></li>
                  <li><button className='text-slate-200 text-sm mt-1'>Contact</button></li>
               </ul>
            </ul>
         </div>
         <div>
            <ul className='flex items-center'>
               <li><img src={facebook} className='cursor-pointer'/></li>
               <li className='ml-4 cursor-pointer'><img src={twitter}/></li>
               <li className='mx-5 cursor-default'> <img src={pinterest}/></li>
               <li><img src={insta} className='cursor-pointer'/></li>
            </ul>
         </div>
        </div>
        </footer>
    </>
  )
}
export default Last