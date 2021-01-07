import React from 'react'
import '../CSS/trailer.css'

import trailer from '../Images/trailer.mp4'
const Trailer = () => {

    return (
        <section id='trailer-section'>
            <h1 className='title'>Trailer</h1>
            <video controls>
                <source src={trailer} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </section>
    )
}

export default Trailer