<script setup lang="ts">
  import copperSrc from '@/assets/svg/copper.svg'
  import silverSrc from '@/assets/svg/silver.svg'
  import electrumSrc from '@/assets/svg/electrum.svg'
  import goldSrc from '@/assets/svg/gold.svg'
  import platinumSrc from '@/assets/svg/platinum.svg'
  import upArrow from '@/assets/svg/up-arrow.svg'
  import downArrow from '@/assets/svg/down-arrow.svg'

  import NavBar from '@/components/navbar/NavBar.vue';
  import { useCharacter } from '@/stores/CharacterService'
</script>

<script type="module" lang="ts">

  export default {
    emits:['valueChange','adjustCoin'],
    props:{

    },

    data(){
      return{
        characterStore:useCharacter(),
        character:useCharacter().character,
        healValue:0,
        damageValue:0,
      }
    },

    methods:{
      test(event:any){
        if(event.target == this.$refs.healInput) this.damageValue = 0
        else if( event.target == this.$refs.damageInput)this.damageValue = 0
        console.log(this.$refs.healInput.value,this.$refs.damageInput.value);
        // console.log(event.target.value,this.healValue);
      },
      overrideMaxHp(event:any){
        console.log(event.target.value);
        // this.characterStore.updateMaxHP(parseInt(event.target.value));
      },
      apply(){
        let current:number = parseInt(this.newHp);
        let max:number = parseInt(this.$refs.maxValue?.value);
        let temp:number = parseInt(this.$refs.tempValue?.value);
        this.characterStore.updateCurrentHP(current);
        this.characterStore.updateMaxHP(max);
        this.characterStore.updateTempHP(temp);
        this.damageValue = 0;
        this.healValue = 0;
      }
    },

    computed:{
      newHp(){
        console.log(this.healValue);
        let newHp = this.character.health.current+this.healValue-this.damageValue
        if(newHp > this.character.health.max) newHp = this.character.health.max
        if(newHp < 0) newHp = 0
        return  newHp
      },

    },

    created(){
    },

    mounted(){
    }


  }

</script>

<template>
  <div class="wrap">
    <div class="title">HP Management</div>
    
    <div class="manager-header">
      <div class="manager-header-element">
        <span class="title">CURRENT HP</span>
        <span>{{ character.health.current }}</span>
      </div>
      <div class="manager-header-element">
        <span class="title">MAX HP</span>
        <span class="green">{{ character.health.max }}</span>
      </div>
      <div class="manager-header-element">
        <span class="title">TEMP HP</span>
        <input ref="tempValue" class="manager-input-small" type="number" name="temp-hp" v-model="character.health.temp">
      </div>
    </div>

    <div class="inputs">
      <div style="display: flex;flex-direction: column; justify-content: space-evenly;">
        <div class="heal box"> 
          <span class="green">HEALING</span>
          <input ref="healInput" class="box-inputs" type="number" min=0 @click="test" @keyup="test" v-model="healValue">
        </div>
  
        <div class="health-box">
          <span style="text-transform:uppercase;font-weight:bold">new hp</span>
          <span style="font-size: 22px;">{{ newHp }}</span>
        </div>
  
        <div class="damage box"> 
          <span class="red">DAMAGE</span>
          <input ref="damageInput" class="box-inputs" type="number" min=0 @click="test" @keyup="test" v-model="damageValue">
        </div>
      </div>

      <div style="display: flex;flex-direction: column; justify-content: space-evenly;">
        <button @click="damageValue = 0;healValue++" class="buttons plus"></button>
        <button @click="healValue = 0;damageValue++" class="buttons minus"></button>
      </div>

    </div>

    <div @click="apply" class="apply-button">
      Apply
    </div>
    
    <div style="border-bottom: 1px solid #D8D8D8;"></div>

    <div class="modifier">
      <div style="text-align:center;margin-top:1rem" class="title">OVERRIDE MAX HP</div>
      <div class="box-inputs small">
        <input ref="maxValue" class="box-inputs-outline" type="number"  
        @change="overrideMaxHp" @keyup="overrideMaxHp" min=0 v-model="character.health.max">
      </div>
    </div>

  </div>
</template>

