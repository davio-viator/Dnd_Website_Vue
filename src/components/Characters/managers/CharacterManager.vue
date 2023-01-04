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
      show(change:any){
        console.log(change);
        let parsedName:string = change.name.split(' ')[0].toLowerCase()
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
    <MoneyManager 
      @value-change="(emitValue)=>show(emitValue)"
      v-if="caller == 'money'"
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
    background-color: #E8DCB8;
    height: calc(100vh - 4.5rem );
    width: 20rem;
    border-radius: 0.375rem 0 0 0.375rem ;
    padding: 12px;
    position: absolute;
    top: 4rem;
    right: 0;
  }
</style>