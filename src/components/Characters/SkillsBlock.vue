<script setup lang="ts">
  import { faker } from '@faker-js/faker';
  import { useCharacter } from '@/stores/CharacterService'; 
</script>

<script type="module" lang="ts">

  export default {
    
    props:{

    },

    data(){
      return{
        character:useCharacter().character,
        characterStore:useCharacter()
      }
    },

    methods:{
      rollSkill(e:any){
        let bonus:any = parseInt(e.target.innerText);
        let name:string = e.target.dataset.name;
        let roll:number = this.characterStore.rollD20();
        let result:number = roll+bonus

        if (roll == 1) alert(`You rolled a natural 1!!! result is ${result} (${roll} + ${bonus}) for ${name}`)
        else if(roll<20)alert(`You rolled ${result} (${roll} + ${bonus}) for ${name}`)
        else if (roll == 20) alert(`You rolled a natural 20!!! result is ${result} (${roll} + ${bonus}) for ${name}`)
      }
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
    <div class="header">
      <span>Prof</span><span>mod</span><span>skill</span><span>bonus</span>
    </div>

    <div>
      <div v-for="(elem,i) in character.skills" class="content">
        <input class="skill-radio" readonly type="checkbox" :checked="elem.proficient">
        <span style="text-transform:uppercase">{{ elem.modifier }}</span>
        <span style="border-bottom:1px solid #d8d8d8">{{ elem.skill }}</span>
        <span class="bonus" :data-name="elem.skill" @click="rollSkill" style="">{{ elem.bonus >= 0 ? '+'+elem.bonus : '-'+elem.bonus }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .wrapper{
    background-color: white;
    height: 100%;

    padding: 12px 10px;
    min-width: 100%;
    border-radius: 0.375rem;

    border: 1px solid red;
  }
  
  .header{
    /* color:white; */
    text-transform: uppercase;
    display: grid;
    grid-template-columns: 3rem 3rem 8rem 1rem;
    margin-bottom: 1rem;
  }

  .content{
    display: grid;
    grid-template-columns: 3rem 3rem 8.5rem 1rem;

    text-transform: capitalize;
    height: 2.5rem;
    padding: 5px;
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

  .bonus{
    padding-top: 3px;
    border:1px solid #d8d8d8;
    border-radius:0.375rem;
    width:2rem;
    text-align:center;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
  }
</style>