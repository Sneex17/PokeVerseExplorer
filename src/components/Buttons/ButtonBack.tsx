import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import './ButtonBack.css'
type ButtonProps = {
    OnVolver: () => void;
}
function ButtonBack({OnVolver} : ButtonProps) {
  return (
    <div className='Container-Btn'>
      <button className='Btn-Volver' onClick={OnVolver}>
        <FontAwesomeIcon icon={faChevronLeft} className='Container-Icon'/>
        <h4 className='Text-Btn'>Volver</h4>
      </button>
    </div>
  )
}

export default ButtonBack
