import React from 'react'

import rank1Reward from '../Images/Rewards/rank1_reward.png'
import rank2Reward from '../Images/Rewards/rank2_reward.png'
import rank3Reward1 from '../Images/Rewards/rank3_reward1.png'
import rank3Reward2 from '../Images/Rewards/rank3_reward2.png'
import rank4Reward from '../Images/Rewards/rank4_reward.png'
import '../CSS/rewards.css'
const Rewards = () => {
    const rewards = [
        {
            rank: 1,
            reward: '$350回血大红包',
            description: '口红/游戏机/鞋子/包包...任意你想要的新年礼物，我们为你买单！$350内含税后+邮费',
            image: rank1Reward
        },
        {
            rank: 2,
            reward: '高配置耳机',
            description:'AirPods Pro',
            image: rank2Reward
        },
        {
            rank: 3,
            reward: '超值精致单品',
            description: 'fuji instax mini 11+film pack 60或Keychron K2 set',
            image:[rank3Reward1, rank3Reward2]
        },
        {
            rank: '4-13',
            reward: '勇于挑战奖红包',
            description: '我们也会准备红包福利给参与挑战的小伙伴们!',
            image: rank4Reward
        }
    ]
    return (
        <section id='rewards-section'>
            <h1 className='title'>Rewards</h1>
            <div id='rewards-wrapper'>
                <div>
                    <div className='rewards-card'>
                        <div className='rewards-card-top' id='rewards-top-1'>
                            <img src={rewards[0].image} alt='' />
                        </div>
                        <div className='rewards-card-bot'>
                            <h1>{rewards[0].reward}</h1>
                            <hr/>
                            <p>{rewards[0].description}</p>
                            <p id='rewards-bot-rank-1'>Rank 1 Reward</p>
                        </div>
                    </div>
                    <div className='rewards-card'>
                        <div className='rewards-card-top' id='rewards-top-2'>
                            <img src={rewards[1].image} alt='' />
                        </div>
                        <div className='rewards-card-bot'>
                            <h1>{rewards[1].reward}</h1>
                            <hr/>
                            <p>{rewards[1].description}</p>
                            <p id='rewards-bot-rank-2'>Rank 2 Reward</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='rewards-card'>
                        <div className='rewards-card-top' id='rewards-top-3'>
                            <img src={rewards[2].image[0]} alt='' />
                            <img src={rewards[2].image[1]} alt='' />
                        </div>
                        <div className='rewards-card-bot'>
                            <h1>{rewards[2].reward}</h1>
                            <hr/>
                            <p>{rewards[2].description}</p>
                            <p id='rewards-bot-rank-3'>Rank 3 Reward</p>
                        </div>
                    </div>
                    <div className='rewards-card'>
                        <div className='rewards-card-top' id='rewards-top-4'>
                            <img src={rewards[3].image} alt='' style={{height: 'auto'}}/>
                        </div>
                        <div className='rewards-card-bot'>
                            <h1>{rewards[3].reward}</h1>
                            <hr/>
                            <p>{rewards[3].description}</p>
                            <p id='rewards-bot-rank-4'>Rank 4-13 Reward</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Rewards