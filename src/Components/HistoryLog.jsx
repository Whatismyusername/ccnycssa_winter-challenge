 import React from 'react'

const HistoryLog = (props) => {
    const { admin, modifiedUser, time, task } = props.info;
    const taskList = props.taskList.list;

    return (
        <div className="log-item">
            <p>{new Date(time).toDateString() + ' ' + new Date(time).toTimeString()}</p>
            <p>Admin <span className='red-font'>{admin.name}</span> <span className='log-email'>{admin.email}</span></p>
            
            {
                task ? (
                    <>
                        
                        <p>Updated Participant <span className='red-font'>{modifiedUser}'s</span> Task:</p>
                        {
                            Object.keys(task).map( id => {
                                return <p className='log-task' key={time + id}>{taskList[id].name} to {task[id] ? (
                                    <span className='green-font'>Completed</span>
                                ) : (
                                    <span className='red-font'>Incomplete</span>
                                )}</p>
                            })
                        }
                    </>
                ) : (
                    <>
                        <p>Created Participant <span className='red-font'>{modifiedUser}</span></p>
                    </>
                )
                
            }
            <p className="log-info"></p>
        </div>
    )
}

export default HistoryLog
