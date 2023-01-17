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
        let proficient = this.character.savingthrows.strength.proficient;
        let mod = this.character.savingthrows.strength.mod
        let proficiency = this.character.proficiency;
        if(proficient) return mod >= 0 ? '+'+(mod + proficiency) : (mod + proficiency);
        else return mod >= 0 ? '+'+mod : mod;
      },
      int(){
        let proficient = this.character.savingthrows.intelligence.proficient;
        let mod = this.character.savingthrows.intelligence.mod
        let proficiency = this.character.proficiency;
        if(proficient) return mod >= 0 ? '+'+(mod + proficiency) : (mod + proficiency);
        else return mod >= 0 ? '+'+mod : mod;
      },
      dex(){
        let proficient = this.character.savingthrows.dexterity.proficient;
        let mod = this.character.savingthrows.dexterity.mod
        let proficiency = this.character.proficiency;
        if(proficient) return mod >= 0 ? '+'+(mod + proficiency) : (mod + proficiency);
        else return mod >= 0 ? '+'+mod : mod;
      },
      wis(){
        let proficient = this.character.savingthrows.wisdom.proficient;
        let mod = this.character.savingthrows.wisdom.mod
        let proficiency = this.character.proficiency;
        if(proficient) return mod >= 0 ? '+'+(mod + proficiency) : (mod + proficiency);
        else return mod >= 0 ? '+'+mod : mod;
      },
      con(){
        let proficient = this.character.savingthrows.constitution.proficient;
        let mod = this.character.savingthrows.constitution.mod
        let proficiency = this.character.proficiency;
        if(proficient) return mod >= 0 ? '+'+(mod + proficiency) : (mod + proficiency);
        else return mod >= 0 ? '+'+mod : mod;
      },
      cha(){
        let proficient = this.character.savingthrows.charisma.proficient;
        let mod = this.character.savingthrows.charisma.mod
        let proficiency = this.character.proficiency;
        if(proficient) return mod >= 0 ? '+'+(mod + proficiency) : (mod + proficiency);
        else return mod >= 0 ? '+'+mod : mod;
      }
    },

    created(){
      console.log(this);
    },

    mounted(){
    }


  }

</script>

<template>
  <div class="wrapper">
    <div class="border" v-for="item in character.savingthrows">
      <span class="proficient-icon" :class="{'proficient':item.proficient}"></span>
      <span class="bold">{{ item.name }} </span>
      <span class="mod">{{ this[item.name] }}</span>
    </div>
  </div>
</template>

<style scoped>
  .wrapper{
    background-color: white;
    border: 1px solid red;
    border-radius: 0.375rem;
    text-align: center;

    display: grid;
    grid-gap: 0px 15px ;
    grid-template-columns: auto auto;
    
    /* height: 15rem; */
    height: calc(12rem);
    min-width: 100%;

    padding: 0 22px;

    /* padding-top: 35px; */
    /* width: calc(90vw / 4); */
  }

  .border{
    display: grid;
    grid-template-columns: 0 auto auto;
    
    padding-top: 20px;
    background-image: url('../../assets/svg/border-saving.svg');
    background-repeat: no-repeat;
    background-position: 0px 10px;
  }

  .proficient-icon{
    background-color: #fff;
    border: 1px dotted #838383;
    border-radius: 50%;
    height: 10px;
    width: 10px;
    position: relative;
    top:5%;
    left:-5px;
  }

  .proficient-icon.proficient{
    background-color: black;
  }

  .bold{
    font-weight: bold;
    font-size: 15px;
    text-align: right;
    margin-top: 1px;
    text-transform: uppercase;
  }

  .mod{
    font-size: 20px;
    text-align: right;
    margin-right:8px;
    line-height: 0.7;
  }
</style>