<script setup lang="ts">
  import { faker } from '@faker-js/faker';
</script>

<script type="module" lang="ts">

  export default {
    
    props:{

    },

    data(){
      return{
        size:Array(18),
        bonus:Array(18)
      }
    },

    methods:{
      randomMinMax(min: number, max: number): Number {
        let random: number = min + Math.random() * (max + 1 - min);
        return Math.floor(random);
      },
      init(){
        for (let i = 0; i < 18; i++) {
          let rand:any = this.randomMinMax(-3,8)
          rand = rand>=0 ? `+${rand}` : rand
          this.bonus[i] = rand
        }
      }
    },

    computed:{
      bonu(){
        let rand:Number = this.randomMinMax(-3,8)
        return rand>=0 ? `+${rand}` : rand
      }
    },

    created(){
    },
    
    mounted(){
      this.init()
    }


  }

</script>

<template>
  <div class="wrapper">
    <div class="header">
      <span>Prof</span><span>mod</span><span>skill</span><span>bonus</span>
    </div>

    <div>
      <div v-for="(elem,i) in size" class="content">
        <input class="skill-radio" readonly type="checkbox" :checked="i%4==0">
        <span>{{ faker.helpers.arrayElement(['DEX','STR','WIS','CHA','INT','DEX']) }}</span>
        <span>skill here</span>
        <span>{{ bonus[i] }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .wrapper{
    /* background-color: purple; */
    height: 100%;

    padding: 12px 10px;
    min-width: 100%;
    border-radius: 0.375rem;

    border: 1px solid red;
  }
  
  .header{
    color:white;
    text-transform: uppercase;
    display: grid;
    grid-template-columns: 3rem 3rem 7rem 1rem;
    margin-bottom: 1rem;
  }

  .content{
    display: grid;
    grid-template-columns: 3rem 3rem 8rem 1rem;

    text-transform: capitalize;
    height: 2.3rem;
  }

  .skill-radio{
    cursor: pointer;

    width: 10px !important;
    height: 10px;
    padding: 0 !important;
    margin-left: 13px;
    margin-bottom: 2px;
    background-color: white;
    border-radius: 50%;
    vertical-align: middle;
    border: 1px solid #ddd;
    appearance: none;
    -webkit-appearance: none;
    outline: none;
    cursor: pointer;
    background-color: rgb(199, 199, 199);
  }

  .skill-radio:checked{
    background-color: black
  }
</style>