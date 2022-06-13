import React, { useRef } from 'react'
import emailjs from 'emailjs-com'
import './contact.css'
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { MdEmail, MdLocalPhone, MdLocationOn } from 'react-icons/md';

export default function Contact() {
    const form = useRef();
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_i1qdqfr', 'template_s44tvp4', form.current, 'eO5tlrmIEcDMg6StI')
            .then((result) => {
                console.log('email sent successfully');
            }, (error) => {
                alert('error sending email');
            });
        //clears the form after sending the email
        e.target.reset();
    }
    return (
        <div className='contact-section'>
            <div className='contact-form'>
                <h3 className='contactUsForm'>Les's Get In Touch</h3>
                <form ref={form} onSubmit={sendEmail} classname="contactForm">
                    <label>Your Name</label>
                    <input type="text" name="from_name" className='contactUser' placeholder='Your Name'></input>
                    <label>Email</label>
                    <input type="email" name="reply_to" className='contactUser' placeholder='Email'></input>
                    <label>Message</label>
                    <textarea name="message" className='textUser' placeholder='Say Hi...' />
                    <input type="submit" value="Send" className='contactSubmit'></input>
                </form>
            </div>

            <div class="contact-info">
                <h3 className='contactUs'>Contact Us</h3>
                <div className='contact'>
                    <div className="left">
                        <a ><MdLocalPhone /> +955534234 </a>
                        <br></br>
                        <a className='contactIcon'><MdEmail /> HardSpaceCompany@gmail.com </a>
                        <br></br>
                        <a><MdLocationOn /> Kutaisi, Georgia</a>
                    </div>
                    <div className="social" >
                        <a href="#faq" className='fb'><FaFacebook size={'1.5em'} /> </a>
                        <a href="#faq" className='linkdIn'><FaLinkedin size={'1.5em'} /> </a>
                        <a href="#faq" className='twitter'><FaTwitter size={'1.5em'} /></a>
                        <a href="#faq" className='youtube'><FaYoutube size={'1.5em'} /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
