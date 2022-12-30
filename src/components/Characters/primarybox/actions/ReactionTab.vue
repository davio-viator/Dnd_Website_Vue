<script setup lang="ts">
  import Action from './Action.vue';
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
    <div class="title"><span class="title-text">reactions</span></div>
    <Action
      bold
      title="Actions in Combat"
      text="Opportunity attack"
    />
  </div>
</template>

<style scoped>
  .wrapper{
    padding: 0 12px;
  }

  .title{
    border-bottom: 1px solid #eaeaea;
  }

  .title-text{
    text-transform: uppercase;
    color:red;
    font-weight: bold;
  }
</style>