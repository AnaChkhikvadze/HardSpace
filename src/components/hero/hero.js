import React from 'react'
import "./hero.css"
import Video from '../../source/vdo.mp4'
import { AiOutlineSearch } from 'react-icons/ai'

function Hero() {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={Video} type='video/mp4' />
            </video>
            <div className='overlay'></div>
            <div className='hero-content'>
                <h1>Let's Get Lost</h1>
                <h2>Organazing Trips Is What We Do</h2>
                <form className="form">
                    <div>
                        <input type="text" placeholder='Search Trips...' />
                    </div>
                    <div>
                        <button className='hero-button'><AiOutlineSearch className='hero-search' /></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Hero