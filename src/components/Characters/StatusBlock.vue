<script setup lang="ts">

</script>



<script type="module" lang="ts">

  export default {
    
    props:{
      defences:Array<String>,
      conditions:Array<String>
    },

    data(){
      return{
        
      }
    },

    methods:{
      
    },

    computed:{
      defencesList(){
        return (this.defences as string[]).length>0? this.defences?.join(', '):'Add Active Defences'
      },
      conditionList(){
        return (this.conditions as string[]).length>0? this.conditions?.join(', '):'Add Active Conditions'
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
    <div class="defences">
      <span class="title">Defences</span>
      <p>{{ defencesList }}</p>
    </div>

    <div class="conditions">
      <span class="title">conditions</span>
      <p>{{ conditionList }}</p>
    </div>
  </div>
</template>

<style scoped>
  .wrapper{
    padding-top: 3px;
    border: 3px solid #c53131;
    width: 100%;
    height: 100%;
    background-color: white;
    display: flex;
    justify-content: space-between;
  }

  .title{
    color: gray;
    text-transform: uppercase;
  }

  .defences{
    width: 50%;
    padding-left: 5px;
  }

  .conditions{
    padding-left: 5px;
    width: 50%;
    border-width: 0 0 0 1px;
    border-style: solid;
    border-color: black;
  }
</style>