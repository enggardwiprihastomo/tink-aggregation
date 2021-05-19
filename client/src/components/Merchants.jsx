import React, { useEffect, useState } from "react"

import MerchantItem from "./MerchantItem"
import Modal from "./Modal"

function Merchants({ data }) {
    const [modal, setModal] = useState(false)
    const [reverse, setReverse] = useState(null)
    const [selectedItem, setSelectedItem] = useState()
    const [top, setTop] = useState(0)

    useEffect(() => {
        function handleScroll() {
            setTop(window.scrollY)
        }

        function handleWheel() {
            if (modal) { event.preventDefault() }
        }

        window.addEventListener("scroll", handleScroll)

        if (modal) {
            window.addEventListener("wheel", handleWheel, { passive: false })
        }

        return () => {
            window.removeEventListener("scroll", handleScroll)
            window.removeEventListener("wheel", handleWheel, { passive: false })
        }
    }, [modal])

    function onClickHandler(item) {
        setSelectedItem({ ...item, year: "2020" })
        setReverse(null)
        setModal(true)
    }

    function modalHandler() {
        setReverse("modal-reverse")
        setTimeout(() => {
            setModal(false)
        }, 200);
    }

    return (
        <div className="merchants">
            <p className="merchants-title">Your Favorite Merchants</p>
            <ul className="merchants-list">
                {data.map((item, idx) =>
                    <MerchantItem
                        key={`tr-${idx}`}
                        item={item}
                        index={idx}
                        onClick={() => onClickHandler(item)}
                    />)}
            </ul>
            {modal && (
                <Modal
                    data={selectedItem}
                    style={{ top, reverse }}
                    onClick={modalHandler}
                />
            )}
        </div>
    )
}

export default Merchants