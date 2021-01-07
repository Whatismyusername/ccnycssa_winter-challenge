import React, { useState, useEffect } from 'react'
import { changeHistoryDb } from '../firebase'

import '../CSS/leaderBoardSearchBar.css'
const LeaderBoardSearchBar = (props) => {
    const [userInput, setUserInput] = useState('');
    const [latestUpdate, setLatestUpdate] = useState('');

    useEffect(() => {
        changeHistoryDb.on('value', snap => {
            const changes = Object.keys(snap.val());
            const latestUpdateObj = snap.val()[changes[changes.length - 1]];
            setLatestUpdate(latestUpdateObj.time);
        })

    }, []);

    const searchRequest = () => {
        const newSet = new Set();
        for (let char of userInput) {
            newSet.add(char.toUpperCase());
        }
        props.getInput(newSet);
        setUserInput('');
    }

    return(
        <div id='search-bar-container'>
            <p>Last Updated By: <br/>{new Date(latestUpdate).toString()}</p>
            <div id="search-bar">
                <input placeholder='Search by Name' value={userInput} onChange={(e) => {setUserInput(e.target.value)}} />
                <button onClick={searchRequest}>Search</button>
            </div>
        </div>
    )
}

export default LeaderBoardSearchBar