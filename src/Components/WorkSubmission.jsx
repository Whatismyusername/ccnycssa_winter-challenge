import React from 'react'

import "../CSS/workSubmission.css"
import googleDrive from '../Images/Submission/google_drive.jpg'
const WorkSubmission = () => {
    return (
        <section id='work-section'>
            <h1 className='title'>Work Submission</h1>
            <div className='work-submission-wrapper'>
                <div id='work-description'>
                    <h1 className='cn' style={{fontSize: '3rem', textAlign: 'center'}}>两种提交方式</h1><hr/>
                    <div className='work-submission-container'>
                        <h1 className='work-subtitle'>01 上传作品至Google Drive</h1>
                        <p>即日起01/08/2021至01/16/2021，为期9天，<br/>
                        参赛者需要在自己的Google Drive创建一个folder，<br/>
                        并填写下方表格提交link，<br/>
                        每完成一项挑战可随时上传照片/视频到folder~</p>
                        <a className='cn' href='https://docs.google.com/forms/d/e/1FAIpQLSd4jNlIHG-MfuQ6COrUBwPfz3wNzNUvu2i06BN1elyUSsc2vg/viewform' target='_blank' rel='noreferrer' >
                            投稿链接
                        </a>
                    </div> <hr/>
                    <div className='work-submission-container'>
                    <h1 className='work-subtitle'>02 上传作品至Instagram</h1>
                        <p>若使用ins投稿，则需在ins上@ccnycssa，<br/>
                        并且加上话题#ccnycssa挑战2021。<br/>
                        使用此方法上传投稿的小伙伴们也记得要保留一份原件。</p>
                        <a className='cn' href='https://www.instagram.com/ccnycssa/' target='_blank' rel='noreferrer' >
                            投稿链接
                        </a>
                    </div>
                </div>
                <div id='google-drive-img'>
                    <img  src={googleDrive} alt='google drive' />
                </div>
            </div>
        </section>
    )
}

export default WorkSubmission