import React from 'react'
import './App.css';
import {AnimatePresence, motion} from 'framer-motion'
import member1Image from './member1_image.jpg' 
import member2Image from './member2_image.jpg' 
import ArrowIcon from './ArrowIcon';
import CloseIcon from './CloseIcon';
import { circIn } from "framer-motion"

const Modal = (props) => {

    const modalVariants = {
        initial: {
            scale: 0,
            opacity: 0,
            y: 250
        },
        open: {
            scale: 1,
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 800,
                damping: 55
            }
        },
        close: {
            scale: 0,
            opacity: 0,
            transition: {
                type: 'tween',
                duration: 0.15,
                ease: circIn
            }
        }
    }

  return (
    <div>
        <AnimatePresence>
            {props.modalState && ( 
            <motion.div className='modal' 
                variants={modalVariants}
                initial='initial'
                animate='open'
                exit='close'
                >
                <div className="u-display-flex flex-align-start flex-justify-space-between">
                    <div className="u-display-flex u-flex-column">
                        <h1 className='u-text-semibold u-mb-0.15'>Members</h1>
                        <div className="text-1 u-text-grey">Manage who has access to this file.</div>  
                    </div>
                <CloseIcon btnClick = {props.closeModal} />
                </div>    
                <form className="u-display-flex flex-gap-0.5">
                    <input className="searchbox" type = 'search' placeholder='Type email...' aria-label='Search'>
                    </input>
                    <button className="btn-modal cc-ghost">
                        <div>Can view</div>
                        <ArrowIcon />
                    </button>
                    <div className="btn-modal">Invite</div>
                </form>
                <div className="u-display-flex u-flex-column flex-gap-1.4 u-mt-0.5">
                    <div className="u-display-flex flex-justify-space-between">
                        <div className="u-display-flex flex-gap-0.5">
                            <img src = {member1Image} className="u-w-2.5 u-h-2.5"></img>
                            <div className="u-display-flex u-flex-column">
                                <div className="text-1">Jerome Bell</div>
                                <div className="text-0.95 u-text-grey">jerome.bell@innovara.com</div>
                            </div>
                        </div>
                        <button className="btn-modal cc-ghost">
                            <div>Can view</div>
                            <ArrowIcon />
                        </button>
                    </div>
                    <div className="u-display-flex flex-justify-space-between">
                        <div className="u-display-flex flex-gap-0.5">
                            <img src = {member2Image} className="u-w-2.5 u-h-2.5"></img>
                            <div className="u-display-flex u-flex-column">
                                <div className="text-1">Esther Howard</div>
                                <div className="text-0.95 u-text-grey">esther.howard@innovara.com</div>
                            </div>
                        </div>
                        <button className="btn-modal cc-ghost">
                            <div>Can edit</div>
                            <ArrowIcon />
                        </button>
                    </div>
                </div>
            </motion.div> 
            )}
        </AnimatePresence>
    </div>
  )
}

export default Modal