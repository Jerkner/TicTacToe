import React from "react"
import X from "./assets/X.svg"
import O from "./assets/O.svg"

console.log(X, O)

export default function Square({ sign, onClick, gameOn }) {
    const convertedSign =
        sign === 1 ? X : sign === -1 ? O : "public/assets/null.png"

    const classList = gameOn && !sign ? "square hover" : "square"

    return (
        <button
            className={classList}
            onClick={onClick}
            disabled={!gameOn}
        >
            <img
                src={convertedSign}
                className="sign"
            />
        </button>
    )
}
