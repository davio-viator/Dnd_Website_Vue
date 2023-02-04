import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';
// import Axios from 'axios';

const url: string = 'http://localhost:3080/api/v1'

export const useUser = defineStore('user', () => {
  const loggedIn = ref(false);
  
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
    // if(!!token) {
    //   console.log(token)
    //   axios.post(`${url}/user-token`,null,{
    //     headers:{
    //       'Authorization':' Bearer '+token
    //     }
    //   }).then(res => {
    //     console.log(res)
    //     console.log("does this work ?")
    //     loggedIn.value = true
    //   })
    //   .catch(err => {
    //     console.log(err)
    //     loggedIn.value = false
    //   })
    // }else{
    //   loggedIn.value = false
    // }
      if(!!token){
        return axios.post(`${url}/user-token`,null,{
          headers:{
            'Authorization':' Bearer '+token
          }
        }).then(res => {
          console.log("res: ",res)
        })
        .catch(err =>{
          console.log("err: ",err)
        })
      }else{
        console.log("first")
        return new Promise(reject => {
        reject(false)
        })
      }
  }

  function setLogin(value:boolean){
    loggedIn.value = value
  }


  return { 
    loggedIn ,isLoggedIn,setLogin
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
