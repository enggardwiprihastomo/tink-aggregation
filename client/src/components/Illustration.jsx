import React from "react"

function Illustration({ icon, title, label }) {
    return (
        <div className="illustration">
            <img src={icon} className="illustration-icon" alt="No image" />
            <p className="illustration-title">{title.toUpperCase()}</p>
            <p className="illustration-label">{label}</p>
        </div>
    )
}

export default Illustration