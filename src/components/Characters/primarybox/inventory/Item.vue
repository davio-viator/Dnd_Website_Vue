<script setup lang="ts">
  import { useCharacter, useCounterStore } from '@/stores/CharacterService';
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
      location:String
    },

    data(){
      return{
        characterStore:useCharacter()
      }
    },

    methods:{
      click(e:any){
        this.characterStore.updateActiveEquipment(this.name,this.location)
      },
    },

    computed:{
      isActive(){
        let x = this.characterStore.getItemInventory(this.name,this.location) 
        console.log(this.name,this.location,x);
        return x.active
      }
    },

    created(){

    },

    mounted(){

    }


  }

</script>

<template>
  <div class="wrap">
   <div class="test">
    <span v-if="active>=0"> <div @click="click" class="checkbox" :class="{'used':isActive==1}"></div></span>
    <span class="empty" style="margin-left:8px;" v-else>--</span>
    <div style="display:flex;flex-direction:column">
      <span>{{ name }}</span>
      <span style="font-size:12px;color:#A8A8A8">{{ subname }}</span>
    </div>
    <span>{{ weight }}</span>
    <span v-if="quantity > 0">{{ quantity }}</span>
    <span class="empty" v-else>{{ '--' }}</span>
    <span v-if="cost > 0">{{ cost }}</span>
    <span class="empty" v-else>{{ '--' }}</span>
    <span>{{ notes }}</span>
   </div>
  </div>
</template>

<style scoped>
  .wrap{
    display: flex;
    flex-direction: row;
  }

  .test{
    display: grid;
    grid-template-columns: 4rem 14rem 6rem 4rem 5rem auto;
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

  .empty{
    font-weight: bold;
  }
</style>