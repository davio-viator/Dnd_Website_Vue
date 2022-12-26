<script setup lang="ts">

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
    }


  }

</script>

<template>
  <div class="wrapper">
    <div class="content">
      <div class="title">armor</div>
      etg ,qaertg qaer,gt qaerg ,ergt a,e
    </div>
    <hr>

    <div class="content">
      <div class="title">weapons</div>
      simple weapons
    </div>
    <hr>
    
    <div class="content">
      <div class="title">tool</div>
      none
    </div>
    <hr>

    <div class="content">
      <div class="title">languages</div>
      Celestial, Common, Draconic, Elvish
    </div>
</div>
</template>

<style scoped>
  .wrapper{
    background-color: green;
    margin-top: 15px;
    height: 20rem;

    min-width: 100%;
    border-radius: 0.375rem;
  }

  .content{
    padding: 8px;
    height: 4.5rem;

    text-transform: capitalize;
  }

  .title{
    text-transform: uppercase;
  }
</style>