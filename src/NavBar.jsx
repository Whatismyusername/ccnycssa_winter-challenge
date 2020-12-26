import React, { useState } from 'react'
import logo from "./cssa_logo.png"

const NavBar = (props) => {
    const [userInput, setUserInput] = useState('');

    const searchRequest = () => {

        const newSet = new Set();
        for (let char of userInput) {
            newSet.add(char.toUpperCase());
        }
        props.getInput(newSet);
        console.log(newSet);
        setUserInput('');

    }

    return(
        <header>
            <nav>
            <img src={logo} alt="logo" id="nav-logo" />
                <h2>
                    <span className="co">CCNYCSSA</span> | 
                    <span className="cn">那些你想做又不敢做的事</span>
                </h2>
            </nav>
            <div id="search-bar">
                <input className="co" value={userInput} onChange={(e) => {setUserInput(e.target.value)}} />
                <button className="co" onClick={searchRequest}>Search</button>
            </div>
        </header>
    )
}

export default NavBar;