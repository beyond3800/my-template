import { createContext, useContext, useEffect, useState } from "react";
import level1 from "../views/pages/tic_tac/gameLevels";

const GameContext = createContext({
    boxes: '',
    playerClick: () => { },
    player: '',
    setPlayer: () => { },
    computer: '',
    playerName: '',
    playing: '',
    reset: () => { },
    winner: '',
    computerScore: '',
    playerScore:'',
})
export const GameProvider = ({ children }) => {
    const getState = () => {
        const board = JSON.parse(localStorage.getItem('board'))
        let playing = localStorage.getItem('playing')
        return { board, playing };
    }
    const [boxes, _setBoxes] = useState(getState().board ? getState().board : level1);
    const [player, setPlayer] = useState('X');
    const [computer, setComputer] = useState('O');
    const [playing, setPlaying] = useState(true);
    const [winner, _setWinner] = useState('');
    const [firstPlay, _setFirstPlay] = useState('');
    const [boxLevel3by3, setBoxLevel3by3] = useState(3);
    const [playerName, setPlayerName] = useState('player');
    const [autoStart, setAutoStart] = useState(true);
    const [playerScore, _setPlayerScore] = useState(0);
    const [computerScore, _setComputerScore] = useState(0);

    // updating the box on any click computer or player
    const setBoxes = (box, player) => {
        _setBoxes(prev =>
            prev.map(eachBox =>
                eachBox.id === box.id
                    ? { ...eachBox, pick: player }
                    :eachBox
            )
        ) 
    }
    // the user plays the game
    const playerClick = (box) => {
        if (!playing || checkWinner()) {
            return
        }
        if (!box.pick) {
            setBoxes(box,player)
            setPlaying(false)
        }
        whoIsPlaying()
    }
    // computer mind where computer decisions are made to attack or defend
    const computerPick = () => {
        let newBoxes = []
        for (let box of boxes) {
            if (!box.pick) {
                newBoxes.push(box) 
            }
        }
        if (newBoxes.length) {
            if (attack()) {
                let box = attack()[0];
                // console.log(box)
                comPlays(box)
            }
            else if (defend()) {
                let box = defend()[0];
                comPlays(box)
            }
            else {
                comPlays(inialPlay());
            }
        }
        setWhoIsPlaying(playing)
    }
    // computer checking if it's turn to play
    const comPlays = (box) => {
        if (!playing) {
            setBoxes(box, computer) 
            setPlaying(true)
        }
    }
    // (upcoming) some special move computer should make 
    const stategies = () => {
    }
    // checking for if inial move is to be taken
    const inialPlay = () => {
        let newBoxes = []
        for (let box of boxes) {
            if (!box.pick) {
                newBoxes.push(box) 
            }
        }
        let random = Math.floor(Math.random() * newBoxes.length);
        let box = newBoxes[random];
        return box;
    }
    // where the computer handles the attacks
    const attack = () => {
        let result
        // rows
        if (loop().computerBoard.row1.length > 1 && loop().emptyBoard.row1.length === 1 ) {
            result = loop().emptyBoard.row1;
        }
        else if (loop().computerBoard.row2.length > 1 && loop().emptyBoard.row2.length === 1) {
            result = loop().emptyBoard.row2;
        }
        else if (loop().computerBoard.row3.length > 1 && loop().emptyBoard.row3.length === 1) {
            result = loop().emptyBoard.row3;
        }
        // cols
        else if (loop().computerBoard.col1.length > 1 && loop().emptyBoard.col1.length === 1) {
            result = loop().emptyBoard.col1;
        }
        else if (loop().computerBoard.col2.length > 1 && loop().emptyBoard.col2.length === 1) {
            result = loop().emptyBoard.col2;
        }
        else if (loop().computerBoard.col3.length > 1 && loop().emptyBoard.col3.length === 1) {
            result = loop().emptyBoard.col3;
        }
        // verticals
        else if (loop().computerBoard.vertical1.length > 1 && loop().emptyBoard.vertical1.length === 1) {
            result = loop().emptyBoard.vertical1;
        }
        else if (loop().computerBoard.vertical2.length > 1 && loop().emptyBoard.vertical2.length === 1) {
            result = loop().emptyBoard.vertical2;
        }
        return result
    }
    // defending if the player is trying to win
    const defend = () => {
        let result
        if (loop().PlayerBoard.row1.length > 1 && loop().emptyBoard.row1.length === 1) {
            result = loop().emptyBoard.row1
        }
        else if (loop().PlayerBoard.row2.length > 1 && loop().emptyBoard.row2.length === 1) {
            result = loop().emptyBoard.row2
        }
        else if (loop().PlayerBoard.row3.length > 1 && loop().emptyBoard.row3.length === 1) {
            result = loop().emptyBoard.row3
        }
        else if (loop().PlayerBoard.col1.length > 1 && loop().emptyBoard.col1.length === 1) {
            result = loop().emptyBoard.col1
        }
        else if (loop().PlayerBoard.col2.length > 1 && loop().emptyBoard.col2.length === 1) {
            result = loop().emptyBoard.col2
        }
        else if (loop().PlayerBoard.col3.length > 1 && loop().emptyBoard.col3.length === 1) {
            result = loop().emptyBoard.col3
        }
        else if (loop().PlayerBoard.vertical1.length > 1 && loop().emptyBoard.vertical1.length === 1) {
            result = loop().emptyBoard.vertical1
        }
        else if (loop().PlayerBoard.vertical2.length > 1 && loop().emptyBoard.vertical2.length === 1) {
            result = loop().emptyBoard.vertical2
        }
        return result
    }
    // setting the winner of each round
    const setWinner = (winner) => {
        setTimeout(() => {
            _setWinner(winner)
            if (winner === player) {
                _setFirstPlay(computer)
                _setPlayerScore(prev => prev + 1)
            }
            if (winner === computer) {
                _setFirstPlay(player)
                _setComputerScore(prev=>prev+1)
            }
        },[0])     
        // console.log(winner)
    }
    // checking if there is winner of each round or draw
    const checkWinner = () => {
        const draw = 'draw'
        // checking if player has won
        if (loop().PlayerBoard.col1.length === boxLevel3by3) {
            return player
        }
        if (loop().PlayerBoard.col2.length === boxLevel3by3) {
            return player
        }
        if (loop().PlayerBoard.col3.length === boxLevel3by3) {
            return player
        }
        if (loop().PlayerBoard.row1.length === boxLevel3by3) {
            return player
        }
        if (loop().PlayerBoard.row2.length === boxLevel3by3) {
            return player
        }
         if (loop().PlayerBoard.row3.length === boxLevel3by3) {
            return player
        }
        if (loop().PlayerBoard.vertical1.length === boxLevel3by3) {
            return player
        }
        if (loop().PlayerBoard.vertical2.length === boxLevel3by3) {
            return player
        }
        // checking if computer has won
        if (loop().computerBoard.col1.length === boxLevel3by3) {
            return computer
        }
        if (loop().computerBoard.col2.length === boxLevel3by3) {
            return computer
        }
        if (loop().computerBoard.col3.length === boxLevel3by3) {
            return computer
        }
        if (loop().computerBoard.row1.length === boxLevel3by3) {
            return computer
        }
        if (loop().computerBoard.row2.length === boxLevel3by3) {
            return computer
        }
        if (loop().computerBoard.row3.length === boxLevel3by3) {
            return computer
        }
        if (loop().computerBoard.vertical1.length === boxLevel3by3) {
            return computer
        }
        if (loop().computerBoard.vertical2.length === boxLevel3by3) {
            return computer
        }
        if (loop().newBoxes.length < 1) {
            return draw
        }
    }
    // handles the important loops of the game
    const loop = () => {
        const emptyBoard = {
            row1: [],
            row2: [],
            row3: [],
            col1: [],
            col2: [],
            col3: [],
            vertical1:[],
            vertical2:[]
        }
        const PlayerBoard = {
            col1:[],
            col2:[],
            col3:[],
            row1:[],
            row3:[],
            row2:[],
            vertical1:[],
            vertical2:[]
        }
        const computerBoard = {
            col1:[],
            col2:[],
            col3:[],
            row1:[],
            row3:[],
            row2:[],
            vertical1:[],
            vertical2:[]
        }
        let newBoxes = [];
        for (let box of boxes) {
            //player picked box 
            if (box.pick === player && box.row === 'row1') {
                PlayerBoard.row1.push(box)
            }
            if (box.pick === player && box.row === 'row2') {
                PlayerBoard.row2.push(box)
            }
            if (box.pick === player && box.row === 'row3') {
                PlayerBoard.row3.push(box)
            }
            if (box.pick === player && box.col === 'col1') {
                PlayerBoard.col1.push(box)
            }
            if (box.pick === player && box.col === 'col2') {
                PlayerBoard.col2.push(box)
            }
            if (box.pick === player && box.col === 'col3') {
                PlayerBoard.col3.push(box)
            }
            if (box.pick === player && box.vertical === 'center') {
                PlayerBoard.vertical1.push(box)
            }
            if (box.pick === player && box.vertical === 'center') {
                PlayerBoard.vertical2.push(box)
            }
            if (box.pick === player && box.vertical === 'vertical1') {
                PlayerBoard.vertical1.push(box)
            }
            if (box.pick === player && box.vertical === 'vertical2') {
                PlayerBoard.vertical2.push(box)
            }
            // computer picked
            if (box.pick === computer && box.row === 'row1') {
                computerBoard.row1.push(box)
            }
            if (box.pick === computer && box.row === 'row2') {
                computerBoard.row2.push(box)
            }
            if (box.pick === computer && box.row === 'row3') {
                computerBoard.row3.push(box)
            }
            if (box.pick === computer && box.col === 'col1') {
                computerBoard.col1.push(box)
            }
            if (box.pick === computer && box.col === 'col2') {
                computerBoard.col2.push(box)
            }
            if (box.pick === computer && box.col === 'col3') {
                computerBoard.col3.push(box)
            }
            if (box.pick === computer && box.vertical === 'center') {
                computerBoard.vertical1.push(box)
            }
            if (box.pick === computer && box.vertical === 'center') {
                computerBoard.vertical2.push(box)
            }
            if (box.pick === computer && box.vertical === 'vertical1') {
                computerBoard.vertical1.push(box)
            }
            if (box.pick === computer && box.vertical === 'vertical2') {
                computerBoard.vertical2.push(box)
            }
            // empty boxes available for computer
            if (box.pick === null && box.row === 'row1') {
                emptyBoard.row1.push(box)
            }
            if (box.pick === null && box.row === 'row2') {
                emptyBoard.row2.push(box)
            }
            if (box.pick === null && box.row === 'row3') {
                emptyBoard.row3.push(box)
            }
            if (box.pick === null && box.col === 'col1') {
                emptyBoard.col1.push(box)
            }
            if (box.pick === null && box.col === 'col2') {
                emptyBoard.col2.push(box)
            }
            if (box.pick === null && box.col === 'col3') {
                emptyBoard.col3.push(box)
            }
            if (box.pick === null && box.vertical === 'center') {
                emptyBoard.vertical1.push(box)
            }
            if (box.pick === null && box.vertical === 'center') {
                emptyBoard.vertical2.push(box)
            }
            if (box.pick === null && box.vertical === 'vertical1') {
                emptyBoard.vertical1.push(box)
            }
            if (box.pick === null && box.vertical === 'vertical2') {
                emptyBoard.vertical2.push(box)
            }
            if (!box.pick) {
                newBoxes.push(box) 
            }
        }
        return { PlayerBoard, computerBoard, emptyBoard, newBoxes };
    }
    // rest the game back to new 
    const reset = () => {
        setWinner(null);
        _setBoxes(prev => prev.map(eachBox => checkWinner() ? { ...eachBox, pick: null } : eachBox))
    }
    // where the computer pick is called 
    useEffect(() => {
        setWinner(checkWinner())
        setTimeout(() => {
            if (!playing && !winner) {
                computerPick();
            } 
            saveBoard()
        }, [1200])
    }, [playing])
    // calls who is playing
    useEffect(() => {
        whoIsPlaying()
        gamesScores()
    }, [winner])
    // checks who is to play at first in every round
    const whoIsPlaying = () => {
        if (winner === player) {
            if (autoStart) {
                setTimeout(() => {
                    setPlaying(false)
                    reset() 
                },[1000])
            } else {
                setPlaying(false)
            }
        }
        if (winner === computer) {
            if (autoStart) {
                setTimeout(() => {
                    // _setFirstPlay(false)
                    setPlaying(true)
                    reset()
                }, [1000])
            } else {
                // _setFirstPlay(false)
                setPlaying(true)
            }
        }
        if (winner === 'draw' && !firstPlay) {
            setTimeout(() => {
                setPlaying(true)
                reset()
            }, [1000]); 
        }
        if (winner === 'draw' && firstPlay === computer) {
            if (autoStart) {
                setTimeout(() => {
                    reset() 
                    setPlaying(false)
                },[1000])
            } else {
                setPlaying(false)
            }
        }
        if (winner === 'draw' && firstPlay === player) {
            if (autoStart) {
                setTimeout(() => {
                    reset() 
                    setPlaying(true)
                },[1000])
            } else {
                setPlaying(true)
            }
        }
    }
    // where the gameState are saved 
    const saveBoard = () => {
        const saved = localStorage.setItem('board', JSON.stringify(boxes))
    }
    // not working yet
    const setWhoIsPlaying = (playing) => {
        localStorage.setItem('playing', playing)
        const getPlaying = localStorage.getItem('playing')
        setPlaying(getPlaying)
        return getPlaying
    }
    const gamesScores = () => {
        const scores = {
            playerScore,
            computerScore
        }
        localStorage.setItem('scores',JSON.stringify(scores))
    }
    useEffect(() => {
        const getPlaying = JSON.parse(localStorage.getItem('playing'))
        // setWhoIsPlaying(getPlaying)
    },[])
    const context = {
        boxes,
        playerClick,
        player,
        computer,
        playerName,
        playing,
        reset,
        winner,
        playerScore,
        computerScore,
    }

    return <GameContext.Provider value={context}>{ children }</GameContext.Provider>
}

export const useGameContext = () => useContext(GameContext)