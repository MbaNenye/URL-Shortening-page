import {useForm} from 'react-hook-form';
import '../App.css';
function Api() {
    const {register, handleSubmit} = useForm();
  return (
    <div className='api'>
        <label>
        <input type="text" name="link" {...register('link')}/>
        </label>
        <button>Shorten It!</button>
    </div>
  )
}
export default Api