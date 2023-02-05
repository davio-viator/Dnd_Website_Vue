<script setup lang="ts">
  import defaultAvatar from '@/assets/images/default-avatar.png'
  import cross from '@/assets/svg/cross.svg'

  import  { loginUser } from '@/services/UserService'
  import { useUser } from '@/stores/UserStore';
</script>

<script type="module" lang="ts">

  export default {
    
    props:{
      base:String
    },

    data(){
      return{
        email:'',
        password:'',
        errorMessage:"",
        error:false,
        userStore:useUser()
      }
    },

    methods:{
      loginUserFn(event:any){
        const validity = event.target.form.checkValidity() ;
        if(validity){
          event.preventDefault();
          let data:any = {
            email:this.email,
            password:this.password
          }
          loginUser(data)
            .then(res => {
              console.log(res.data)
              localStorage.setItem('jwt_token',res.data.token);
              localStorage.setItem('icon',res.data.user.icon);
              localStorage.setItem('username',res.data.user.username);
              console.log(res.data.user)
              if(res.data.user.firstname !== null)localStorage.setItem('firstname',res.data.user.firstname);
              if(res.data.user.lastname !== null)localStorage.setItem('lastname',res.data.user.lastname);
              localStorage.setItem('user_id',res.data.user.id)
              this.userStore.setLogin(true)
              this.userStore.setUser(res.data.user)
              this.$router.push({name:'cards'})
            })
            .catch(err => {
              this.error = true
              this.errorMessage = err.response.data.message
              console.error(err.response.data.message);
            });
        }
      }
    },

    computed:{
      teste(){

      }
    },

    created(){
      
    },

    mounted(){
    }


  }

</script>

<template>
  <div class="container">
    <div class="header">
      login form
    </div>
    <div class="form-container">
      <form>
        <label class="element" for="email">
          email address
          <input class="element-input" type="email" required v-model="email" placeholder="kevin32@email.com" name="email" >
        </label>      
        <label class="element" for="password">
          password
          <input class="element-input" type="password" required v-model="password" placeholder="********" name="password" >
        </label>
        <button type="submit" @click="loginUserFn" class="validation-button">Login</button>
      </form>
      </div>
    </div>
    <div v-if="error" class="popUp-container">
      <img @click="error = false" :src="cross" class="close" alt="">
      <div class="error-popUp">
        {{ errorMessage }}
      </div>
    </div>
</template>

<style scoped>
  .container{
    width: 60vw;
    margin: auto;
    margin-top: 8rem;
  }

  .header{
    background-color: black;
    color: white;
    height: 3rem;
    text-align: center;
    padding-top: 12px;
    font-size: 24px;
    font-weight: bold;
    text-transform: uppercase;
    border-radius: 1.5rem 1.5rem 0 0;
  }

  .form-container{
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: brown;
    padding: 25px;
    border-radius: 0.375rem;
    border-radius: 0 0 1.5rem 1.5rem;
  }

  .element{
    font-size: 22px;
    text-transform: capitalize;
    display: grid;
    grid-template-columns: auto auto;
    display: flex;
    justify-content: space-between;
    padding: 8px 0px;

  }
  .element-input{
    margin-left: 20px;
    height: 2.5rem;
    border-radius: 0.375rem;
    width: 40%;
    margin-right: 0;
    font-size: 18px;
  }

  .upload-container{
    display: grid;
    grid-template-columns: 80px auto;
  }

  .user-icon{
    width: 75px;
    height: 75px;
    border-radius: 50%;
    outline: 2px solid black;
    outline-offset: 5px;
    cursor: pointer;
  }

  .file-upload{
    display: none;
  }
  .button {
    height: 2.5rem;
    display: inline-block;
    width: 8.5rem;
    padding: 12px 18px;
    cursor: pointer;
    border: 1px solid #000;
    border-width: 1px 0 1px 1px;
    border-radius: 0.375rem 0 0 0.375rem;
    background-color: #b8b8b8;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    display: none;
  }
  .upload-text{
    height: 2.5rem;
    display: inline-block;
    padding: 12px 0;
    font-size: 16px;
    width: calc(100% - 8.6rem);
    color: black;
    border: 1px solid #000;
    border-width: 1px 1px 1px 0;
    padding-left: 5px;
    background-color: white;
    border-radius: 0 0.375rem 0.375rem 0;
    display: none;
  }

  .validation-button{
    display: block;
    margin-top: 3rem;
    margin-left: 80%;
    width: 8rem;
    height: 3rem;
    font-size: 28px;
    border-radius: 0.375rem;
    cursor: pointer;
  }

  .validation-button:hover{
    background-color: lightgray;
  }


  .popUp-container{
    position: absolute;
    top: 0;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.6);
    height: 100vh;
    width: 100%;
  }
  .error-popUp{
    position: absolute;
    top: calc(50% - 5vh);
    left: calc(50% - 15vw);
    height: 12vh;
    width: 30vw;
    background-color: red;
    color: white;
    border-radius: 1.5rem;
    text-align: center;
    font-size: 23px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .close{
    z-index: 10;
    color: white;
    position: relative;
    cursor: pointer;
    top: 45.5vh;
    left: 62.5vw;
    height: 35px;
    width: 35px;
  }


</style>