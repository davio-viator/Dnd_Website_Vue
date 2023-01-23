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
        character:useCharacter().character,
        characterStore:useCharacter(),
        self:this
      }
    },

    methods:{
      rollSavingThrow(e:any,item:any){
        let mod = item.mod;
        let proficiency = item.proficient ? this.character.proficiency : 0;
        let value = mod+proficiency
        let roll = this.characterStore.rollD20();
        let result = roll + value;
        if(roll == 20) alert(`You rolled a natural 20!!! result is ${result} (${roll} + ${value})`)
        else if(roll == 1) alert(`You rolled a natural 1!!! result is ${result} (${roll} + ${value})`)
        else alert(`You rolled a ${result} (${roll} + ${value})`)
      }
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
    },

    mounted(){
    }


  }

</script>

<template>
  <div class="outer-border">
    <div class="wrapper">
      <div class="border" v-for="item in character.savingthrows">
        <span class="proficient-icon" :class="{'proficient':item.proficient}"></span>
        <span class="bold">{{ item.name }} </span>
        <span @click="rollSavingThrow($event,item)" class="mod clickable">{{ self[item.name] }}</span>
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
    /* background-color: white; */
    /* border: 1px solid red; */
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
    grid-template-columns: 30% 38% auto;
    
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
    text-align: left;
    margin-top: 1px;
    text-transform: uppercase;
  }

  .mod{
    font-size: 20px;
    text-align: center;
    /* margin-right:8px; */
    line-height: 1.7;
  }

  .clickable{
    cursor: pointer;
    border-radius: 50%;
    width: 100%;
    height: 75%;
    margin-top: -9px;
  }

  .clickable:hover{

    background-color: #ced9e0;
  }
</style>