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
    <div><span>str </span>+1</div>
    <div><span>int </span>+0</div>
    <div><span>dex </span>+2</div>
    <div><span>wis </span>+6</div>
    <div><span>con </span>+2</div>
    <div><span>cha </span>+4</div>
  </div>
</template>

<style scoped>
  .wrapper{
    background-color: yellow;
    border-color: red;
    border-radius: 0.375rem;
    text-align: center;

    display: grid;
    grid-template-columns: auto auto;
    
    height: 15rem;
    width: calc(90vw / 4);

  }
</style>