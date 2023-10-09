import axios from "axios";
import Axios from "axios";

const url: string = 'http://localhost:3080/api/v1'

export async function getAllUsers() {

  // const response = await fetch('http://localhost:3080/api/user');
  const response = await fetch(`${url}/user`);
  return await response.json();
}

export async function createUser(data :any) :Promise<any>{
  let formData = new FormData();
  Object.keys(data).forEach(element => {
    formData.append(element,data[element])
  });
  formData.append('imgFile',data.icon)
  return axios.post(`${url}/user`,formData,{
    "headers" : {
      "content-type":"Content-Type: multipart/form-data"
    }
  })
    
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