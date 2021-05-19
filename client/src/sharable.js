import md5 from "md5"

import NoMerchant from "./assets/icons/ic-empty-cart.svg"

function calculateTransactions(transactions, year) {
    const result = new Object()
    transactions.forEach(({ transaction }) => {
        const merchant = transaction.originalDescription
        const currencyAmount = transaction.currencyDenominatedOriginalAmount
        const amount = currencyAmount.scale ? currencyAmount.unscaledValue / (currencyAmount.scale * 10) : currencyAmount.unscaledValue
        if (amount < 0) {
            if (typeof result[merchant] !== "object") {
                result[merchant] = new Object()
                result[merchant].amount = 0
                result[merchant].purchase = 0
                result[merchant].currency = currencyAmount.currencyCode
                result[merchant].logo = `http://www.gravatar.com/avatar/${md5(merchant)}?d=identicon&size=500`
            }
            result[merchant].amount += Math.abs(amount)
            result[merchant].purchase += 1
        }
    })

    return result
}

function toArray(object) {
    return Object.keys(object).map(key => {
        return {
            name: key,
            ...object[key]
        }
    })
}

export { NoMerchant, calculateTransactions, toArray }