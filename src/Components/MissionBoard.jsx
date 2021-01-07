import React, { useState, useEffect } from 'react'
import task from '../Database/task.json'

import Mission from './Mission'
import '../CSS/missionBoard.css'


const MissionBoard = () => {
    const [missions, setMissions] = useState([[], [], [], [], []]); //idx 0 = lvl 1 mission, idx 4 = lvl 5 missions

    const [nowDisplay, setNowDisplay] = useState(0); // 0 === all

    useEffect(() => {
        let tempMissions = [[], [], [], [], []];
        const list = task.list;
        tempMissions[0].push({
            name: 'Level 1 Challenges',
            description: '+3 pts',
            level: 1,
            submitFormat: ''
        })
        tempMissions[1].push({
            name: 'Level 2 Challenges',
            description: '+5 pts',
            level: 2,
            submitFormat: ''
        })
        tempMissions[2].push({
            name: 'Level 3 Challenges',
            description: '+7 pts',
            level: 3,
            submitFormat: ''
        })
        tempMissions[3].push({
            name: 'Level 4 Challenges',
            description: '+10 pts',
            level: 4,
            submitFormat: ''
        })
        tempMissions[4].push({
            name: 'Level 5 Challenges',
            description: '+13 pts',
            level: 5,
            submitFormat: ''
        })
        for (const key of Object.keys(list)) {
            tempMissions[list[key].level - 1].push(list[key]);
        }
        setMissions(tempMissions);
    }, []);

    const isDisplay = (level) => {
        if(nowDisplay === 0 || nowDisplay === level) {
            return true;
        }
        return false;
    }

    const missionNavOnClick = (e, level) => {
        setNowDisplay(level);
        document.querySelector('.mission-nav-active').classList.remove('mission-nav-active');
        document.querySelector('#' + e.target.id).classList.add('mission-nav-active');
    }

    return (
        <section id='mission-board-section'>
            <h1 className="title">Mission Board</h1>
            <div className='mission-wrapper'>
                <div className="mission-nav">
                    <ul>
                        <li id='mission-nav-0' className='mission-nav-active' onClick={ e => missionNavOnClick(e, 0)} >All</li>
                        <li id='mission-nav-1' onClick={ e => missionNavOnClick(e, 1)} >Level 1</li>
                        <li id='mission-nav-2' onClick={ e => missionNavOnClick(e, 2)} >Level 2</li>
                        <li id='mission-nav-3' onClick={ e => missionNavOnClick(e, 3)} >Level 3</li>
                        <li id='mission-nav-4' onClick={ e => missionNavOnClick(e, 4)} >Level 4</li>
                        <li id='mission-nav-5' onClick={ e => missionNavOnClick(e, 5)} >Level 5</li>
                    </ul>
                </div>
                <hr/>
                <div className="mission-container">
                    {
                        isDisplay(1) && (
                            missions[0].map((item, id) => {
                                return <Mission key={id} mission={item} id={id} />
                            })
                        )
                    }
                    {
                        isDisplay(2) && (
                            missions[1].map((item, id) => {
                                return <Mission key={id} mission={item} id={id} />
                            })
                        )
                    }
                    {
                        isDisplay(3) && (
                            missions[2].map((item, id) => {
                                return <Mission key={id} mission={item} id={id} />
                            })
                        ) 
                    }
                    {
                        isDisplay(4) && (
                            missions[3].map((item ,id) => {
                                return <Mission key={id} mission={item} id={id} />
                            })
                        ) 
                    }
                    {
                        isDisplay(5) && (
                            missions[4].map((item, id) => {
                                return <Mission key={id} mission={item} id={id} />
                            })
                        ) 
                    }
                </div>
            </div>
        </section>
    )
}

export default MissionBoard