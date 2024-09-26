import { writeFile } from 'fs'
import { ApiResponseStatus } from './common/types'
import transactionsToCSV from './helpers/transactionsToCSV'
import { getTransactions } from './services/api'
import { mkdirp } from 'mkdirp'

function getFileName(toDate: Date, fromDate: Date) {
    const toDateStr = toDate.toISOString().split('T')[0]
    const fromDateStr = fromDate.toISOString().split('T')[0]
    return `${toDateStr}_${fromDateStr}.csv`
}

export async function transactionsETL(fromDate: Date, toDate: Date ) {
    // NOTE: Assuming we don't need to handle timezones
    const fromDateStr = fromDate.toISOString().split('T')[0]
    const toDateStr = toDate.toISOString().split('T')[0]

    const transactionsResponse = await getTransactions(fromDateStr, toDateStr)

    if(transactionsResponse.status === ApiResponseStatus.OK) {
        const fileName = getFileName(fromDate, toDate)
        const outputPath = `./output`
        await mkdirp(outputPath)
        writeFile(`${outputPath}/${fileName}`, transactionsToCSV(transactionsResponse.data), (err) => {
            if (err) console.error((err as Error).message)
            else console.log(`The file ${fileName} has been created at the "output" directory`)
        })
    } else {
        console.error(transactionsResponse.message)
    }
}
