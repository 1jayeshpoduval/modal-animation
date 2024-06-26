import React from 'react'
import {motion} from 'framer-motion'
import './App.css'
import Modal from './Modal'

const CloseIcon = (props) => {
  
  return (
    <motion.button  className='close-icon'
                    initial = {{
                      backgroundColor: '#fff'
                    }} 
                    whileHover= {{
                      backgroundColor:'#f4f4f4'
                    }} 
                    transition={{
                      type: 'tween',
                      duration: 0.1
                    }}
                    onClick={props.btnClick}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 10.587L16.9502 5.63696L18.3642 7.05096L13.4142 12.001L18.3642 16.951L16.9492 18.365L11.9992 13.415L7.05023 18.365L5.63623 16.95L10.5862 12L5.63623 7.04996L7.05023 5.63796L12.0002 10.587Z" fill="black"/>
</svg>
    </motion.button>
  )
}

export default CloseIcon