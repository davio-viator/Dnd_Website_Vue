<script lang="ts">

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

      }
    },

    methods:{

    },

    computed:{

    },

    mounted(){
    }


  }

</script>

<template>
  <div class="container">
    <div class="user-info left">
      <span class="user-info-text firstname">{{firstname}} </span>
      <span class="user-info-text lastname"> {{lastname}}</span>
    </div>
    <div class="user-info right">
      <a class="user-info-text links" :href=link?.url v-for="link in urls">{{link?.name}}</a>
      <span class="user-info-text username">{{username}}</span>
      <img class="user-icon" :src=iconSrc alt="user icon">
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
    width: 56px;
    padding: 0.5rem;
    max-width: 100%;
    height: auto;
  }
  .username{
    margin: auto;
    display: block;
    margin-right: 5px;
    margin-left: 1rem;
  }
  .links{
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