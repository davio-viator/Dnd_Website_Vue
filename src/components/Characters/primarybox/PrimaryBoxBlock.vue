<script setup lang="ts">
  import NavBar from '../../navbar/NavBar.vue';
  import Actions from './PrimaryBoxActions.vue';
  import Spells from './PrimaryBoxSpells.vue';
  import Inventory from './PrimaryBoxInventory.vue';

  import { useCharacter } from '@/stores/CharacterService';
</script>

<script type="module" lang="ts">

  export default {
    
    props:{
      base:String
    },

    data(){
      return{
        // tabs:['actions','spells','inventory','features & traits',' description','notes','extras'],
        tabs:['actions','spells','inventory','features & traits','notes'],
        selected:'',
        isSpellcaster:useCharacter().character.spellcaster
      }
    },

    methods:{
      // handleDisplay(e:any,selected:string){
      //   console.log(e.target.value,selected);
      //   return selected
      // }
    },

    computed:{
      handleDisplay(){
        ''
      },
      realTabs(){
        if(!this.isSpellcaster) return this.tabs.filter(tab=>{
          return tab != "spells"
        })
        else return this.tabs
      }
    },

    created(){

    },

    mounted(){
    }


  }

</script>

<template>
  <div class="wrapper outer-border">
    <nav>
      <NavBar @selected="(tabSelected)=>selected = tabSelected" :tabs="realTabs"/>
    </nav>
    <div>
      <Actions v-if="selected=='actions'" />
      <Spells v-if="selected=='spells' && isSpellcaster" />
      <Inventory v-if="selected == 'inventory'"/>
    </div>
  </div>
</template>

<style scoped>

  .outer-border{
    background-image: url('@/assets/svg/primary-box-border.svg'); 
    background-repeat: no-repeat;
    object-fit: fill;
    background-position: 0px -2px;
    /* background-size: 100px 95px; */
  }

  .wrapper{
    width: 100%;
    height: 100%;

    background-color: white;
    border: 1px solid transparent;
    border-radius: 2rem;
    padding: 0px 13px;
  }
</style>