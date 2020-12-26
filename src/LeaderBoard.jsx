import React from 'react'
import ParticipantDB from './ParticipantDB.json'

import Participants from './Participants'

const LeaderBoard = (props) => {
    const inputSet = props.userInput;

    const isSearched = (name) => {
        let nameSet = new Set();

        for(let char of name){
            nameSet.add(char.toUpperCase());
        }

        for(let char of inputSet) {
            if(!nameSet.has(char)) {
                return false;
            }
        }

        return true;
    }

    return(
        <section> 
            <h1 className="title">Leader Board</h1>
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Score</th>
                        {props.isAdmin && <th>Control</th>}
                    </tr>
                </thead>
                <tbody>
                {ParticipantDB.map((Person) => {
                    return isSearched(Person.name) && <Participants key={Person.id} {...Person} isAdmin={props.isAdmin}/>
                })}
                </tbody>
            </table>
        </section>
    )
}

export default LeaderBoard;