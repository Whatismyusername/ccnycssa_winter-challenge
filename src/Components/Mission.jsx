import React, { useEffect, useState } from 'react'

import '../CSS/mission.css'
import info505 from '../Images/Missions/505.JPG'
import info502 from '../Images/Missions/502.jpeg'
import info103 from '../Images/Missions/103.JPG'
const Mission = (props) => {
    const {name, description, level, submitFormat} = props.mission;
    const extraInfoList = [
        {
            id: 505,
            name: "变色龙",
            info: info505
        },
        {
            id: 502,
            name: "给你一个家",
            info: info502
        },
        {
            id: 103,
            name: "服装搭配",
            info: info103
        }
    ];
    const [extraInfo, setExtraInfo] = useState(undefined);
    const [isExtraInfoOn, setIsExtraInfoOn] = useState(false);
    useEffect(() => {
        for(const item of extraInfoList) {
            if(name === item.name) {
                setExtraInfo(item.info);
                break;
            }
        }
        // eslint-disable-next-line
    }, [])

    const closeExtraInfo = (e) => {
        if(e.target.className === 'extra-info-wrapper') {
            setIsExtraInfoOn(false);
        }
    }
    return (
        <>
            <div 
                onClick={extraInfo ? () => setIsExtraInfoOn(true) : undefined} 
                className={'mission-detail-l' + level}
                style={extraInfo ? {cursor: 'pointer'} : undefined}>
                <h3 style={{textAlign: 'center'}}>{name}</h3>
                <div className='mission-level'><div style={{margin:0, textAlign: 'center'}}>{level}</div></div>
                <hr/>
                <p className='mission-description'>{description}</p>
                <br></br>
                <p className='mission-submit-format'>{submitFormat}</p>
                {
                    extraInfo &&
                    <p className='click-for-example-sign'>Click for Example</p>
                }
            </div>
            {
                isExtraInfoOn && (
                    <div onClick={e => closeExtraInfo(e)} className='extra-info-wrapper'>
                        <div className='extra-info-card'>
                            <h1>Example</h1>
                            <hr/>
                            <img src={extraInfo} alt='' />
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Mission