import React, { useState, useEffect } from "react"
import Square from "./Square"
import X from "public/X.svg"
import O from "public/O.svg"
import WinnerX from "./WinnerX"
import WinnerO from "./WinnerO"
import WinnerNone from "./WinnerNone"

export default function GameBoard() {
    const [player, setPlayer] = useState(true)
    const [gameOn, setGameOn] = useState(true)
    const [winnerMessage, setWinnerMessage] = useState(null)
    const [markedArr, setMarkedArr] = useState([
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
    ])

    const handleClick = (index) => {
        const updatedArr = [...markedArr]
        if (updatedArr[index] === null) {
            updatedArr[index] = player ? 1 : -1
            setMarkedArr(updatedArr)
            setPlayer(!player)
        }
    }

    useEffect(() => {
        if (
            markedArr[0] + markedArr[3] + markedArr[6] === 3 ||
            markedArr[1] + markedArr[4] + markedArr[7] === 3 ||
            markedArr[2] + markedArr[5] + markedArr[8] === 3 ||
            markedArr[0] + markedArr[4] + markedArr[8] === 3 ||
            markedArr[2] + markedArr[4] + markedArr[6] === 3 ||
            markedArr[0] + markedArr[1] + markedArr[2] === 3 ||
            markedArr[3] + markedArr[4] + markedArr[5] === 3 ||
            markedArr[6] + markedArr[7] + markedArr[8] === 3
        ) {
            setGameOn(false)
            setWinnerMessage(WinnerX)
        } else if (
            markedArr[0] + markedArr[3] + markedArr[6] === -3 ||
            markedArr[1] + markedArr[4] + markedArr[7] === -3 ||
            markedArr[2] + markedArr[5] + markedArr[8] === -3 ||
            markedArr[0] + markedArr[4] + markedArr[8] === -3 ||
            markedArr[2] + markedArr[4] + markedArr[6] === -3 ||
            markedArr[0] + markedArr[1] + markedArr[2] === -3 ||
            markedArr[3] + markedArr[4] + markedArr[5] === -3 ||
            markedArr[6] + markedArr[7] + markedArr[8] === -3
        ) {
            setGameOn(false)
            setWinnerMessage(WinnerO)
        } else if (markedArr.every((element) => element !== null)) {
            setGameOn(false)
            setWinnerMessage(WinnerNone)
        }
        return () => {
            // Cleanup code (if needed)
        }
    }, [markedArr])

    function reset() {
        setMarkedArr([null, null, null, null, null, null, null, null, null])
        setGameOn(true)
        setWinnerMessage("")
    }

    let gameHtml = markedArr.map((sign, index) => {
        const key = `square_${index}`
        return (
            <Square
                key={key}
                sign={sign}
                onClick={() => handleClick(index)}
                gameOn={gameOn}
            />
        )
    })

    return (
        <>
            <div className="player">
                <h1>Player turn: </h1>
                <img src={player ? X : O} />
            </div>
            <main>{gameHtml}</main>
            <div className="winner">{winnerMessage}</div>
            <button
                className="reset-btn"
                onClick={reset}
            >
                Reset
            </button>
        </>
    )
}
