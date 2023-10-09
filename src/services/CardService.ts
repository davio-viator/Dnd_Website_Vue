import {Observable, of, from, retry, take, tap, repeat,delay, catchError, throwError} from 'rxjs';
import axiosO from 'axios-observable';
import axios from 'axios'
import type { AxiosError, AxiosResponse } from 'axios';

const url:string = 'http://localhost:3080/api/v1'
type Card = {
  name:string,
  rank:string,
  keywords:string[],
  content:Object,
  url:string
} 


export function getAllCards(skip:number = 0, takes:number = 6) : Observable<AxiosResponse<Card[]>>{
  // return axiosO.get<Card[]>(`${url}/api/cards`).pipe(
  //   retry({
  //     count:3,
  //     delay:1000,
  //   }),
  //   catchError(handleError),
  //   take(1),
  // )
  return axiosO.get<Card[]>(`${url}/cards?skip=${skip}&take=${takes}`).pipe(
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

export async function createCard(data :Card) :Promise<any> { 
  const response = await fetch(`${url}/card`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({card: data})
    })
  return await response.json();
}

export async function getUserCardNotes(userId:number, cardId:number) {
  const response = await fetch(`${url}/note/${userId}/${cardId}`);
  try {
    return await response.json();
  } catch (error) {
    return error
  }
}

export async function createNotes(userId:number, cardId:number) {
  const response = await fetch(`${url}/note`,{
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({userId,cardId})
  });
  return await response.json();
}

