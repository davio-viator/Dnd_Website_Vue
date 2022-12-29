<script setup lang="ts">
  import NavBar from '../../navbar/NavBar.vue';
  import Actions from './PrimaryBoxActions.vue';
</script>

<script type="module" lang="ts">

  export default {
    
    props:{
      base:String
    },

    data(){
      return{
        tabs:['actions','spells','inventory','features & traits',' description','notes','extras'],
        tabs2:['all','attacks','action','bonus action','reaction','other','limited use'],
        selected:''
      }
    },

    methods:{
      // handleDisplay(e:any,selected:string){
      //   console.log(e.target.value,selected);
      //   return selected
      // }
    },

    computed:{
      handleDisplay(){
        ''
      }
    },

    created(){

    },

    mounted(){
    }


  }

</script>

<template>
  <div class="wrapper">
    <nav>
      <NavBar @selected="(tabSelected)=>selected = tabSelected" :tabs="tabs"/>
      <!-- <NavBar :tabs="tabs2" sub/> -->  
    </nav>
    {{ handleDisplay }}
    <Actions v-if="selected=='actions'" />
  </div>
</template>

<style scoped>
  .wrapper{
    width: 100%;
    height: 150%;

    background-color: white;
    border: 1px solid red;
    border-radius: 0.375rem;
  }
</style>