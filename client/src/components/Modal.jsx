import React from "react"
import { IoMdClose } from "react-icons/io"

function Modal({ data, onClick, style }) {
    return (
        <div className="modal" style={{ top: style.top }}>
            <div className={`modal-container ${style.reverse}`}>
                <IoMdClose className={"modal-close"}
                    onClick={onClick}
                />
                <p className="modal-desc">Your favorites merchant:</p>
                <img
                    className="modal-logo"
                    src={data.logo}
                    alt="No image"
                />
                <p className="modal-currency">
                    {`${data.amount.toFixed(2)} ${data.currency}`}
                </p>
                <p className="modal-desc">
                    {`During ${data.year} you've spent ${data.amount.toFixed(2)} ${data.currency} at ${data.name}`}
                </p>
                <p className="modal-desc">
                    {`${data.purchase} purchase${data.purchase > 1 ? "s" : ""}`}
                </p>
            </div>
        </div>
    )
}

export default Modal