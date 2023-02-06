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
      },
      updateSkillProficiency(elem:any){
        this.characterStore.updateSkillProficiency(elem.skill)
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
  <div class="outer-border">
    <div class="wrapper">
      <div class="header">
        <span class="bold">Prof</span><span class="bold">mod</span><span class="bold">skill</span><span class="bold">bonus</span>
      </div>
  
      <div>
        <div v-for="(elem,i) in character.skills" class="content">
          <input class="skill-radio" @click="updateSkillProficiency(elem)" disabled type="checkbox" :checked="elem.proficient">
          <span style="text-transform:uppercase">{{ elem.modifier }}</span>
          <!-- <span style="border-bottom:1px solid #d8d8d8">{{ elem.skill }}</span> -->
          <span style="border-bottom:1px solid #d8d8d8">{{ elem.name }}</span>
  
          <span v-if="elem.proficient" class="bonus clickable" :data-name="elem.skill" @click="rollSkill">{{ elem.bonus+character.proficiency >= 0 ? '+'+(elem.bonus+character.proficiency) : (elem.bonus+character.proficiency) }}</span>
          <span v-else class="bonus clickable" :data-name="elem.skill" @click="rollSkill">{{ elem.bonus >= 0 ? '+'+elem.bonus : elem.bonus }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

  .outer-border{
    height: 100%;
    background-image: url('@/assets/svg/skills-border-fitting.svg'); 
    background-repeat: no-repeat;
    object-fit: fill;
    /* background-position: -5px -3px; */
    /* background-size: 300px 192; */
  }

  .wrapper{
    /* background-color: white; */
    height: 100%;

    padding: 12px 10px;
    min-width: 100%;
    border-radius: 0.375rem;

    /* border: 1px solid red; */
  }
  
  .header{
    /* color:white; */
    text-transform: uppercase;
    display: grid;
    grid-template-columns: 3rem 3rem 8rem 1rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    margin-left: 0.8rem;
    font-size: 12px;
  }

  .bold{
    font-weight: bold;
  }

  .content{
    display: grid;
    grid-template-columns: 3.5rem 3rem 8rem 1rem;

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
    margin-top: 5px;
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

  .clickable:hover{
    background-color: #ced9e0;
  }
</style>