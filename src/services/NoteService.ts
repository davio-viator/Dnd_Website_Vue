import {Observable, of, from, retry, take, tap, repeat,delay, catchError, throwError} from 'rxjs';
import axiosO from 'axios-observable';
import axios from 'axios'
import type { AxiosError, AxiosResponse } from 'axios';

const url:string = 'http://localhost:3080/api/v1'

export async function createNote(data :{userId:number, cardId:number, title:string, content:string}) :Promise<any> { 
  const response = await fetch(`${url}/note`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({user_id: data.userId,card_id: data.cardId,title: data.title,content: data.content,})
    })
  return await response.json();
}

export async function updateNote(data: {userId:number, cardId:number, content:string}) :Promise<any> {
  const response = await fetch(`${url}/note`, {
    method: 'PATCH',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      op:"replace", 
      user_id: data.userId,
      card_id: data.cardId, 
      content: data.content
    })
  })
  return await response.json()
}

export async function getNotes(){

}

export async function getNote(userId:number, cardId:number){
  const response = await fetch(`${url}/note/${userId}/${cardId}`)
  return await response.json()
}