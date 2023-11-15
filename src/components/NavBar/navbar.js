import React from 'react'
import './navbar.css'
import logo from '../../resources/logo.png'
import { Link } from 'react-scroll'

export const Navbar = () => {
  return (
    <nav className = "navbar">
        <img src={logo} alt="logo"/>
        <div className='desktopMenu'>

        </div>
        <button className='desktopMenuBtn'>
        <img src="" alt="" className='desltopMenuImg'/>Contact Me
        </button>
    </nav>
  )
}

export default Navbar