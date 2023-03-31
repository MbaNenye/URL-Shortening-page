import brand from '../images/icon-brand-recognition.svg';
import detail from '../images/icon-detailed-records.svg';
import fully from '../images/icon-fully-customizable.svg';
import '../App.css'
function Advanced() {
  return (
    <div>
        <div className='stat'>
        
        <h1>Advanced Statistics</h1>
        <p>Track how your link sare performing across the web with our advanced statistics dashboard</p>
        </div>
        <div className='allstat'>
            <div className='stat-1'>
            <img src={brand}/>
                <h1>Brand Recognition</h1>
                <p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content</p>
            </div>
            <div className='stat-2'>
                <img src={detail}/>
                <h1>Deatiled Records</h1>
                <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
            </div>
            <div className='stat-3'>
                <img src={fully}/>
                <h1>Fully Customizable</h1>
                <p>
                    Improve brand awareness and content discoverable links, supercharging audience engagement.
                </p>
            </div>
        </div>
        </div>
  )
}
export default Advanced