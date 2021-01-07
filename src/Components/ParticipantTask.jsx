import React, { useState, useEffect } from 'react'

import '../CSS/participantTask.css'
const ParticipantTask = (props) => {
    const { id } = props;
    const { name, level } = props.task;
    const [isComplete, setIsComplete] = useState(props.isComplete);
    const [isModified, setIsModified] = useState(false);
    const currentAdmin = props.currentAdmin;

    const changeCompletionState = () => {
        setIsComplete(!isComplete);
        setIsModified(!isModified);
        
    }

    useEffect(() => {
        props.updateTask(id, isModified);
    })

    return(
        <div className="participantTask-container">
            <h3><span className={'participant-task-l' + level}>{level}</span> {name}</h3>
            {
                currentAdmin ? (
                    <div style={{display:'flex', alignItems:'center'}}>
                        {isModified && <p style={{marginRight:'10px'}}>Modified </p>}
                        <div id="task-toggle-wrapper">
                            <input id={"task-admin-input-" + id} type="checkbox" checked={isComplete} onChange={changeCompletionState}/>
                            <label htmlFor={"task-admin-input-" + id} className="task-admin-toggle" ></label>
                        </div>
                    </div>
                )
                : (
                    isComplete ? <h3 className="completedTask">Completed</h3>
                    : <h3 className="incompleteTask"> Incomplete</h3>
                )
            }
        </div>
    )
}

export default ParticipantTask;