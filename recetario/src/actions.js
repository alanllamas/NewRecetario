import { FETCH_REQUEST, ING_REQUEST} from './actionTypes.js'


export const fetch = (data: string):FetchType => ({type: FETCH_REQUEST, data})

export const putIngInRec = (data, validator,from) => ({type: ING_REQUEST, data, validator, from})
export const quitIngInRec = (data,from) => ({type: ING_REQUEST, data, from})