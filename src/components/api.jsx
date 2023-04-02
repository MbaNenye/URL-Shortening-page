import {useForm} from 'react-hook-form';
import { useState } from 'react';
import bgMobile from '../images/bg-shorten-mobile.svg';
import bgDesktop from '../images/bg-shorten-desktop.svg';
 //https://api.shrtco.de/v2/shorten?url=

function Api() {
    const [text, setText] = useState("");
    const [links, setLinks] = useState([]);
    const [btnText, setBtnText] = useState("Copy")

    const handleSubmit = (e)=>{
      e.preventDefault()
    
    if(!text){
      alert("Input is empty")
    } else{
      const fetchData = async ()=> {
        const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${text}
        `)
        const data = await res.json();
        console.log(data);
        setLinks(data.result)
        setText("");
      }
      fetchData();
    }
  }
  const handleCopy = ()=>{
    navigator.clipboard.writeText(links.full_short_link)
    setBtnText("Copied!")
  }
  return (
    <div className='max-width api relative'>
        <picture>
          <source media='(min-width:768px)' srcSet={bgDesktop}/>
          <img src={bgMobile}/>
        </picture>
      <form className='form' onSubmit={handleSubmit}>
        <div className='flex flex-col md:flex-row'>
        <input type="url" placeholder= "Shorten your link here" className='w-full py-2 px-4 rounded-lg mb-2 md:mb-0'  value={text} onChange={(e)=>{setText(e.target.value)}}/>
        <button type='submit' className='btn-cta rounded-lg w-full md:w-40 md:ml-5' onClick={handleSubmit}>Shorten It!</button>
        </div>
        </form>
        <div className='flex justify-center flex-col items-center bg-white text-center md:flex-row md:justify-between p-3'>
          <div>
            <h6 className='mb-3 md:mb-0'>{links.original_link
               }</h6>
          </div>
          <div>
            <ul className=' md:flex md:items-center'>
              <li className='md:mr-5'><button className="text-cyan-500">{links.full_short_link
                    }</button></li>
              <li><button onClick={handleCopy} className='btn-cta rounded-lg text-sm focus:bg-slate-800'>{btnText}</button></li>
            </ul>
          </div>
        </div>
    </div>
  )
}
export default Api