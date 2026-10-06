import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass, faCircleXmark} from '@fortawesome/free-solid-svg-icons'
import './InputBuscar.css'

function InpuntBuscar() {
  return (
    <div className='Container-buscar'>
      <button className='Btn-Buscar'>
        <FontAwesomeIcon icon={faMagnifyingGlass} className='Icon-Buscar'/>
      </button>
      <input type="text" className='Input-buscar'/>
      <button className='Btn-Cancelar'>
        <FontAwesomeIcon icon={faCircleXmark} className='Icon-Cancelar'/>
      </button>
    </div>
  )
}

export default InpuntBuscar

