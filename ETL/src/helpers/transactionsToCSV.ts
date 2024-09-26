import { Transaction } from '../common/types'

export default function transactionsToCSV (transactions: Transaction[]): string {
    const transactionsCSV = transactions.map(({ date, amount, description }) => {
        const dateStr = date.toISOString().split('T')[0]
        return `${dateStr},${amount},${description}`
    }).join('\n')

    return `Date,Amount,Description\n${transactionsCSV}`
}
