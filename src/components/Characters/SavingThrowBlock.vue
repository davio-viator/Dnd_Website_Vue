<script setup lang="ts">
    import { useCharacter } from '@/stores/CharacterService';
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
      str(){
        return this.character.savingthrows.strength>0 ? '+'+this.character.savingthrows.strength : '-'+ this.character.savingthrows.strength
      },
      int(){
        return this.character.savingthrows.intelligence>0 ? '+'+this.character.savingthrows.intelligence : '-'+ this.character.savingthrows.intelligence
      },
      dex(){
        return this.character.savingthrows.dexterity>0 ? '+'+this.character.savingthrows.dexterity : '-'+ this.character.savingthrows.dexterity
      },
      wis(){
        return this.character.savingthrows.wisdom>0 ? '+'+this.character.savingthrows.wisdom : '-'+ this.character.savingthrows.wisdom
      },
      con(){
        return this.character.savingthrows.constitution>0 ? '+'+this.character.savingthrows.constitution : '-'+ this.character.savingthrows.constitution
      },
      cha(){
        return this.character.savingthrows.charisma>0 ? '+'+this.character.savingthrows.charisma : '-'+ this.character.savingthrows.charisma
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
    <div><span>str </span>{{ str }}</div>
    <div><span>int </span>{{ int }}</div>
    <div><span>dex </span>{{ dex }}</div>
    <div><span>wis </span>{{ wis }}</div>
    <div><span>con </span>{{ con }}</div>
    <div><span>cha </span>{{ cha }}</div>
  </div>
</template>

<style scoped>
  .wrapper{
    /* background-color: yellow; */
    border: 1px solid red;
    border-radius: 0.375rem;
    text-align: center;

    display: grid;
    grid-template-columns: auto auto;
    
    /* height: 15rem; */
    height: calc(12rem);
    min-width: 100%;

    padding-top: 35px;
    /* width: calc(90vw / 4); */
  }
</style>