#!/usr/bin/env node
import yargs from 'yargs'
import { transactionsETL } from './src/etl'
import isValidDate from './src/helpers/isValidDate'

// TODO: Improve date validation and handle edge cases
const argv = yargs(process.argv.slice(2)).options({
    from: { type: 'string', demandOption: true, description: 'Start date YYYY-MM-DD format' },
    to: { type: 'string', demandOption: true, description: 'End date YYYY-MM-DD format' },
}).check(({ from, to }) => {
    if(!isValidDate(from)) {
        throw new Error('Argument check failed: "from" argument format is not correct')
    } else if(!isValidDate(to)) {
        throw new Error('Argument check failed: "to" argument format is not correct')
    }

    return true
}).parseSync()

const { from, to } = argv

transactionsETL(new Date(from), new Date(to))
