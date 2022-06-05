import React from 'react'
import './footer.css'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'


function Footer() {
    return (
        <div className='footer'>
            <div className="footer-container">
                <div className="top">
                    <a href="#">
                        <h3><span style={{ color: '#112d32' }}>Hard</span><span style={{ color: '#88bdbc' }}>Space</span></h3>
                    </a>
                    <div className="social">
                        <a href="#faq"><FaFacebook /> </a>
                        <a href="#faq"><FaInstagram /> </a>
                        <a href="#faq"><FaTwitter /></a>
                        <a href="#faq"><FaYoutube /></a>
                    </div>
                </div>
                <div className="bottom">
                    <div className="left">
                        <ul>
                            <li>
                                <a href="#">About us</a>
                            </li>
                            <li>
                                <a href="#">Destinations</a>
                            </li>
                            <li>
                                <a href="#">Terms</a>
                            </li>
                            <li>
                                <a href="#">Advertising</a>
                            </li>
                        </ul>
                    </div>
                    <div className="right">
                        <ul>
                            <li>
                                <a href="#faq">FAQ</a>
                            </li>
                            <li>
                                <a href="#">Blogs</a>
                            </li>
                            <li>
                                <a href="#">Book</a>
                            </li>
                            <li>
                                <a href="#">Support</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer