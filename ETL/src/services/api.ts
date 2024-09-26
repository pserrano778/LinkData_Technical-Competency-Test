import axios from 'axios'
import { ApiResponse, ApiResponseStatus, Transaction } from '../common/types'
import mapRawTransactions from '../helpers/mapRawTransactions'
import { GET_TRANSACTIONS_URL } from './endpoints'

export async function getTransactions(fromDate: string, toDate: string): Promise<ApiResponse<Transaction[]>> {
    try {
        const response = await axios({
            method: 'get',
            url: GET_TRANSACTIONS_URL,
            params: { fromDate, toDate }
        })
    
        if (response.status === 200){
            const startYear = Number(fromDate.split('-')[0])
            return { status: ApiResponseStatus.OK, data: mapRawTransactions(response.data.data, startYear) }
        }
        
        return { status: ApiResponseStatus.ERROR, message: 'ERROR' }
    }
    catch (err) {
        return { status: ApiResponseStatus.ERROR, message: (err as Error).message }
    }
}
