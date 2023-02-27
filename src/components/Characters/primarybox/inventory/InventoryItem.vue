<script setup lang="ts">
  import { useCharacter, useCounterStore } from '@/stores/CharacterService';

  import upArrow from '@/assets/svg/up-arrow.svg'
  import downArrow from '@/assets/svg/down-arrow.svg'
</script>

<script type="module" lang="ts">

  export default {
    
    props:{
      name:String,
      subname:String,
      active:Number,
      weight:Number,
      quantity:Number,
      cost:Number,
      notes:String,
      desc:String,
      location:String,
      rarity:String
    },

    data(){
      return{
        characterStore:useCharacter(),
        detailOpen:false,
        qty:this.quantity
      }
    },

    methods:{
      click(e:any){
        const characterId = parseInt(this.$route.params.id as string)
        console.log({characterId});
        this.characterStore.updateActiveEquipment((this as any)['name'],(this as any)['location'],characterId)
      },
      openDetails(event:any){
        this.detailOpen = !this.detailOpen
      }
    },

    computed:{
      isActive(){
        let x = this.characterStore.getItemInventory((this as any)['name'],(this as any)['location']) 
        return x.active
      },

    },

    created(){

    },

    mounted(){

    }


  }

</script>

<template>
  <div class="container">
    <span v-if="(isActive as number)>=0"> <div @click="click($event)" class="checkbox" :class="{'used':isActive==1}"></div></span>
    <span v-else style="font-weight:bold;margin-left:7px">--</span>
    <span>{{ name }}</span>
    <span class="move-button">move</span>
    <span v-if="detailOpen" @click="openDetails" class="details"><img :src="upArrow" alt="up arrow"></span>
    <span v-else @click="openDetails" class="details"><img :src="downArrow" alt="up arrow"></span>
  </div>
  <span v-if="detailOpen">
    <div class="detailsContainer">
      <div v-if="subname" class="row">{{ subname }}</div>
      <hr v-if="subname">
      <div class="row"><span class="bold">cost: </span>{{ cost }} gp</div>
      <div class="row"><span class="bold">weight: </span>{{ weight }} lb(s)</div>
      <hr>
      <div class="row">{{ (desc as string).replace('&name&',name as string) }}</div>
      <hr>
      <div class="row input">
        <span class="bold">quantity: </span>
        <span>
          <span class="input-button" @click="(qty as number)--">-</span>
          <input class="qty-input" type="number" v-model="qty">
          <span class="input-button" @click="(qty as number)++">+</span>
        </span>
      </div>
      <div v-if="rarity" class="row"><span class="bold">rarity: </span>{{ rarity }}</div>
      <div v-else class="row"><span class="bold">rarity: </span>common</div>
    </div>
  </span>
</template>

<style scoped>
  .container{
    margin: 5px 0;
    display: grid;
    grid-template-columns: 50px 12.5rem 3.5rem auto;
    grid-gap: 5px;
    height: 1.5rem;
  }


  .checkbox{
    height: 20px;
    margin: 2px;
    margin-right: 3px;
    min-width: 20px;
    width: 20px;
    cursor: pointer;
    background-color: #fff;
    border: 1px solid #d8d8d8;
    box-shadow: inset 0 0 4px 0 #d8d8d8;
  }
  .used:before{
    content: "";
    display: block;
    height: 10px;
    margin-top: 4px;
    width: 10px;
    background: red;
    margin: 4px auto 0;
  }

  .move-button{
    padding: 0 5px;
    padding-top: 3px;
    height: min-content;
    border:1px solid #c53131;
    border-radius: 0.200rem;
    color: #c53131;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 12px;
    text-align: center;

    cursor: pointer;
  }

  .details{
    text-align: center;
    border-radius: .200rem;
    padding-top: 2px;
    height: 19px;
    cursor: pointer;
  }

  .detailsContainer{
    padding: 5px;
    background-color: rgb(235, 235, 235);
    margin-top: 12px;
    border-radius: .200rem;
  }

  .bold{
    text-transform: capitalize;
    font-weight: bold;
  }

  .row{
    padding: 2px;
  }

  .row.input{
    text-align: center;
  }

  .input-button{
    color: white;
    background-color: #c53131;
    width: 1.3rem;
    text-align: center;
    padding-right: 2px;
    aspect-ratio: 1/1;
    font-weight: bold;
    border-radius: 4px;
    cursor: pointer;
    display: inline-block;
  }

  .qty-input{

    margin: 0 3px;
    padding-right: 0;
    text-align: center;
    width: 60px;

    background: none rgb(255,255,255);
    border: 1px solid rgb(221,221,221);
    border-radius: 4px;
    color: rgb(0,0,0);
    padding: 4px;
    transition: border 0.2s linear 0s, box-shadow 0.2s linear 0s;
  }

  hr{
    margin: 5px 0;
  }

  img{
    height: 15px;
  }
</style>