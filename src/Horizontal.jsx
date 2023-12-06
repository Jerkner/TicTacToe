import React from "react"

export default function Horizontal({ color, height }) {
    return (
        <svg
            className="winner-line"
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="16"
            viewBox="0 0 16 16"
        >
            <rect
                x="0"
                y={height}
                width="16"
                height="0.66"
                ry="0.33"
                fill={color}
            />
        </svg>
    )
}
