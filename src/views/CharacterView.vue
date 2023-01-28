<script setup lang="ts">
  import StatBlock from '../components/Characters/CharacterStatBlock.vue'
  import SavingThrows from '../components/Characters/SavingThrowBlock.vue'
  import Sense from '../components/Characters/SensesBlock.vue'
  import Proficiency from '@/components/Characters/ProficiencyBlock.vue';
  import Skill from '@/components/Characters/SkillsBlock.vue'
  import SubStat from '@/components/Characters/SubStatBlock.vue';
  import HealthBlock from '@/components/Characters/HealthBlock.vue';
  import StatusBlock from '@/components/Characters/StatusBlock.vue';
  import PrimaryBox from '@/components/Characters/primarybox/PrimaryBoxBlock.vue';
  import CharacterHeader from '@/components/Characters/CharacterHeader.vue';

  import { useCharacter } from '@/stores/CharacterService';
  import { useDisplayNote } from '@/stores/counter';
  import CharacterManager from '@/components/Characters/managers/CharacterManager.vue';
</script>

<script type="module" lang="ts">

  export default {
    
    props:{
      
    },

    data(){
      return{
        id:this.$route.params.id,
        character:useCharacter().character,
        inspiration:useCharacter().character.inspiration,
        characterStore:useCharacter(),
      }
    },

    methods:{
      roll(e:any){
        let initiative:number = parseInt(e.target.value)
        alert(`You rolled ${initiative + this.characterStore.rollD20()}`)
        },
        closeManager(){
          this.characterStore.displayManager()
          this.characterStore.setManagerCaller('')
        },
        updateAc(event:any){
          let value:number = parseInt(event.target.value)
          if(!Number.isNaN(value)) this.characterStore.changeCharacterAC(value)
        }

    },

    computed:{
      isManagerOpen(){
        let status = this.characterStore
        return status.managerOpen
      },
      manager(){
        let status = this.characterStore
        return status.managerCaller
      },
      maxHealth(){
        return this.character.health.max
      },
      currentHealth(){
        return this.character.health.current
      },
      tempHealth(){
        return this.character.health.temp
      }

    },

    created(){

    },

    mounted(){

    }


}

</script>

<template>
  <div class="character-header">
    <CharacterHeader/>
  </div>
  <div style="background-image: url(https://www.dndbeyond.com/avatars/61/484/636453131399186965.jpeg);margin-top:0px;padding-top:1px">

    <div v-if="isManagerOpen && manager!==''" class="manager">
      <CharacterManager :caller="manager" />
    </div>


    <div class="container">
  
      <div class="statblock-container a">
        <StatBlock 
          v-for="i in character.stats"
          :name="i.name"
          :modifier="i.bonus"
          :score="i.score"
        />
      </div>
  
      <div class="passives b">
        <SavingThrows/>
        <Sense/>
        <Proficiency/>
      </div>
  
      <div class="skill c">
        <Skill/>
      </div>
  
        <div class="substats d">
          <SubStat title="proficiency" :content="character.proficiency+''" footer="bonus"/>
          <SubStat title="walking" :content="character.speed" footer="speed" speed/>
        </div>
  
        <div class="g health-block">
          <div class="inspiration">
            <div @click="characterStore.setInspiration()" class="box" :class="{'checked':character.inspiration}">
  
            </div>
            <span style="position:absolute;bottom:0;padding-left:5px;padding-bottom:4px">INSPIRATION</span>
          </div>
          <HealthBlock :max="maxHealth" :current="currentHealth" :temp="tempHealth" />
        </div>
  
        <div class="initiative-armor e">
  
          <div class="initiative-box">
            <span>INITIATIVE</span>
            <input class="initiative" @click="roll" type="button" :value="character.initiative > 0 ? '+'+character.initiative : '-'+character.initiative">
          </div>
  
          <div class="armor-box">
            <span style="margin-top: 5px;" class="titre">
              Armor
            </span>
            <!-- <span style="margin-top:auto;font-size:25px;font-weight:bold">{{ character.armor }}</span> -->
            <input @change="updateAc" @keyup="updateAc" class="armor-class-input" type="number" name="armor class" :value="character.armor" >
            <span style="padding:0;margin-bottom: 15px;" class="titre">
              Class
            </span>
          </div>
        </div>
  
        <div class="status h">
          <StatusBlock :defences="character.defences" :conditions="character.conditions" />
        </div>
  
        <div class="primary-box i">
          <PrimaryBox />
        </div>
    </div>
  </div>
