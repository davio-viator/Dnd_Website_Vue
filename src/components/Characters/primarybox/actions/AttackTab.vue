<script setup lang="ts">

</script>

<script type="module" lang="ts">

  export default {
    
    props:{
      focused:Boolean
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
    <div class="title"><span class="title-text">actions • </span>Attacks per Action: {{ 1 }}</div>

    <div class="attack-header"><span> </span><span>attack</span><span>range</span><span>hit / dc</span><span>damage</span><span>notes</span></div>

    <div class="attack-container " v-for="i in ['a','b','c','d']">
      <div class="attack-icon">X</div>
      <div class="attack-name">Mace<span class="attack-type">Melee Weapon</span></div>
      <div class="attack-range">5ft<span class="attack-type">reach</span></div>
      <div class="clickable hit">+4</div>
      <div class="clickable damage">1d6+1<span class="attack-icon"> X</span></div>
      <div class="notes">Simple</div>

    </div>
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

  .attack-header{
    font-family:'Roboto, sans-serif';
    margin-top: 1rem;
    padding: 0 25px;
    text-transform: uppercase;
    display: grid;
    grid-template-columns: 16px 14rem 6.75rem 6.375rem 10rem 17.5rem;
  }

  .attack-container{
    margin: 18px 0;
    display: grid;
    grid-template-columns: 40px 14rem 6.75rem 6.375rem 10rem 17.5rem;
  }

  .attack-name{
    display: flex;
    flex-direction: column;
  }

  .attack-range{
    display: flex;
    flex-direction: column;
  }

  .attack-type{
    color:#838383;
    font-size:12px;
  }

  .clickable{
    border: 1px solid gray;
    border-radius: 0.375rem;
    cursor: pointer;
    text-align: center;
  }

  .clickable:hover{
    background-color: #ced9e0;
  }

  .clickable.hit{
    padding: 8px;
    width: 3.9rem;
    font-size: 20px;
    font-weight: bold;
  }

  .clickable.damage{
    padding: 8px;
    min-width: 4.2rem;
    max-width: max-content;
    font-size: 20px;
    font-weight: bold;
    overflow: hidden;
  }

  .notes{
    margin: auto 0;
    color:#838383;
  }
</style>