<script setup lang="ts">
  import { useUser } from '@/stores/UserStore';
</script>

<script type="module" lang="ts">

  export default {
    
    props:{
      base:String
    },

    data(){
      return{
        
      }
    },

    methods:{
      
    },

    computed:{

    },

    created(){

    },

    mounted(){
      setTimeout(()=> {
        useUser().removeUser()
        localStorage.removeItem("user_id")
        localStorage.removeItem("firstname")
        localStorage.removeItem("lastname")
        localStorage.removeItem("username")
        localStorage.removeItem("icon")
        localStorage.removeItem("jwt_token")
        this.$router.push('login-view')
      },800)
    }


  }

</script>

<template>
  <div class="message">
    You will be logged out shortly
  </div>
</template>

<style scoped>
  .message{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-size: 25px;
    font-weight: bold;
    height: 6rem;
    width: fit-content;
    padding: 0 2.5rem;
    padding-top: 2.2rem;
    background-color: brown;
    color: white;
    border-radius: 0.375rem;
  }
</style>