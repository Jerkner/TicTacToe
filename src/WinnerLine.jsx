import React, { useState } from "react"
import Diagonal from "./Diagonal"
import Horizontal from "./Horizontal"
import Vertical from "./Vertical"

export default function WinnerLine({
    color,
    direction,
    height,
    width,
    rotation,
}) {
    return (
        <>
            {direction === "Horizontal" && (
                <Horizontal
                    color={color}
                    height={height}
                />
            )}
            {direction === "Vertical" && (
                <Vertical
                    color={color}
                    width={width}
                />
            )}
            {direction === "Diagonal" && (
                <Diagonal
                    color={color}
                    rotation={rotation}
                />
            )}
        </>
    )
}
