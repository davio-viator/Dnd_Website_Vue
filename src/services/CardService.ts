import {Observable, of, from, retry, take, tap, repeat,delay, catchError, throwError} from 'rxjs';
import axios from 'axios-observable';
import type { AxiosError, AxiosResponse } from 'axios';

const url:string = 'http://localhost:3080'
type Card = {
  name:string,
  rank:string,
  keywords:string[],
  content:Object,
  url:string
} 

axios.interceptors.response.use(response =>{
  return response;
},
error=>{
  throw new Error
})

export function getAllCards() : Observable<AxiosResponse<Card[]>>{
  return axios.get<Card[]>(`${url}/api/cards`).pipe(
    retry({
      count:3,
      delay:1000,
    }),
    catchError(handleError),
    take(1),
  )

}

function handleError(error :AxiosError) {
  return throwError(()=> new Error(""))
} 

export async function createCard(data :any) :Promise<any> { 
  const response = await fetch(`${url}/api/card`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({card: data})
    })
  return await response.json();
}

