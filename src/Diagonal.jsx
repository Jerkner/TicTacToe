import React from "react"

export default function Diagonal({ color, rotation }) {
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
                y="7.5"
                width="16"
                height="0.5"
                ry="0.25"
                fill={color}
                transform={`rotate(${rotation} 8 8)`}
            />
        </svg>
    )
}
