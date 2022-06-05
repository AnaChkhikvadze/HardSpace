import React, { useState, useEffect } from 'react'
import './Slideshow.css'
import BtnSlider from './BtnSlider'
import Data from './Data'

export default function Slider() {

    const [indexing, setIndexing] = useState(1);
    const [autoScroll, setAutoScroll] = useState(true);

    let slideInterval;
    let intervalTime = 5000;

    const dotMoving = index => {
        setIndexing(index)
    }

    const right = () => {
        if (indexing !== Data.length) {
            setIndexing(indexing + 1)
        }
        else if (indexing === Data.length) {
            setIndexing(1)
        }
    }

    const left = () => {
        if (indexing !== 1) {
            setIndexing(indexing - 1)
        }
        else if (indexing === 1) {
            setIndexing(Data.length)
        }
    }

    function auto() {
        if (autoScroll) {
            slideInterval = setInterval(right, intervalTime)
        }
    }

    useEffect(() => {
        auto();
        return () => clearInterval(slideInterval);
    }, [indexing]
    )

    return (
            <div className="container-slider">
                {Data.map((slide, index) => {
                    return (
                        <div
                            key={slide.id}
                            className={indexing === index + 1 ? "slide active-anim" : "slide"}>
                            <h1>Popular Destinations</h1>
                            <br />
                                <>
                                    <img src={slide.image} alt="slide" style={{ cursor: 'pointer' }} />
                                    <div className='content'>
                                        <h2>{slide.title}</h2>
                                        <p>{slide.price}</p>
                                        <a href= {slide.link} />
                                        <button className="btn" >View More</button>
                                        <a/>
                                    </div>
                                </>
                        </div>
                    )
                })}

                <BtnSlider moveSlide={right} direction={"next"} />
                <BtnSlider moveSlide={left} direction={"prev"} />

                <div className="container-dots">
                    {Array.from({ length: Data.length }).map((item, index) => (
                        <div
                            onClick={() => dotMoving(index + 1)}
                            className={indexing === index + 1 ? "dot active" : "dot"}
                        ></div>
                    ))}
                </div>
            </div>
        // </>
    )
}