<style scoped>
  .wrap {
    background-color: white;
    height: 100%;
    width: 100%;
  }
  .title{
    font-weight: bold;
    font-size: 22px;
    margin-bottom: 1rem;
  }

  .green{
    color: green
  }

  .red{
    color: red;
  }

  .manager-header{
   display: flex;
   flex-direction: row; 
   justify-content: space-between;
   font-size: 25px;
   padding-bottom: 2rem;
   border-bottom: 1px solid #D8D8D8;

  }

  .manager-header-element{
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .manager-input-small{
    width: 4rem;
    font-size: 25px;
    text-align: center;
  }

  .inputs{
    display: flex;   
    justify-content: space-between; 
    height: 15rem;
    width: 12rem;
    margin: 0 auto;
  }

  .buttons{
    background-color: red;
    color: white;
    font-weight: bolder;
    border: none;
    padding: 0;
    width: 2.5rem;
    height: 2.5rem;
    cursor: pointer;
    border-radius: 0.375rem;
  }

  .buttons.plus::before{
    background-image: url(https://www.dndbeyond.com/Content/Skins/Waterdeep/images/sprites/plus_minus-white.svg);
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0px 0;
    content: "";
    display: block;
    height: 25px;
    width: 25px;
    margin: auto;
  }

  .buttons.minus::before{
    background-image: url(https://www.dndbeyond.com/Content/Skins/Waterdeep/images/sprites/plus_minus-white.svg);
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: -28px 0;
    content: "";
    display: block;
    height: 25px;
    width: 25px;
    margin: auto;
  }

  .box{
    /* border: 1px solid green; */
    border-radius: 0.375rem;
    height: 4rem;
    width: 5rem;
    text-align: center;
  }

  .health-box{
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .heal.box{
    border: 1px solid green;
  }

  .damage.box{
    border: 1px solid red;
  }

  .box-inputs{
    width: 100%;
    border: none;
    outline: none;
    text-align: center;
    font-size: 25px;
  }

  .box-inputs-outline{
    width: 100%;
    text-align: center;
    font-size: 25px;
    border-radius: 0.375rem;
  }

  .modifiers{
    margin: auto;
  }

  .box-inputs.small{
    margin: auto;
    width: 30%;
  }

  .apply-button{
    width:30%;
    margin:8px auto;
    background-color: white;
    text-align: center;
    text-transform: uppercase;
    border: 1px solid #C8C8C8;
    padding: 12px 0;
    border-radius: 0.375rem;   
    cursor: pointer;
    margin-bottom: 1rem;
  }

  .apply-button:hover{
    background-color: #ced9e0;
  }




























  .upper{
    text-transform: uppercase;
    font-size: 12px;
  }

  .bold{
    font-weight: bold;
  }

  .flex{
    display:flex;
  }

  .flex-column{
    display: flex;
    flex-direction: column;
  }

  .flex-center{
    display: flex;
    justify-content: center;
  }

  .section{
    border-top: 1px solid #D8D8D8;
    border-bottom: 1px solid #D8D8D8;

    padding: 8px 0;
  }

  .total{
    border-left: 3px solid red;
    background-color: #F1F1F1;
    padding: 12px 15px;

    display: flex;
    justify-content: space-between;
    line-height: -1.2;
  }

  .coin-icon-small{
    height:20px;
    width:20px;
  }

  .coin-icon-big{
    height:40px;
    width:40px;
  }

  .row{
    margin: 12px 0;
    border-bottom: 1px solid #F1F1F1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .coin-input{
    outline: none;
    border: none;
    text-align: right;
    margin: auto 0;
    width: 40%;
    font-size: 20px;
  }

  .coin-input-small{
    outline: none;
    border: 1px solid #D8D8D8;
    border-radius: 0.375rem;
    text-align: right;
    margin: auto 0;
    width: 80%;
    font-size: 20px;
    /* margin-left:5px */
  }

  .coin-input:hover::-webkit-inner-spin-button,
  .coin-input:hover::-webkit-outer-spin-button{
    visibility: hidden;
  }

  .coin-input:focus::-webkit-inner-spin-button,
  .coin-input:focus::-webkit-outer-spin-button{
    visibility: visible;
  }

  .coin-input:focus{
    outline: auto;
    border: auto;
  }

  .sub-content{
    color: gray;
    font-size: 12px;
  }

  .adjust{
    margin-top: 0.5rem;
    text-align: center;
  }

  .button-container{
    width: 90%;
    margin: 12px auto;
    display: flex;
    justify-content: space-between;

  }

  .adjust-input{
    cursor:pointer;
    height: 2rem;
    width: 5rem;
    border-radius: 0.375rem;
    font-weight: bold;
  }


  .adjust-input.add{
    background-color: #40d250;
    border: none;
    color: white;
  }

  .adjust-input.add:hover{
    background-color: #34773c;
    border: none;
    color: white;
  }

  .adjust-input.remove{
    background-color: red;
    border: none;
    color: white;
  }

  .adjust-input.remove:hover{
    background-color: rgb(146, 24, 24);
    border: none;
    color: white;
  }

  .adjust-input.clear{
    background-color: white;
    border: 1px solid red;
    color: red;
  }

  .sign{
    font-weight: bold;
    text-transform: uppercase;
  }

  .sign.minus{
    font-size: 16px;
  }
</style>