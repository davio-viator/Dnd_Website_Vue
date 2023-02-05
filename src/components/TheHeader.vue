<script setup lang="ts">
  import { useUser } from '@/stores/UserStore';
  import { storeToRefs } from 'pinia'
</script>

<script type="module" lang="ts">

  export default {
    
    props:{
      firstname:String,
      lastname:String,
      username:String,
      iconSrc:String,
      urls:Array<any>
    },
    
    data(){
      return{
        userStore:useUser()
      }
    },

    methods: {
      changeUrl(link:any){
        this.$router.push({name:link.routeName})
      }
    },

    computed:{
      localInfoUser(){
        return {
          firstnameCom:localStorage.getItem('firstname'),
          lastnameCom:localStorage.getItem('lastname'),
          usernameCom:localStorage.getItem('username'),
          iconCom:localStorage.getItem('icon'),
        }
      }
    },

    mounted(){
    }


  }
</script>

<template>
  <div class="container">
    <div class="user-info left">
      <span class="user-info-text firstname">{{userStore.user?.firstname || localInfoUser.firstnameCom || firstname}} </span>
      <span class="user-info-text lastname"> {{userStore.user?.lastname || localInfoUser.lastnameCom || lastname}}</span>
    </div>
    <div class="user-info right">
      <button class="user-info-text links" @click="changeUrl(link)" :href=link?.url v-for="link in urls">{{link?.name}}</button>
      <span class="user-info-text username">{{userStore.user?.username || localInfoUser.usernameCom || username}}</span>
      <img class="user-icon" :src=" userStore.user?.icon || localInfoUser.iconCom || iconSrc" alt="user icon">
    </div>
  </div>
</template>

<style scoped>
  .container{
    font-size: 22px;
    /* position: absolute; */
    /* top: 0px; */
    height: 4.5rem;
    width: 100%;
    background-color: rgb(102, 98, 98);
    display: flex;
    justify-content: space-between;
  }
  .firstname{
    text-transform: capitalize;
  }
  .lastname{
    text-transform: uppercase;
  }
  .user-info-text{
    color:rgb(255, 255, 255);
    margin: 5px;
  }
  .user-info{
    margin-bottom: auto;
    margin-top: auto;
  }
  .user-icon{
    aspect-ratio: 1/1;
    height: 70px;
    /* width: 56px; */
    padding: 0.25rem;
    /* max-width: 100%; */
    border-radius: 50%;
  }
  .username{
    margin: auto;
    display: block;
    margin-right: 5px;
    margin-left: 1rem;
  }
  .links{
    all: unset;
    cursor: pointer;
    color: white;
    font-style: italic;
    text-decoration: none;
    text-transform: capitalize;
    margin: auto;
    display: block;
    margin-right: 8px;
    
  }
  .links:hover{
    color:lightgray
  }
  .right {
    margin-right: 2rem;
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
  }
  .left{
    margin-left: 2rem;
  }
</style>