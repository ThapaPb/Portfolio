import React from 'react'
import './navbar.css'
import logo from '../../resources/logo.png'
import contact from '../../resources/contact.png'

import { Link } from 'react-scroll'

export const Navbar = () => {
  return (
    <nav className = "navbar">
        <img src={logo} alt="logo" className='logo'/>
        <div className='desktopMenu'>
            <Link className='desktopMenuListItem'>Home</Link>
            <Link className='desktopMenuListItem'>About</Link>
            <Link className='desktopMenuListItem'>Portfolio</Link>
            <Link className='desktopMenuListItem'>Personal Projects</Link>

        </div>
        <button className='desktopMenuBtn'>
        <img src={contact} alt="contactLogo" className='desktopMenuImg'/>Contact Me
        </button>
    </nav>
  )
}

export default Navbar