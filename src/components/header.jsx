import Logo from '../images/logo.svg';
import '../App.css'
function Header() {
  return (
    <div>
        <div className='header'>
          <div className='logo-nav'>
        <img src={Logo}/>
        <button>Features</button>
        <button>Pricing</button>
        <button>Resources</button>
        </div>
        <div className='sign-nav'>
        <button>Login</button>
        <button>Sign Up</button>
        </div>
        </div>
    </div>
  )
}
export default Header;