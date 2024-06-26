import './App.css';
import Modal from './Modal';
import Button from './Button';
import { useState } from 'react';
import {motion} from 'framer-motion'

function App() {
  const [modalState, setModalState] = useState(false)

  const openModal = () => {
    setModalState(!modalState)
  }

  const closeModal = () => {
    setModalState(false);
  };

  const overlayVariants = {
    initial: {
      opacity: 0,
    },
    onModalOpen: {
      opacity: 1,
      transition: {
        duration: 0.15
      }
    },
  }

  return (
    <section className="section">
      <motion.div className='overlay'
      variants={overlayVariants}
      initial = 'initial'
      animate = {modalState ? 'onModalOpen' : 'initial'}
      ></motion.div>
      <div className='container'>
        <div className='content'>
          <Modal modalState = {modalState} closeModal = {closeModal} />
          <Button buttonClick = {openModal} disabled = {modalState}/>
        </div>
      </div>
    </section>
  );
}

export default App;
