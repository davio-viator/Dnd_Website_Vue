<script setup lang="ts">
  import NavBar from '../../navbar/NavBar.vue';
  import AttackTab from './actions/AttackTab.vue';
</script>

<script type="module" lang="ts">

  export default {
    
    props:{
      base:String
    },

    data(){
      return{
        tabs:['all','attack','action','bonus action','reaction','other','limited use'],
        selected:''
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
  <div class="wrap">
    <NavBar @selected="(emitSelected) => selected= emitSelected" :tabs="tabs" sub/>
    <AttackTab v-if="selected == 'attack' || selected == 'all'"/>
  </div>
</template>

<style scoped>
  
</style>