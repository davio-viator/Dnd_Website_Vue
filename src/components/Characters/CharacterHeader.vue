<script setup lang="ts">
  import { useCharacter } from '@/stores/CharacterService';
  import shortRest from '@/assets/svg/short_rest.svg'
  import longRest from '@/assets/svg/long_rest.svg'
</script>

<script type="module" lang="ts">

  export default {
    
    props:{
      base:String
    },

    data(){
      return{
        characterStore:useCharacter(),
        character:useCharacter().character,
        currentXp:0
      }
    },

    methods:{
      shortRestfn(){
        this.characterStore.shortRest();
      },
      longRestfn(){
        this.characterStore.longRest();
      }
    },

    computed:{
      characterPortrait(){
        let src:string = 'https://www.dndbeyond.com/avatars/9221/748/637202353208535995.jpeg?width=150&height=150&fit=crop&quality=95&auto=webp'
        if(this.character.portraitSrc!== '') src = this.character.portraitSrc 
        return src
      },
      classLevels(){
        let res = ''
        this.character.class.forEach((elem: any,i: number)=> {
          // const school = this.school[i] !== undefined ? "("+this.school[i]+")" : ""
          if(i+1 < this.character.class.length) res += `${elem} ${this.character.classLevel[i]} , `
          else res += `${elem} ${this.character.classLevel[i]} `
        })
        return res
        // return ""
      }
    },

    created(){
      this.currentXp = this.character.currentXp
    },

    mounted(){
    }


  }

</script>

<template>
  <div class="wrapper">
    <div class="content">
      <div :style="'background-image: url('+characterPortrait+')'" class="player-icon"></div>
      <div class="text">
        <span class="title">{{ character.firstname }} {{ character.lastname }}</span>
        <p style="text-transform: capitalize;">{{ character.sex }}  {{ character.race }}  {{ classLevels }}  <!-- {{ character.level }} --> </p>
        <label class="progress-bar-text" for="level"> level {{ character.level }}
          <progress class="progress-bar" id="level" :value="currentXp" :max="character.xpToNextLevel-character.totalXp"></progress>
          level {{ character.level+1 }}
        </label>
        <span>{{ character.totalXp + parseInt(currentXp+'') }} / {{ character.xpToNextLevel }}</span>
        <!--<input style="width:13%" type="range" min="0" v-model="currentXp" :max="character.xpToNextLevel-character.totalXp">-->
      </div>
      <div class="button-container">
        <div class="rest-button" @click="shortRestfn"> 
          <img class="rest-button-image" :src="shortRest" > 
          <span class="rest-button-text">Short Rest</span>
        </div>
        <div class="rest-button" @click="longRestfn"> 
          <img class="rest-button-image" :src="longRest"> 
          <span class="rest-button-text">Long Rest</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .wrapper{
    background-color: #090809;
    background-color: #262626 !important;
    height: 100%;
    width: 100%;

    color: white;
  }

  .content{
    position: relative;
    /* background-color: blue; */
    width: 1550px;
    height: 100%;
    margin: auto;

    display: grid;
    grid-template-columns: 80px auto auto;
  }

  .player-icon{
    /* background-image: url(https://www.dndbeyond.com/avatars/9221/748/637202353208535995.jpeg?width=150&height=150&fit=crop&quality=95&auto=webp); */
    /* background-size: contain; */
    background-size: cover;
    background-repeat: no-repeat;
    border: 2px solid #c53131;
    height: 60px;
    width: 60px;
    top: 1rem;
  }

  .title{
    font-weight: bold;
    text-transform: uppercase;
    color: white;
  }

  .progress-bar-text{
    font-size: 12px;
  }

  .progress-bar{
    height: 3px;
    margin-bottom: 5px;
  }

  .text{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding:18px 0px;
    color: lightgray;
  }

  .button-container{
    /* position: relative; */
    /* top: 40%; */
    display: flex;
    margin-top: 2.5rem;
  }

  .rest-button{
    height: 40px;
    width: 10rem;
    color: white;
    margin: 0px 12px;
    margin-bottom: 15px;
    cursor: pointer;
    border: 1px solid #c53131;
    border-radius: 5px;
  }

  .rest-button:hover{
    background-color: #090809;
  }

  .rest-button-text{
    position: absolute;
    top: 25%;
    left: 45px;
  }

  .rest-button-image{
    margin-left: 5px;
    margin-top: 4px;
    height: 30px;
    width: 30px;
  }


</style>