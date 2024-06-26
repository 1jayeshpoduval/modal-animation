import React from 'react'
import './App.css'
import { motion } from 'framer-motion'


const Button = (props) => {
  return (
    <div>
        <motion.button className='btn' 
        style = {{backgroundColor: props.disabled ? 'rgba(0,0,0,0.20)' : '#DA4167',
          cursor: props.disabled ? 'auto' : 'pointer',
          color: props.disabled ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,1)'
        }}
        initial={{
          scale: 1
        }} 
        whileHover={
            {scale: props.disabled ? 1 : 1.05}
        }
        transition={{
            type:'tween',
            duration: 0.1

        }}
        onClick={props.buttonClick} disabled = {props.disabled}>Open Modal</motion.button>
    </div>
  )
}

export default Button