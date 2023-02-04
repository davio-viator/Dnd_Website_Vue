import axios from "axios";
import Axios from "axios";

const url: string = 'http://localhost:3080/api/v1'

export async function getAllUsers() {

  const response = await fetch('http://localhost:3080/api/users');
  return await response.json();
}

export async function createUser(data :any) :Promise<any>{
  // const response = await fetch(`${url}/user`, {
  //     method: 'POST',
  //     headers: {'Content-Type': 'application/json'},
  //     body: JSON.stringify(data)
  //   })

  return axios.post(`${url}/user`,data)
    
  // return await response.json();
}

export async function loginUser(data :any){
  // const response = await fetch(`${url}/signIn`, {
  //   method: 'POST',
  //   headers: {'Content-Type': 'application/json'},
  //   body:JSON.stringify(data),
  // })

  return axios.post(`${url}/signIn`,data);

  // return await response.json();
}