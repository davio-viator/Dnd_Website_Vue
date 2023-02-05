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
      console.log("yay")
      loggedIn.value = true
    }else{
      console.log("non")
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
      console.log("first")
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


  return { 
    loggedIn,user ,isLoggedIn,setLogin,setUser
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
