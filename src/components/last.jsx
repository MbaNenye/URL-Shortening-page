import Logo from '../images/logo.svg';
import facebook from '../images/icon-facebook.svg';
import twitter from '../images/icon-twitter.svg';
import pinterest from '../images/icon-pinterest.svg';
import insta from '../images/icon-instagram.svg'
import '../App.css'
function Last() {
  return (
    <div>
        <div className='last'>
         <img src={Logo}/>
         <div>
            <h2> Features</h2>
            <p className='text-white'>Link Shortening</p>
            <p>Branded Links</p>
            <p>Ananlytics</p>
         </div>
         <div>
            <h3>Resources</h3>
            <p>Blog</p>
            <p>Developers</p>
            <p>Support</p>
         </div>
         <div>
            <h2>Company</h2>
            <p>About</p>
            <p>Our Team</p>
            <p>Careers</p>
            <p>Contact</p>
            
         </div>
         <div>
          <img src={facebook}/>
          <img src={twitter}/>
          <img src={pinterest}/>
          <img src={insta}/>
         </div>
        </div>
    </div>
  )
}
export default Last