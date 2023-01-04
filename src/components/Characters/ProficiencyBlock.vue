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
        character:useCharacter().character
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
  <div class="wrapper">
    <div class="content">
      <div class="title">armor</div>
      {{ character.proficiencyies.armors.join(', ')  }}
    </div>
    <hr>

    <div class="content">
      <div class="title">weapons</div>
      {{ character.proficiencyies.weapons.join(', ')  }}
    </div>
    <hr>
    
    <div class="content">
      <div class="title">tool</div>
      {{ character.proficiencyies.tools.join(', ').length > 0 ? character.proficiencyies.tools.join(',') : 'None'}}
    </div>
    <hr>

    <div class="content">
      <div class="title">languages</div>
      {{ character.proficiencyies.languages.join(', ')  }}
    </div>
</div>
</template>

<style scoped>
  .wrapper{
    /* background-color: green; */
    margin-top: 15px;
    height: 25rem;

    min-width: 100%;
    border-radius: 0.375rem;

    border: 1px solid red;
  }

  .content{
    padding: 8px;
    height: 4.5rem;

    text-transform: capitalize;
  }

  .title{
    text-transform: uppercase;
  }
</style>