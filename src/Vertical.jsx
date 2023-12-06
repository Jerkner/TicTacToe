import React from "react"

export default function Vertical({ color, width }) {
    return (
        <svg
            className="winner-line"
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="16"
            viewBox="0 0 16 16"
        >
            <rect
                x={width}
                y="0"
                width="0.66"
                height="16"
                rx="0.33"
                fill={color}
            />
        </svg>
    )
}
