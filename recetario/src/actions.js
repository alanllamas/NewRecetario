import { FETCH_REQUEST} from './actionTypes.js'


export const fetch = (data: string):FetchType => ({type: FETCH_REQUEST, data})