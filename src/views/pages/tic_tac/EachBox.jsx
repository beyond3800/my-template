import React from 'react'
import { useGameContext } from '../../../contexts/GameContext'

const EachBox = ({box}) => {
    const { playerClick, player, computer, playing} = useGameContext()
    return (
        <div className={`w-24 h-24 border flex justify-center ${box.pick === player &&'text-white' || box.pick === computer && 'text-red-600'} items-center text-7xl ${!playing ? 'deativated' : 'cursor-pointer'}`}
            onClick={() => playerClick(box)}>
            {box.pick}
        </div>
    )
}

export default EachBox