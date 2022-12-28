<script setup lang="ts">
  import NavBar from '../navbar/NavBar.vue';
</script>

<script type="module" lang="ts">

  export default {
    
    props:{
      base:String
    },

    data(){
      return{
        tabs:['action','spells','inventory','features & traits',' description','notes','extras']
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
    <NavBar :tabs="tabs"/>
  </div>
</template>

<style scoped>
  .wrapper{
    width: 100%;
    height: 150%;

    background-color: pink;
    border: 1px solid red;
    border-radius: 0.375rem;
  }
</style>