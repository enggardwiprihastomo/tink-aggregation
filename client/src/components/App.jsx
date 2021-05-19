import React, { useEffect, useState } from "react"

import { handleResponse } from "../../../sharable"
import Illustration from "./Illustration"
import Merchants from "./Merchants"
import { NoMerchant, calculateTransactions, toArray } from "../sharable"

function App() {
    const code = new URLSearchParams(location.search).get("code")
    const [transactions, setTransactions] = useState()

    useEffect(() => {
        async function getData(code) {
            try {
                const response = await fetch("/", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ code })
                })
                const json = await handleResponse(response)
                const result = calculateTransactions(json.transactions, "2020")
                setTransactions(toArray(result))
            } catch (err) {
                console.error(err)
            }
        }

        if (code) {
            getData(code);
        }
    }, [code]);

    return transactions && transactions.length ?
        <Merchants data={transactions} />
        :
        <Illustration
            icon={NoMerchant}
            title="No Favorite Merchants"
            label="Oooops, looks like you have no favorite merchants"
        />
}

export default App