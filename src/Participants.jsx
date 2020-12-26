import React from 'react'

const Participants = (props) => {
    const {rank, name, score} = props;

    const getClassName = (rank) => {
        if (rank === 1) {
            return "gold";
        } else if (rank === 2) {
            return "silver";
        } else if (rank === 3) {
            return "bronze";
        }
    }

    return(
        <tr className={getClassName(rank)}>
            <td className="#">{rank}</td>
            <td className="name">{name}</td>
            <td className="score">{score}</td>
            {props.isAdmin && <td className="Edit">Edit</td>}
        </tr>
    )
}

export default Participants;