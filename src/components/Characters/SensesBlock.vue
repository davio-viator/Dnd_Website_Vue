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
    <div><span class="bubble">18</span> <div class="sense">Passive WIS (perception)</div></div>
    <div><span class="bubble">15</span> <div class="sense">Passive INT (investigation)</div></div>
    <div><span class="bubble">13</span> <div class="sense">Passive WIS (insight)</div></div>
  </div>
</template>

<style scoped>
  .wrapper{
    margin-top: 15px;
    padding-left: 2rem;
    background-color: blue;
    height: 15rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 0.375rem;

    min-width: 100%;
  }

.sense{
  background-color: white;
  padding: 5px 0;
  
  border-color: red;
  border-width: 1px 1px 1px 0px;
  border-style: solid;
  display: inline-block;
  width: 80%;
}

  .bubble{
    background-color: white;
    padding: 5px;
    border-radius: 50%;
    border: 1px solid red;
  }

  .test{
    margin-left: 2rem;
    margin-top: auto;
    margin-bottom: auto;
  }

</style>