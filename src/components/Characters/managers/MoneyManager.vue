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

  import {getRef, setRef} from '@/services/Utils'
</script>

<script type="module" lang="ts">

  export default {
    emits:['valueChange','adjustCoin'],
    props:{
      base:String,
      total:Number,
      copper:Number,
      silver:Number,
      electrum:Number,
      gold:Number,
      platinum:Number,
    },

    data(){
      return{
        characterStore:useCharacter(),
        detailOpen:true,
        details:[
          {
            name:"Platinum (pp)",
            convertion:"1pp = 10gp",
            quantite:this.platinum,
            src:platinumSrc,
            nameComp:'platinum',
            acronyme:'pp'
          },
          {
            name:"Gold (gp)",
            convertion:"",
            quantite:this.gold,
            src:goldSrc,
            nameComp:'gold',
            acronyme:'gp'
          },
          {
            name:"Electrum (ep)",
            convertion:"1gp = 2ep",
            quantite:this.electrum,
            src:electrumSrc,
            nameComp:'electrum',
            acronyme:'ep'
          },
          {
            name:"Silver (sp)",
            convertion:"1gp = 10sp",
            quantite:this.silver,
            src:silverSrc,
            nameComp:'silver',
            acronyme:'sp'
          },
          {
            name:"Copper (cp)",
            convertion:"1gp = 100cp",
            quantite:this.copper,
            src:copperSrc,
            nameComp:'copper',
            acronyme:'cp'
          },
        ],
        self:this
      }
    },

    methods:{
      adjustCoins(e:any){
        let adjustArray:Array<any> = [
          {
            name:getRef('pp','name',this.$refs),
            value:getRef('pp','value',this.$refs),
            adding:e.target.name == 'add'
          },
          {
            name:getRef('gp','name',this.$refs),
            value:getRef('gp','value',this.$refs),
            adding:e.target.name == 'add'
          },
          {
            name:getRef('ep','name',this.$refs),
            value:getRef('ep','value',this.$refs),
            adding:e.target.name == 'add'
          },
          {
            name:getRef('sp','name',this.$refs),
            value:getRef('sp','value',this.$refs),
            adding:e.target.name == 'add'
          },
          {
            name:getRef('cp','name',this.$refs),
            value:getRef('cp','value',this.$refs),
            adding:e.target.name == 'add'
          },
          
        ]
        console.log(adjustArray,e.target.name)
        this.$emit("adjustCoin",adjustArray)
        this.clearInputs()
      },
      clearInputs(){
        setRef('pp','value',null,this.$refs);
        setRef('gp','value',null,this.$refs);
        setRef('ep','value',null,this.$refs);
        setRef('sp','value',null,this.$refs);
        setRef('cp','value',null,this.$refs);
      }
    },

    computed:{
      detailsComp(){
        this.details.forEach((elem:any) => {
          let name:string = elem.name.split(' ')[0].toLowerCase(); 
          elem.quantite = (this as any)[name];
        })

        return this.details
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
    <div class="title">Manage Coin</div>
    
    <div class="available">
      <div class="upper title">my coins</div>
      <div class="section">
        <div class="total">
          <div><span class="bold">Total </span> (in <span class="bold">gp</span>)</div>
          <div class="flex">
            <span style="margin-top: 1px;">{{ total?.toFixed(2) }}</span>
            <div class="flex">
              <img class="coin-icon-small" :src="goldSrc" alt="gold icon">
              <span v-if="detailOpen" class="coin-icon-small" @click="detailOpen = !detailOpen"><img :src="upArrow" alt="up arrow"></span>
              <span v-else class="coin-icon-small" @click="detailOpen = !detailOpen"><img :src="downArrow" alt="down arrow"></span>
            </div>
          </div>
        </div>
        <div v-if="detailOpen" class="details">
          <div v-for="detail in detailsComp" class="row">
            <div class="flex">
              <img class="coin-icon-big" :src="detail.src" alt="platinum coin">
              <div class="flex-column">
                <span>{{detail.name}}</span>
                <span class="sub-content">{{detail.convertion}}</span>
              </div>
            </div>
            <input 
              class="coin-input" 
              type="number" 
              @change="$emit('valueChange',{name:detail.nameComp,value:parseInt(($event['target'] as any).value)})" 
              :name="'quantite'+detail.name" 
              :value="detail.quantite" 
              min="0">
          </div>
        </div>

      </div>
    </div>

    <div class="adjust">
      <div class="upper title">Adjust coin</div>
      <div class="input-container flex">
          <div v-for="detail in details" class="flex-row">
            <div class="flex-center">
              <img class="coin-icon-small" :src="detail.src" alt="">
              <span style="line-height:1.5" class="upper bold">{{ detail.acronyme}}</span>
            </div>
            <input class="coin-input-small" :ref="detail.acronyme" :name="detail.nameComp" type="number" min=0  >
        </div>
      </div>
      <div class="button-container">
        <button name="add" @click="adjustCoins" class="adjust-input add"><span class="sign">+</span> ADD</button>
        <button name="remove" @click="adjustCoins" class="adjust-input remove"><span class="sign minus">-</span> REMOVE</button>
        <button @click="clearInputs" class="adjust-input clear"><span class="sign">X</span> CLEAR</button>
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