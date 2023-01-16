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
      randomMinMax(min: number, max: number): number {
        let random: number = min + Math.random() * (max + 1 - min);
        return Math.floor(random);
      },
      rollStat(){
        let roll:number = this.randomMinMax(1,20);
        let result:number = roll+this.modifier;
        if(roll == 20) alert(`You rolled a natural 20 for a result of ${result} (${roll} + ${this.modifier})`);
        else if(roll == 1) alert(`You rolled a natural 1 for a result of ${result} (${roll} + ${this.modifier})`);
        else alert(`You rolled a ${result} (${roll} + ${this.modifier})`);
      }
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

    <div @click="rollStat" class="content clickable">
      <span class="name">{{ name }}</span>
      <span class="bonus" style="font-weight: bold;">{{bonus}}</span>
    </div>

    <div class="score">{{score}}</div>

  </div>
</template>

<style scoped>
  .wrapper-stat{
    background-color: white;
    text-align: center;
    border-radius: 0.375rem;
    width: calc(600px / 6 - 5px);
    height: 100%;
    border: 1px solid red;
  }

  .content{
    padding: 8px;
    display: flex;
    flex-direction: column;
    height: 50%;
  }

  .clickable{
    cursor: pointer;
  }
  .clickable:hover{
    background-color: #ced9e0;
    border-radius: 0.375rem 0.375rem 0 0;
  }

  .name{
    color:gray;
    text-transform: uppercase;
    font-size: 10px;
    font-weight: bold;
    /* margin-bottom: 5px;*/
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