import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import Data from "./data"
import "./about.css"

function Profile() {
    return (
        <div class="containerAbout">
            <div className="leftAbout">
                <h1>Who Are We?</h1>
                <br>
                </br>
                <h3>
                    FOR the most wild, yet most homely narrative which I am about to pen,
                    I neither expect nor solicit belief. Mad indeed would I be to expect it, in a case where my very senses reject their own evidence.
                    Yet, mad am I not -- and very surely do I not dream. But to-morrow I die, and to-day I would unburthen my soul.
                    My immediate purpose is to place before the world, plainly, succinctly, and without comment, a series of mere household events. In their consequences, these events have terrified -- have tortured -- have destroyed me. Yet I will not attempt to expound them. To me, they have presented little but Horror -- to many they will seem less terrible than barroques. Hereafter, perhaps, some intellect may be found which will reduce my phantasm to the common-place -- some intellect more calm, more logical, and far less excitable than my own, which will perceive, in the circumstances I detail with awe, nothing more than an ordinary succession of very natural causes and effects.
                </h3>
                <br></br>
                <h3>
                    From my infancy I was noted for the docility and
                    humanity of my disposition. My tenderness of heart was
                    even so conspicuous as to make me the jest of my
                    companions. I was especially fond of animals, and was
                    indulged by my parents with a great variety of pets. With
                    these I spent most of my time, and never was so happy as
                    when feeding and caressing them. This peculiarity of
                    character grew with my growth, and, in my manhood, I
                    derived from it one of my principal sources of pleasure
                </h3>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h1>Our Aims</h1>
                <br>
                </br>
                <h3>
                    FOR the most wild, yet most homely narrative which I am about to pen,
                    I neither expect nor solicit belief. Mad indeed would I be to expect it, in a case where my very senses reject their own evidence.
                    Yet, mad am I not -- and very surely do I not dream. But to-morrow I die, and to-day I would unburthen my soul.
                    My immediate purpose is to place before the world, plainly, succinctly, and without comment, a series of mere household events. In their consequences, these events have terrified -- have tortured -- have destroyed me. Yet I will not attempt to expound them. To me, they have presented little but Horror -- to many they will seem less terrible than barroques. Hereafter, perhaps, some intellect may be found which will reduce my phantasm to the common-place -- some intellect more calm, more logical, and far less excitable than my own, which will perceive, in the circumstances I detail with awe, nothing more than an ordinary succession of very natural causes and effects.
                </h3>
                <br></br>
                <h3>
                    From my infancy I was noted for the docility and
                    humanity of my disposition. My tenderness of heart was
                    even so conspicuous as to make me the jest of my
                    companions. I was especially fond of animals, and was
                    indulged by my parents with a great variety of pets. With
                    these I spent most of my time, and never was so happy as
                    when feeding and caressing them. This peculiarity of
                    character grew with my growth, and, in my manhood, I
                    derived from it one of my principal sources of pleasure
                </h3>
            </div>
            <div className="rightAbout">
                <h1 className="headingProf">Our Team</h1>
                {Data.map((slide) => {
                    return (
                        <div className="aboutCard" >
                            <img src={slide.image} className="aboutImg" alt=""></img>
                            <div className="name">{slide.fullName}</div>
                            <div className="desc">{slide.description}</div>
                            <div className="social" >
                                <a href="#faq" className='fb'><FaFacebook size={'1.5em'} /> </a>
                                <a href="#faq" className='linkdIn'><FaLinkedin size={'1.5em'} /> </a>
                                <a href="#faq" className='twitter'><FaTwitter size={'1.5em'} /></a>
                                <a href="#faq" className='youtube'><FaYoutube size={'1.5em'} /></a>
                            </div>
                            <a href="#" class="contact-btn">Contact Me</a>
                        </div>
                    )
                })}
            </div>
        </div>)
}

export default Profile;