import computer from '../images/illustration-working.svg';
import '../App.css';
function Section() {
  return (
    <div className='section'>
      <div>
        <img src={computer}/>
        </div>
        <div className='more'>
        <h1>More than just shorter links</h1>
        <p>Build your brand's recognition and get detailed insights on how your links are performing</p>
        <button>get Started</button>
        </div>
    </div>
  )
}
export default Section