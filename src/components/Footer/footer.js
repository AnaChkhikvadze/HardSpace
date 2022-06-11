import React from 'react'
import './footer.css'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'


function Footer() {
    return (
        <div className='footer'>
            <div className="footer-container">
                <div className="top">
                    <a href="#">
                        <Link to="/"><h3 className='footerLogo' ><span style={{ color: '#112d32', fontSize: '25px'}}>Hard</span><span style={{ color: '#88bdbc', fontSize: '25px' }}>Space</span></h3></Link>
                    </a>
                    <div className="social" >
                        <a href="#faq" className='fb'><FaFacebook size={'1.5em'} /> </a>
                        <a href="#faq" className='insta'><FaInstagram size={'1.5em'} /> </a>
                        <a href="#faq" className='twitter'><FaTwitter size={'1.5em'} /></a>
                        <a href="#faq" className='youtube'><FaYoutube size={'1.5em'} /></a>
                    </div>
                </div>
                <div className="bottom">
                    <div className="left">
                        <ul>
                            <li>
                                <Link to="/about" className='footerLink'>about</Link>
                            </li>
                            <li>
                                <Link to="/destinations" className='footerLink'>Destinations</Link>
                            </li>
                            <li>
                                <Link to="/terms" className='footerLink'>Terms</Link>
                            </li>
                            <li>
                                <Link to="/advertising" className='footerLink'>Advertising</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="right">
                        <ul>
                            <li>
                                <Link to="/faq" className='footerLink'>FAQ</Link>
                            </li>
                            <li>
                                <Link to="/blogs" className='footerLink'>Blogs</Link>
                            </li>
                            <li>
                                <Link to="/book" className='footerLink'>Book</Link>
                            </li>
                            <li>
                                <Link to="/contact" className='footerLink'>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer