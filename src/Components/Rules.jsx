import React from 'react'

import RulesPic from '../Images/rules.png'
import '../CSS/rules.css'
const Rules = () => {

    return(
        <section id='rules-section'>
            <h1 className='title'>Rules</h1>
            <img id='rules-img' src={RulesPic} alt='rules' />
        </section>
    )
}

export default Rules