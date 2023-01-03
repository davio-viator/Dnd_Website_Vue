<script setup lang="ts">
  import AttackTab from './AttackTab.vue';
  import Action from './Action.vue';

  import { useCharacter } from '@/stores/CharacterService';
</script>

<script type="module" lang="ts">

  export default {
    
    props:{
      focused:Boolean
    },

    data(){
      return{
      actions:useCharacter().character.actions.action
      }
    },

    methods:{
      
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
  <div class="container">

    <AttackTab v-if="focused"/>
    <div class="action-wrapper">
      <h3 class="title">Actions in Combat</h3>
      <div class="border-left-thick">
        Attack, Cast a Spell, Dash, Disengage, Dodge, Grapple, Help, Hide, Improvise, Ready, Search, Shove, Use an Object
      </div>
      <Action 
      v-for="(action,i) in actions" 
      :title="action.title" 
      :text="action.text"
      :amount="action.times"
      :frequency="action.frequency"
      :used="action.used"
      @used="(emitUsed) => actions[i].used = emitUsed"
      />
    </div>

  </div>
</template>

<style scoped>
  .container{
    overflow: auto;
    overflow-x: hidden;
    height: calc(20rem +12rem + 15px - 15px)
  }

  .action-wrapper{
    padding: 0 12px;
  }

  .border-left-thick{
    margin-top: 8px;
    margin-left: 12px;
    border-left: 5px solid lightgray;
    padding-left: 5px;
    line-height: 1.5;
  }

  .title{
    margin-bottom: 5px;
    font-weight: bold;
  }
</style>