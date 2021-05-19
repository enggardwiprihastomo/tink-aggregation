import React from "react"

function MerchantItem({ item, index, onClick }) {
    const style = {
        animationDelay: `calc(${index} * 200ms)`
    }
    return (
        <li style={style} className="merchants-item" onClick={onClick}>
            <img className="merchants-logo" src={item.logo} alt="No image" />
            <p>{item.name}</p>
        </li>
    )
}

export default MerchantItem