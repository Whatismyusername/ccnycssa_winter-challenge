import React, { useState, useEffect } from 'react'
import { participantDb } from '../firebase'

import Participants from './Participants'
import Detail from './Detail'
import NewUser from './NewUser'
import LeaderBoardSearchBar from './LeaderBoardSearchBar'
import '../CSS/leaderboard.css'

import avatar from '../Images/avatar.png'
import crown from '../Images/crown.png'
import star from '../Images/star.png'
import task from '../Database/task.json'

const LeaderBoard = (props) => {
    const [participantList, setParticipantList] = useState([]);
    const [personDetail, setPersonDetail] = useState(null);
    const [isAddingNewUser, setIsAddingNewUser] = useState(false);
    const [userInput, setUserInput] = useState(new Set());

    
    useEffect(() => {
        participantDb.on('value', snap => {
            setParticipantList(snap.val());
        })
    }, []);

    const isSearched = (name) => {
        let nameSet = new Set();
        for(let char of name){
            nameSet.add(char.toUpperCase());
        }

        for(let char of userInput) {
            if(!nameSet.has(char)) {
                return false;
            }
        }
        return true;
    }

    return(
        <section id='leaderboard-section'> 
            <h1 className="title">Leader Board</h1>
            <div className="leaderboard-container">
                <LeaderBoardSearchBar getInput={setUserInput} />
                <div className="leaderboard-heading">
                    <div>
                        Rank
                        <img src={crown} alt="" />
                    </div>
                    <div>
                        Name
                        <img src={avatar} alt="" />
                    </div>
                    <div>
                        Score
                        <img src={star} alt="" />
                    </div>
                </div>
                <hr/>
                {   (participantList && !personDetail) && 
                    participantList.map( (Person, idx) => {
                        return isSearched(Person.name) && <Participants key={idx+Person.id} Person={Person} getPersonDetail={setPersonDetail}/>
                    })
                }

                {
                    props.currentAdmin && 
                    <div className="leaderboard-item">
                        <div onClick={() => setIsAddingNewUser(true)}>Add New Participant</div>
                    </div>
                }

                {
                    isAddingNewUser && <NewUser setIsAddingNewUser={setIsAddingNewUser} currentAdmin={props.currentAdmin}/>
                }
                
            </div>
            {
                personDetail && 
                <Detail 
                    Person={personDetail} 
                    Task={task} 
                    getPersonDetail={setPersonDetail} 
                    currentAdmin={props.currentAdmin}
                    participantList={participantList}/>
            }
        </section>
    )
}

export default LeaderBoard;