import React from 'react'

const Participants = (props) => {
    const {rank, name, score} = props.Person;

    const getClassName = (rank) => {
        if (rank === 1) {
            return "leaderboard-gold";
        } else if (rank === 2) {
            return "leaderboard-silver";
        } else if (rank === 3) {
            return "leaderboard-bronze";
        }
    }

    return(
        <div className="leaderboard-item" id={getClassName(rank)} onClick={() => props.getPersonDetail(props.Person)}>
            <div>{rank}</div>
            <div>{name}</div>
            <div>{score}</div>
        </div>
    )
}

export default Participants;