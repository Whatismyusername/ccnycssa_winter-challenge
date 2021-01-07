import React from 'react'

import Trailer from './Trailer'
import '../CSS/intro.css'
const Intro = () => {
    return (
        <>
            <section id='intro-section'>
                <div>
                    <div id='intro-section-title-1'>那些你想做</div>
                    <div id='intro-section-title-2'>又不敢做的事</div>
                </div>
            </section>
            <Trailer />
        </>
    )
}

export default Intro