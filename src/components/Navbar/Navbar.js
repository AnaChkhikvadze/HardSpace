import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import './NavbarStyle.css'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)


    return (
        <div className='Navbar'>
            <div className='nav-container'>
                <a href="#">
                    <h2><span style={{ color: '#112d32' }}>Hard</span><span style={{ color: '#88bdbc' }}>Space</span></h2>
                </a>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='/'>Destinations</a>
                    </li>
                    <li>
                        <a href='/'>Blogs</a>
                    </li>
                    <li>
                        <a href='/'>About Us</a>
                    </li>
                </ul>
                <button className='nav-signup'>Account</button>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{ color: 'red' }} />) : (<FaBars size={20} style={{ color: '#88bdbc' }} />)}

                </div>
            </div>
        </div>
    )
}

export default Navbar