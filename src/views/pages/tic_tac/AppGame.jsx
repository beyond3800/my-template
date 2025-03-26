import React from 'react'
import { GameProvider } from '../../../contexts/GameContext'
import Game from './Game'

const AppGame = () => {
    return (
        <GameProvider>
            <Game/>
        </GameProvider>
    )
}

export default AppGame