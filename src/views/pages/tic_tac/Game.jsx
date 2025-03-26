import React from 'react'
import Content from '../../../components/Content'
import { useGameContext } from '../../../contexts/GameContext'
import Card from '../../../components/card/Card';
import EachBox from './EachBox';
import CustomBtn from '../../../components/button/CustomBtn';

const Game = () => {
    const { boxes, playerName, computer, playing, player, reset, winner,playerScore,computerScore} = useGameContext();
    return (
        <div>
            <Content>
                <div className="flex justify-center items-center flex-col h-full">
                    <Card>
                        <div className={`grid grid-cols-3 w-full box_area `}>
                            {boxes.map((each) => <EachBox key={each.id} box={each} />)}
                        </div>
                    </Card>
                    <div className="w-72 mt-4">
                        <div className="flex justify-between">
                            <div className="">
                                <span>{playerName ? `${playerName}Score` : 'PlayerScore'}</span>
                                <div className='flex justify-center'>{ playerScore}</div>
                            </div>
                            <div className="">{ winner === player&&playerName || winner === computer&& 'computer' || winner === 'draw'&& 'draw'}</div>
                            <div className="">
                                <span>ComputerScore</span>
                                <div className='flex justify-center'>{computerScore}</div>
                            </div>
                        </div>
                        <div className="mt-4">
                            <CustomBtn handleClick={()=>reset()}>Reset</CustomBtn>
                        </div>
                    </div>
                </div>
            </Content>
        </div>
    )
}

export default Game