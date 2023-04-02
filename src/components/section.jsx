import computer from '../images/illustration-working.svg';
function Section() {
  return (
    <>
    <div className='max-width py-10 lg:py-20 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10 '>
        <div className='text-center md:text-left md:place-items-center'>
        <h1 className='text-5xl lg:text-6xl mb-5 font-bold text-slate-800'>More than just shorter links</h1>
        <p className='lg:text-lg text-slate-400 mb-10'>Build your brand's recognition and get detailed insights on how your links are performing</p>
        <button className='btn-cta rounded-full'>Get Started</button>
        </div>
        <div>
        <img src={computer}/>
        </div>
    </div>
    </>
  )
}
export default Section