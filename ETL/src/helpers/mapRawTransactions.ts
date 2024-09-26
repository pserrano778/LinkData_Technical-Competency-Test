import { RawTransaction, Transaction } from '../common/types'

// NOTE: There is no year in the api response. To simplify it, we will start in the toDate's year
// and we will increment each time the previous date is greater the current date in the transaction list
export default function mapRawTransactions(rawTransactions: RawTransaction[], startYear: number): Transaction[] {
    let currentYear = startYear
    let previousDate = { day: 0, month: 0 }
    return rawTransactions.map(({ date, amount, description }) => {
        const splittedDate = date.split('-')
        const day = Number(splittedDate[0])

        // NOTE: Month comes in 0-11 format
        const month = Number(splittedDate[1]) + 1

        // Increment year if necessary
        if(month < previousDate.month || month === previousDate.month && day < previousDate.day) {
            currentYear ++
        }

        // Update previous date data
        previousDate.month = month
        previousDate.day = day

        return { date: new Date(`${currentYear}-${month}-${day}`), amount: Number(amount.replace(',', '')), description }
    })
}
