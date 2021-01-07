import React, { useState } from 'react'
import { db, participantDb, auth } from '../firebase'

import '../CSS/newUser.css'

const NewUser = (props) => {
    const { setIsAddingNewUser } = props
    const [isShowConfirmWindow, setIsShowConfirmWindow] = useState(false);
    const [newName, setNewName] = useState('');
    const [newParticipant, setNewParticipant] = useState(null);

    const closeWindow = (e) => {
        e.target.className === "new-user-wrapper" && 
        setIsAddingNewUser(false);
    }

    const createUserInstance = () => {
        if(newName.length < 3) {
            alert('Please enter a name greater than or equal to 3 characters');
            return;
        } 

        const time = new Date().getTime(); 
        participantDb.once('value')
            .then( snap => {
                let newIdx = 0
                if(snap.val()) {
                    newIdx = Object.keys(snap.val()).length; // length
                    for(const item of snap.val()) {
                        if(item.name === newName) {
                            alert('Participant ' + newName + ' already exists');
                            return;
                        }
                    }
                }

                setNewParticipant({
                    name: newName,
                    id: time,
                    rank: newIdx + 1,
                    score: 0
                });

                setIsShowConfirmWindow(true);
            });
    }

    const createNewUser = () => {

        const newIdx = newParticipant.rank - 1;
        db.ref('participant/' + newIdx).set(newParticipant);

        const admin = {
            name: props.currentAdmin,
            email: auth.currentUser.email
        };
        const modifiedUser = newName;
        
        const time = newParticipant.id;
        const log = {
            admin,
            time,
            modifiedUser
        }

        db.ref('change-history/' + time).set(log);
        setIsAddingNewUser(false);
        
    }

    return (
        <div className="new-user-wrapper" onClick={(e) => closeWindow(e)}>
            <div className="new-user-card">
            {
                !isShowConfirmWindow ? (
                    <>
                        <h1>Add Participant</h1>
                        <input value={newName} placeholder="Name" onChange={(e) => setNewName(e.target.value)} />
                        <button onClick={createUserInstance}>Add</button>
                    </>
                ) : (

                    <>
                        <h1>Confirm</h1>
                        <p style={{fontSize:'1.5rem'}}>New participant name: <span style={{color:'red'}}>{newName}</span></p>
                        <button onClick={createNewUser}>Confirm</button>
                        <button onClick={() => setIsShowConfirmWindow(false)}>Back</button>
                    </>

                )
            }
            </div>
        </div>
    )
}

export default NewUser;