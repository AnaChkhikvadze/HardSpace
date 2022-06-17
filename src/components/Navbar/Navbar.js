import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import './NavbarStyle.css'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const NavLinkStyles = ({ isActive }) => {
        return {
            color: isActive ? '#88bdbc' : 'white',
            fontWeight: isActive ? '800' : '500',
        }
    }

    return (
        <div className='Navbar'>
            <div className='nav-container'>
                <a href="#">
                    <h2><Link to='/'><span style={{ color: '#112d32' }}>Hard</span><span style={{ color: '#88bdbc' }}>Space</span></Link></h2>
                </a>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <a>
                            <NavLink exact to='/' style={NavLinkStyles} className='navLink'>Home</NavLink>
                        </a>
                    </li>
                    <li>
                        <a>
                            <NavLink exact to='/destinations' className='navLink' style={NavLinkStyles}>Destinations</NavLink>
                        </a>
                    </li>
                    <li>
                        <NavLink exact to='/blogs' className='navLink' style={NavLinkStyles}>Blogs</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/about" className='navLink' style={NavLinkStyles}>About</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/contact" style={NavLinkStyles}>
                            Contact
                        </NavLink>
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