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
    </nav>
    <div>
      <Actions v-if="selected=='actions'" />
    </div>
  </div>
</template>

<style scoped>
  .wrapper{
    width: 100%;
    height: 100%;

    background-color: white;
    border: 1px solid red;
    border-radius: 0.375rem;
  }
</style>