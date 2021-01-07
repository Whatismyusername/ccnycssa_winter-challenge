import React, { useEffect, useState } from 'react'
import { changeHistoryDb } from '../firebase'

import HistoryLog from './HistoryLog'
import '../CSS/history.css'
import task from '../Database/task.json'

const ChangeHistory = () => {
    const [history, setHistory] = useState(null);
    
    useEffect(() => {
        changeHistoryDb.on('value', snap => {
            setHistory(snap.val());
        });
    }, []);

    return (
        <section>
            <h1 className='title'>Change History</h1>
            <div className='log-container'>
                {
                    history !== null? (
                        Object.keys(history).slice(0).reverse().map( id => {
                            return <HistoryLog key={id} info={history[id]} taskList={task}/>
                        })
                        
                    ) : (
                        <div>

                        </div>
                    )
                    
                }
            </div>
        </section>
    )
}

export default ChangeHistory;