</template>

<style scoped>
  .container{
    margin-top: 2rem;
    width: 1550px;
    margin-left: auto;
    margin-right: auto;

    display: grid;
    grid-template-columns: repeat(5, 300px);
    grid-template-rows: 100px 12rem 12rem 25rem;
    grid-gap:15px;
    grid-auto-rows: 100px;
    grid-template-areas:
      "a a d g g"
      "b c e h h"
      "b c i i i"
      "b c i i i";
    align-items: start;
  }

  .character-header{
    height: 6rem;
  }

  .statblock-container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 100%;
  }
  .passives{
    height: 100%;
  }

  .skill{
    height: 100%;
  }

  .substats{
    height: 100%; 
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .inspiration{
    /* position: absolute; */
    bottom: 0;
    text-transform: uppercase;
    background-color: none;
    width: 18%;
    border-radius: 0.375rem;

    background-image: url('@/assets/svg/inspiration-border.svg'); 
    background-repeat: no-repeat;
    object-fit: fill;
    background-position: 14px 12px;
    background-size: 82px;
  }

  .box{
    background-color: white ;
    border-radius: 0.75em;
    border: 1px solid red;
    border-color: transparent;
    margin: auto;
    margin-top: 1.6rem;
    height: 39px;
    width: 39px;
  }

  .checked{
    background-image: url(https://cdn.discordapp.com/attachments/321941760911736833/1027676300351119532/Capture_decran_2022-10-06_221801.png);
    object-fit: contain;
  }

  .health-block{
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .initiative-armor{
    height: 50%; 
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .initiative-box{
    width: 48%;
    display: flex;
    flex-direction: column;
    text-align: center;
    z-index: 10;

    height: 100%;
    background-image: url('@/assets/svg/initiative-border.svg'); 
    background-repeat: no-repeat;
    object-fit: fill;
    background-position: 22px 23px;
    background-size: 100px;
  }

  .armor-box{
    /* background-color: white; */
    text-align: center;
    width: 48%;
    display: flex;
    flex-direction: column;
    /* border: 1px solid red; */
    border-radius: 30%;

    background-image: url('@/assets/svg/armor-border.svg'); 
    background-repeat: no-repeat;
    object-fit: fill;
    background-position: 22px -0px;
    background-size: 100px 95px;
  }

  .armor-class-input{
    /* margin-top:auto; */
    font-size:23px;
    font-weight:bold;
    text-align: center;
    border:none;
    padding-left: 18px;
    width: 45%;
    margin-left: 2.5rem;
    background-color: transparent;
  }

  .armor-class-input:hover::-webkit-inner-spin-button,
  .armor-class-input:hover::-webkit-outer-spin-button{
    visibility: hidden;
  }

  .armor-class-input:focus::-webkit-inner-spin-button,
  .armor-class-input:focus::-webkit-outer-spin-button{
    visibility: visible;
  }

  .titre{
    text-transform: uppercase;
    color: gray;
    padding-top: 8px;
    font-size:14px
  }

  .initiative{
    width: 45%;
    margin-left: 28%;
    margin-top: 1rem;
    font-size: 22px;
    padding: 5px 0px;
    border-radius: 0.500rem;
    background-color: white;
    border: 1px solid #bfccd6;
    /* outline: 1px solid red; */
    outline-offset: 8px;
    cursor: pointer;
  }

  .initiative:hover {
    background-color: #ced9e0;
  }

  .status{
    height: 50%;
  }

  .primary-box{
    /* margin-top: -6rem;
    height: calc(100% - 6rem - 15px); */
    position: absolute;
    top: -95px;
    height: calc(100% + 95px);
    width: 100%;
  }

  .a{grid-area: a;}
  .b{grid-area: b;}
  .c{grid-area: c;}
  .d{grid-area: d;}
  .e{grid-area: e;}
  .f{grid-area: f;}
  .g{grid-area: g;}
  .h{grid-area: h;}
  .i{grid-area: i;}
  


 
</style>