<script setup lang="ts">

</script>

<script type="module" lang="ts">

  export default {
    
    props:{
      name:String,
      modifier:{
        type:Number,
        default:0
      },
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
  <div class="outer-border">
    <div class="wrapper-stat">
  
      <div @click="rollStat" class="content ">
        <span class="name">{{ name }}</span>
        <span class="bonus clickable" style="font-weight: bold;">{{bonus}}</span>
      </div>
  
      <div class="score">{{score}}</div>
  
    </div>
  </div>
</template>

<style scoped>

  .outer-border{
    z-index: 10;
    background-image: url('@/assets/svg/stats-border.svg'); 
    background-repeat: no-repeat;
    object-fit: fill;
    background-position: 4px 2px;
    /* background-size: 300px 192; */
  }

  .wrapper-stat{
    /* background-color: white; */
    /* border: 1px solid red; */
    /* padding: 0px 11px; */
    padding-top:4px;
    text-align: center;
    border-radius: 0.375rem;
    width: calc(600px / 6 - 5px);
    height: 100%;
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
    font-size: 9px;
    font-weight: bold;
    /* margin-bottom: 5px;*/
  }

  .bonus{
    margin: auto;
    font-size: 25px;
    font-weight: bold;

    padding-top: 3px;
    width: 93%;
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
    width: 80%;

    padding-top: 18px;
  }
</style>