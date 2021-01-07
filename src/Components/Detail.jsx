import React, { useState } from 'react'
import { auth, db, participantDb } from '../firebase'

import ParticipantTask from './ParticipantTask'
import "../CSS/detail.css"
import task from '../Database/task.json'

const Detail = (props) => {
    const {rank, name, score} = props.Person;
    const Task = props.Task; // Contains Task.list and Task.level
    const TaskListIds = Object.keys(Task.list);
    const [disableOnClick, setDisableOnClick] = useState(false);
    let taskModified = new Set();

    const completed_task = new Set();
    if(props.Person.completed_task) {

        for(let task_id of props.Person.completed_task) {
            completed_task.add(task_id);
        }

    }
    
    const closeDetail = (e) => {
        if(e.target.id === "detail-wrapper") {
            props.getPersonDetail(null);
        }
    }

    const updateNewTaskList = (id, isModified) => {
        if(isModified) {
            taskModified.add(id);
        } else {
            taskModified.delete(id);
        }
    }

    const saveChanges = () => {
        setDisableOnClick(true);
        let newCompletedTask = new Set(props.Person.completed_task);
        for (let id of taskModified) {
            if (completed_task.has(id)) {
                newCompletedTask.delete(id)
            } else {
                newCompletedTask.add(id);
            }
        }

        // add changeLog
        if(taskModified.size > 0) {
            const admin = {
                name: props.currentAdmin,
                email: auth.currentUser.email
            };
            const time = new Date().getTime(); 
            const modifiedUser = name;
            let task = {};
            for(let id of taskModified) {
                task[id] = newCompletedTask.has(id);
            }

            const log = {
                admin,
                time,
                modifiedUser,
                task
            }

            db.ref('change-history/' + time).set(log);

            callChangeOnFirebase(newCompletedTask);
            props.getPersonDetail(null);
        }
        
    }
    const callChangeOnFirebase = (newCompletedTask) => {
        console.log("changeOnFirebase");
        let newScore = 0;
        for (let item of newCompletedTask) {
            const targetItem = task.list[item];
            const targetScore = task.level[targetItem.level];
            newScore += targetScore;
        }

        const isScoreHigher = newScore > props.Person.score;
        let newPerson = {...props.Person, completed_task: Array.from(newCompletedTask), score: newScore};

        const participantList = props.participantList;
        // Find currentIdx
        let currentIdx;
        for(let idx of Object.keys(participantList)) {
            if(participantList[idx].id === newPerson.id) {
                currentIdx = idx;
            }
        }

        db.ref('participant/' + currentIdx).set(newPerson);

        
        participantDb.once('value').then( snap => {
            if (isScoreHigher && currentIdx > 0) {
                let prevPerson = snap.val()[parseInt(currentIdx)-1];
                while(newPerson.score > prevPerson.score) {
                    console.log(currentIdx);
                    db.ref('participant/' + currentIdx).set({...prevPerson, rank: parseInt(currentIdx)+1});
                    currentIdx--;

                    if(currentIdx > 0) {
                        prevPerson = snap.val()[parseInt(currentIdx)-1];
                    } else {
                        break;
                    }
                }
            } else if (!isScoreHigher && currentIdx < Object.keys(snap.val()).length-1) {
                let nextPerson = snap.val()[parseInt(currentIdx)+1];
                while(newPerson.score < nextPerson.score) {
                    db.ref('participant/' + currentIdx).set({...nextPerson, rank: parseInt(currentIdx)+1});
                    currentIdx++;

                    if(currentIdx < Object.keys(snap.val()).length-1) {
                        nextPerson = snap.val()[parseInt(currentIdx)+1];
                    } else {
                        break;
                    }
                }
            }

            db.ref('participant/' + currentIdx).set({...newPerson, rank: parseInt(currentIdx) + 1});
        })


    }

    return(
        <>
            <div id="detail-wrapper" onClick={closeDetail} style={{cursor: 'pointer'}}>
                <div id="detail-card" style={{cursor: 'default'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <div>
                            <h1 id="detail-name">{name}</h1>
                            <p id="detail-note">Rank: {rank} | Score: {score}</p>
                        </div>
                        {props.currentAdmin && <button id="save-button" onClick={saveChanges} disabled={disableOnClick}>Save Changes</button>}
                    </div>
                    
                    <hr/>
                    <div id="task-container">
                        {
                            TaskListIds.map((id) => {
                                return <ParticipantTask key={id} task={Task.list[id]} id={id} isComplete={completed_task.has(id)} currentAdmin={props.currentAdmin} updateTask={updateNewTaskList} />
                            })
                        }
                        
                    </div>
                    <hr/>
                    <p id="exit-sign">Click anywhere in the gray area to exit...</p>
                </div>
            </div>
        </>
    )
}

export default Detail;