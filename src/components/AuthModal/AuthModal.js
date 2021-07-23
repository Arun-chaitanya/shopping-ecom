import React, { useRef, useState } from 'react'
import './AuthModal.scss'
import '../Login/Login'
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';

function AuthModal() {
  const [isModalOpen, setIsModalOpen] = useState(true)
  
  const authModalRef = useRef();

  const closeModal = (e) => {
    if (e.target === authModalRef.current) {
      setIsModalOpen(false)
    }
  }  

  return (
    isModalOpen && (
    <div className="authModal" ref={authModalRef} onClick={closeModal}>
      <div className="authContent">
        <img className = "logo" src="https://upload.wikimedia.org/wikipedia/commons/6/69/Banana.png" alt=""/>
        <div className="authFormContent">
          <SignUp/>
        </div>
      </div>
    </div>)
  )
}

export default AuthModal
