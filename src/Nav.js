import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {
    const [show, handleShow] = useState(false);
    const transitionNavbar = () => {
        if(window.scrollY > 100){
            handleShow(true);
        }
        else{
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavbar);
        return () =>  window.removeEventListener("scroll", transitionNavbar); 
    }, [])

  return (
     <div className={`nav ${show &&`nav__black`}`}>
        <div className="nav__contents">
            <img
                className="nav__logo" 
                src="https://www.abacustechnologies.com/wp-content/uploads/2020/05/580b57fcd9996e24bc43c529.png"
                alt=""
            />
            <img 
                className="nav__avatar"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt=""
            />
        </div>
    </div>
  )
}

export default Nav