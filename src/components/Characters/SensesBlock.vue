<script setup lang="ts">
  import { useCharacter } from '@/stores/CharacterService';
  import border from '@/assets/svg/border-sense.svg'
</script>

<script type="module" lang="ts">

  export default {
    
    props:{
      base:String
    },

    data(){
      return{
        character:useCharacter().character
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
  <div class="outer-border">
    <div class="wrapper">
      <div class="border">
        <span class="bubble">{{ character.senses.passive_perception }}</span> 
        <span class="sense">Passive WIS (perception)</span>
      </div>
  
      <div class="border">
        <span class="bubble">{{ character.senses.passive_investigation }}</span> 
        <div class="sense">Passive INT (investigation)</div>
      </div>
  
      <div class="border">
        <span class="bubble">{{ character.senses.passive_insight }}</span> 
        <div class="sense">Passive WIS (insight)</div>
      </div>
    </div>
  </div>
</template>

<style scoped>

  .outer-border{
    background-image: url('@/assets/svg/small-fitting-border.svg'); 
    background-repeat: no-repeat;
    object-fit: fill;
    background-position: -2px -4px;
    background-size: 300px 192;
  }

  .wrapper{
    margin-top: 15px;
    padding-left: 1rem;
    /* background-color: white; */
    height: 12rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 0.375rem;

    /* border: 1px solid red; */

    min-width: 100%;
  }

  .border{
    display: grid;
    grid-template-columns: 45px auto;   
    padding-top: 20px;
    background-image: url('@/assets/svg/border-sense.svg');
    background-repeat: no-repeat;
    background-position: 0px 13px;
    width: 95%;
    margin-top: -15px;
  }

.sense{
  padding: 5px 8px;
  font-weight: bold;
  font-size: 14px;

  display: inline-block;
}

  .bubble{
    /* background-color: white; */
    padding: 5px 0;
    padding-left: 10px;
    font-weight: bold;
    font-size: 18px;
    /* border-radius: 50%; */
    /* border: 1px solid red; */
  }

  .test{
    margin-left: 2rem;
    margin-top: auto;
    margin-bottom: auto;
  }

</style>