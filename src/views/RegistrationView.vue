<script setup lang="ts">
  import defaultAvatar from '@/assets/images/default-avatar.png'
  import cross from '@/assets/svg/cross.svg'

  import  { createUser } from '@/services/UserService'
</script>

<script type="module" lang="ts">

  export default {
    
    props:{
      base:String
    },

    data(){
      return{
        fileName:'',
        imgSrc: '',
        linkUrl:'',
        username:'',
        email:'',
        password:'',
        verif_password:'',
        status:'',
        errorMessage:"Couldn't create the user",
        error:false
      }
    },

    methods:{
      uploadImage(e:any){
        if(e.target.value.includes('http')) this.$emit('imgSrc',e.target.value)
        else if(e.target.files){
          this.fileName = e.target.files[0].name
          let reader = new FileReader();
          reader.onload = (event:any)=>{
            this.imgSrc = event.target.result
            this.$emit('imgSrc',event.target.result)
            this.linkUrl = ''
          }
          reader.readAsDataURL(e.target.files[0]) 
        }
      },
      registerUser(event:any){
        const validity = event.target.form.checkValidity() 
        if(validity){
          event.preventDefault();
          console.log(this);
          let data:any = {
            username:this.username,
            email:this.email,
            password:this.password,
            verify_password:this.verif_password,
            icon:(this.imgSrc || this.linkUrl || defaultAvatar),
            status:this.status
          }
          createUser(data)
            .then(res => {
              console.log(res);
              if(res.status === 400){
                this.error = true
                this.errorMessage = res.message
              }
            })
            .catch(err => {
              console.log(err);
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
      registration form
    </div>
    <div class="form-container">
      <form>
        <label class="element" for="username">
          username
          <input class="element-input" type="text" required v-model="username" placeholder="Enter your username here" name="username" >
        </label>
        <label class="element" for="email">
          email address
          <input class="element-input" type="email" required v-model="email" placeholder="kevin32@email?com" name="email" >
        </label>
      
      
        <label class="element" for="password">
          password
          <input class="element-input" type="password" required v-model="password" placeholder="********" name="password" >
        </label>
        <label class="element" for="password-verification">
          re-type password
          <input class="element-input" type="password" required v-model="verif_password" placeholder="********" name="password-verification" >
        </label>
        <div class="upload-container">
          <label @change="uploadImage"  for="file">
            <img class="user-icon" :src="imgSrc || linkUrl || defaultAvatar" alt="">
            <span class="button">Upload image</span>
            <span class="upload-text">{{fileName || "No file chosen"}}</span>
            <input type="file" accept=".png,;apng,.jpeg,.jpg,.webp,.gif" multiple=false class="file-upload element-ingput" name="file" id="file">
          </label>
        </div>
      
        <label class="element" for="image-link">
          Link to the image
          <input v-model="linkUrl" @keyup="imgSrc = ''" class="element-input" type="text" name="image-link" >
        </label>
      
        <label class="element" for="status">
          user status
          <select v-model="status" required class="element-input" name="status" >
            <option value="DM">DM</option>
            <option value="Player">Player</option>
          </select>
        </label>

        <button type="submit" @click="registerUser" class="validation-button">Sign up</button>
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