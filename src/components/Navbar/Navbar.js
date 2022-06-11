import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import './NavbarStyle.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)


    return (
        <div className='Navbar'>
            <div className='nav-container'>
                <a href="#">
                    <h2><Link to='/'><span style={{ color: '#112d32' }}>Hard</span><span style={{ color: '#88bdbc' }}>Space</span></Link></h2>
                </a>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <a>
                    <Link to='/' className='homeNav'>Home</Link>
                    </a>
                    </li>
                    <li>
                    <a>
                    <Link to='/destinations' className='navLink'>Destinations</Link>
                    </a>
                    </li>
                    <li>
                    <Link to='/blogs' className='navLink'>Blogs</Link>
                    </li>
                    <li>
                        <Link to='/about' className='navLink'>About</Link>
                    </li>
                    <li>
                        <Link to='/contact' className='navLink'>Contact</Link>
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