<script setup lang="ts">
  import SearchBar from '@/components/SearchBar.vue';
  import { useCharacter } from '@/stores/CharacterService';
  import copperSrc from '@/assets/svg/copper.svg'
  import silverSrc from '@/assets/svg/silver.svg'
  import electrumSrc from '@/assets/svg/electrum.svg'
  import goldSrc from '@/assets/svg/gold.svg'
  import platinumSrc from '@/assets/svg/platinum.svg'
  import NavBar from '@/components/navbar/NavBar.vue';
import MoneyManager from './MoneyManager.vue';
</script>

<script type="module" lang="ts">

  export default {
    props: {
        caller: String
    },
    data() {
        return {
            character: useCharacter().character,
            characterStore:useCharacter()
        };
    },
    methods: {
      changeCoinValue(change:any){
        console.log(change);
        this.characterStore.changeCoinValue(change.name,change.value)
      },
      adjustCoin(change:any){
        console.log(change);
        change.forEach(elem=>{
          if(elem.value){
            const val = parseInt(elem.value)
            if(elem.adding)this.characterStore.changeCoinValue(elem.name,this.characterStore.getCoinValue(elem.name)+val)
            else this.characterStore.changeCoinValue(elem.name,this.characterStore.getCoinValue(elem.name)-val)
          }
        })
      },
      closeManager(){
        this.characterStore.hideManager()
      }
    },
    computed: {
      coinTotal(){
        
        return this.character.inventory.copper/100 
        + this.character.inventory.silver/10
        + this.character.inventory.electrum/2
        + this.character.inventory.gold
        + this.character.inventory.platinum*10        
      }
    },
    created() {
    },
    mounted() {
    },
    components: { MoneyManager }
}

</script>

<template>
  <div class="wrapper">
    <button @click="closeManager" class="close-button">X</button>
    <MoneyManager 
      v-if="caller == 'money'"
      @valueChange="(emitValue)=>changeCoinValue(emitValue)"
      @adjust-coin="(emitValue)=>adjustCoin(emitValue)"
      :total="coinTotal"
      :copper="character.inventory.copper" 
      :silver="character.inventory.silver" 
      :electrum="character.inventory.electrum" 
      :gold="character.inventory.gold" 
      :platinum="character.inventory.platinum" 
    />
  </div>
</template>

<style scoped>
  .wrapper{
    z-index: 20 !important;
    border: 3px solid red;
    background-color: white;
    height: calc(100vh - 4.5rem );
    width: 25rem;
    border-radius: 0.375rem 0 0 0.375rem ;
    padding: 12px;
    position: absolute;
    top: 4rem;
    right: 0;
  }

  .close-button{
    padding: 12px;
    z-index: 20;
    color: red;
    position:absolute;
    top:0;
    right:0;
    background-color:transparent;
    border:none;
    cursor:pointer;
    font-weight: bold;
    font-size:22px
  }
</style>