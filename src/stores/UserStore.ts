import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';

const url: string = 'http://localhost:3080/api/v1'

interface User {
  loggedIn:boolean,
  username:string,
  icon:string,
  firstname?:string,
  lastname?:string
};

export const useUser = defineStore('user', () => {
  const loggedIn = ref(false);
  const user = ref({
    loggedIn:false,
    username:'',
    icon:''
  } as User)

  verifyLogin()

  function verifyLogin(){
    const token:string = localStorage.getItem("jwt_token") as string;
    if(!!token) {
      loggedIn.value = true
    }else{
      loggedIn.value = false
    }
  }

  async function isLoggedIn(){
    const token:string = localStorage.getItem("jwt_token") as string;
    if(!!token){
      return axios.post(`${url}/user-token`,null,{
        headers:{
          'Authorization':' Bearer '+token
        }
      })
    }else{
      return new Promise(reject => {
      reject(false)
      })
    }
  }

  function setUser(data:any){
    user.value = data
  }

  function setLogin(value:boolean){
    loggedIn.value = value
  }

  function removeUser(){
    user.value = ({
      loggedIn:false,
      username:'',
      icon:''
    } as User)
    setLogin(false)
  }

  async function getCharacters(){
    const id = localStorage.getItem('user_id');
    const token = localStorage.getItem('jwt_token')
    return await axios.get(`${url}/characters?id=${id}`,{
      headers:{
        'Authorization':'Bearer '+token
      }
    });
  }


  return { 
    loggedIn,user ,isLoggedIn,setLogin,setUser,removeUser,getCharacters
  }

})


export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }
  
  return { count, doubleCount, increment }
})
