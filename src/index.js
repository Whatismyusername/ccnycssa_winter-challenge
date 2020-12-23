import React from "react"
import ReactDOM from "react-dom"

import logo from "./cssa_logo.png"

import "./index.css"
const ParticipantDB = [
    {
        id: 1,
        rank: 1,
        name: "Susan",
        score: 17,
        task:{
            completed: [1, 3, 5],
            incomplete: [2, 4, 6]
        }
    },
    {
        id: 2,
        rank: 2,
        name: "John",
        score: 12,
        task: {
            completed: [2, 4, 6],
            incomplete: [1, 3, 5]
        }
    },
    {
        id: 3,
        rank: 3,
        name: "Lucas",
        score: 9,
        task: {
            completed: [2, 3],
            incomplete: [1, 4, 5, 6]
        }
    },
    {
        id: 4,
        rank: 4,
        name: "Linda",
        score: 8,
        task: {
            completed: [2, 3],
            incomplete: [1, 4, 5, 6]
        }
    },
    {
        id: 5,
        rank: 5,
        name: "Jeff",
        score: 7,
        task: {
            completed: [6],
            incomplete: [1, 2, 3, 4 ,5]
        }
    }
]

const LeaderBoard = () => {
    return(
        <> 
            <h1 className="title">Leader Board</h1>
            <table>
                <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Score</th>
                </tr>
                {ParticipantDB.map((Person) => {
                    return <Participants key={Person.id} {...Person} />
                })}
            </table>
        </>
    )
}
const Participants = (props) => {
    const {rank, name, score} = props;
    return(
        <tr>
            <td className="#">{rank}</td>
            <td className="name">{name}</td>
            <td className="score">{score}</td>
        </tr>
    )
}


ReactDOM.render(<img src={logo} alt="logo" id="nav-logo" />, document.getElementById("logo"));

ReactDOM.render(<LeaderBoard />, document.getElementById("leader-board"));