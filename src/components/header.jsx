import { useState } from 'react';
import Logo from '../images/logo.svg';
import menu from '../images/icon-menu.svg';
import close from'../images/icon-close.svg';

function Header() {
  const [isOpen, setisOpen] = useState(false)
  return (
    <>
      <header className="header max-width py-5
      ">
      <div className='flex items-center justify-between'>
        <img src={Logo}/>

       {isOpen && (
        <div className='absolute left-5 right-5 rounded bg-slate-900 text-slate-200 top-20 text-center py-10 md:relative md:top-0 md:left-0 md:right-0 md:bg-transparent md:text-slate-700 md:text-left md:py-0 md:flex md:items-center'>
        <nav cl>
          <ul className='md:flex items-start justify-start'>
            <li><button>Features</button></li>
            <li className="my-5 md:my-0 md:mx-5"><button>Pricing</button></li>
            <li><button>Resources</button></li>
          </ul>
        </nav>
        <ul className='md:flex items-center justify-center'>
          <li className='my-5 md:my-0 md:mr-3 md:ml-5'> <button>Login</button></li>
          <li><button className='btn-cta rounded-full'>Sign Up</button></li>
        </ul>

     
     </div>
     )}
     <div className="hidden md:flex md:justify-around text-center">
     <ul className='md:flex items-start justify-start md:mt-2 md:ml-0 md:mr-80'>
            <li><button>Features</button></li>
            <li className="my-5 md:my-0 md:mx-5"><button>Pricing</button></li>
            <li><button>Resources</button></li>
          </ul>
     <ul className='md:flex items-center justify-center'>
          <li className='my-5 md:my-0 md:mr-3 md:ml-5'> <button>Login</button></li>
          <li><button className='btn-cta rounded-full'>Sign Up</button></li>
        </ul>
     </div>
     <button onClick={()=>setisOpen(!isOpen)} className='md:hidden'>
      
       {isOpen ? <img src={close}/>: <img src={menu}/>}
     </button>
     </div>
      </header>
       
        
    </>
  )
}
export default Header;