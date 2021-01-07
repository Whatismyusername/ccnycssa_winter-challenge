import React from 'react'
import logo from "../Images/cssa_logo.png"

const NavBar = (props) => {
    const currentAdmin = props.currentAdmin;
        
    const onClickBurger = () => {
        const nav = document.querySelector('header');

        nav.classList.toggle('nav-active');
    }

    const closeNav = () => {
        const nav = document.querySelector('header');

        nav.classList.remove('nav-active');
    }
    return(
        <header id='navbar'>
            <div className='nav-header'>
                <div id='nav-logo-container'>
                    <a href='https://cssaccny.wixsite.com/ccnycssa'>
                        <img src={logo} alt="logo" id="nav-logo" />
                    </a>
                    <h2 className='cn' id='nav-logo-text'>CCNYCSSA</h2>
                </div>
                <div id='burger' onClick={onClickBurger}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

            <ul>
                <div className='cn'>
                    顶(顶)牛(流)挑战
                </div>

                <li onClick={closeNav}>
                    <a href='#intro-section'>Home</a>
                </li>
                <li onClick={closeNav}>
                    <a href='#trailer-section'>Trailer</a>
                </li>
                <li onClick={closeNav}>
                    <a href='#rules-section'>Rules</a>
                </li>
                <li onClick={closeNav}>
                    <a href='#mission-board-section'>Mission Board</a>
                </li>
                <li onClick={closeNav}>
                    <a href='#leaderboard-section'>Leader Board</a>
                </li>
                <li onClick={closeNav}>
                    <a href='#rewards-section'>Rewards</a>
                </li>
                {
                    currentAdmin === undefined ? (
                        <li>
                            <a href='/admin' style={{color: 'rgb(154, 99, 221)'}}>I am an Admin</a>
                        </li>
                    ): (
                        <li>
                            <a href='/' style={{color: 'rgb(154, 99, 221)'}}>Log out as {currentAdmin}</a>
                        </li>
                    ) 
                }
            </ul>

        </header>
    )
}

export default NavBar;