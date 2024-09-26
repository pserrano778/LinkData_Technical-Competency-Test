export type RawTransaction = {
    date: string,
    amount: string,
    description: string
}

export type Transaction = {
    date: Date,
    amount: number,
    description: string
}

export enum ApiResponseStatus {
    OK = 'OK',
    ERROR = 'ERROR'
}

export type ApiResponse<T> = {
    status: ApiResponseStatus.OK,
    data: T
} | {
    status: ApiResponseStatus.ERROR
    message: string
}
