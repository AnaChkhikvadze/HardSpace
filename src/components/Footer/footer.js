import React from 'react'
import './footer.css'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { MdEmail, MdLocalPhone, MdLocationOn } from 'react-icons/md';

function Footer() {
    return (
        <div className='footer'>
            <div className="footer-container">
                <div className="top">
                    <a href="#">
                        <Link to="/"><h3 className='footerLogo' ><span style={{ color: '#112d32', fontSize: '25px' }}>Hard</span><span style={{ color: '#88bdbc', fontSize: '25px' }}>Space</span></h3></Link>
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
                    <div className="center">
                        <form className='newsForm'>
                            <div className="container">
                                <h3> Newsletter</h3>
                            </div>

                            <div className="news">
                                <input type="text" placeholder="Name" name="name" className='newsInput' required></input>
                                <input type="email" placeholder="Email address" name="email" className='newsInput' required></input>
                                <br></br>
                                <label>
                                    <input type="checkbox" name="subscribe"></input> Daily Newsletter
                                </label>
                            </div>

                            <div className="container">
                                <input type="submit" value="subscribe" className='subscribeSubmit'></input>
                            </div>
                        </form>
                    </div>
                    <div class="right">
                        <div className='contactInfos'>
                            <h3 className='contactFooter'> <Link to="/contact">Contact Us</Link></h3>
                            <li>
                                <a ><MdLocalPhone /> +955534234 </a>
                            </li>
                            <li>
                                <a className='contactIcon'><MdEmail /> HardSpaceCompany@gmail.com </a>
                            </li>
                            <li>
                                <a><MdLocationOn /> Kutaisi, Georgia</a>
                            </li>
                            <li>
                                <Link to="#" className='footerLink'>HardSpace.com</Link>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer