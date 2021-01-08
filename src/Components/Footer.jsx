import React from 'react'

import ccny from '../Images/Logo/ccny.png'
import baruch from '../Images/Logo/baruch.png'
import cso from '../Images/Logo/cso.png'
import hunter from '../Images/Logo/hunter.png'
import lagcc from '../Images/Logo/lagcc.jpg'
import wscu from '../Images/Logo/wscu.png'

import '../CSS/footer.css'
const Footer = () => {

    return (
        <footer>
            <div>
                <h1 className='cn'>主办方</h1>
                <img className='footer-logo' src={ccny} alt='ccny' />
            </div>
            <div>
                <h1 className='cn'>合作方</h1>
                <img className='footer-logo' src={baruch} alt='baruch' />
                <img className='footer-logo' src={cso} alt='cso' />
                <img className='footer-logo' src={hunter} alt='hunter' />
                <img className='footer-logo' src={lagcc} alt='lagcc' />
                <img className='footer-logo' src={wscu} alt='wscu' /> 
            </div>
            
        </footer>
    )
}

export default Footer