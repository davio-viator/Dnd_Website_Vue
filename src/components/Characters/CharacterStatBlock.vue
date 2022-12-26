<script setup lang="ts">

</script>

<script type="module" lang="ts">

  export default {
    
    props:{
      name:String,
      modifier:Number,
      score:Number,
    },

    data(){
      return{
        
      }
    },

    methods:{
      
    },

    computed:{
      bonus(){
        return this.modifier>=0?`+${this.modifier}`:this.modifier
      }
    },

    created(){

    },

    mounted(){
      
    }


  }

</script>

<template>
  <div class="wrapper-stat">

    <div class="content">
      <span class="name">{{ name }}</span>
      <span class="bonus" style="font-weight: bold;">{{bonus}}</span>
    </div>

    <div class="score">{{score}}</div>

  </div>
</template>

<style scoped>
  .wrapper-stat{
    text-align: center;
    border-radius: 0.375rem;
    width: 7rem;
    height: 8rem;
    border: 1px solid red;
  }

  .content{
    padding: 8px;
    display: flex;
    flex-direction: column;
    height: 50%;
  }

  .name{
    color:gray;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  .bonus{
    margin: auto;
    font-size: 25px;
    font-weight: bold;
  }

  .score {
    font-size: 25px;
    font-weight: bold;

    background-color:#00000012;
    border-color: lightgray;
    border-width: 1px 0 0 0px;
    border-style: solid;
    border-radius: 0 0 0.375rem 0.375rem;

    padding-top: calc(25% - 12px);
    margin: auto;
    height: 50%;
  }
</style>