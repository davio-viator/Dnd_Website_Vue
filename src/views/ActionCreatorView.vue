<script setup lang="ts">

</script>

<script type="module" lang="ts">

  export default {
    
    props:{
      base:String
    },

    data(){
      return{
        isAttack:false,
        isFeature:false,
        isSpell:false,
        isBonusAction:false,
        isReaction:false
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
    <label for="icon">choose an icon
      <input type="file" name="icon" id="">
    </label>

    <label for="name">name of the action
      <input type="text" name="name" id="">
    </label>

    <label for="subtitle">give a subtype of the action (optional)
      <input type="text" name="subtitle" id="">
    </label>

    <label for="range">the range of the action(leave blank if it doesn't have a range)
      <input type="number" name="range" id="">
    </label>

    <label for="hit_dc">the hit die or the DC for the action to succeed (leave blank if there is no hit die or dc)
      <input type="text" name="hit_dc" id="">
    </label>

    <label for="damage">the damage (healing) done by the action (leave blank if it doesn't do damage) 
      <input type="text" name="damage" id="">
    </label>

    <label for="notes">the notes of the action
      <input type="text" name="notes" id="">
    </label>

    <label for="bonus">can the action be a bonus action ?
      <input type="checkbox" v-model="isBonusAction" name="bonus" id="">
    </label>

    <label for="reaction">is the action be a reaction ?
      <input type="checkbox" v-model="isReaction" name="reaction" id="">
    </label>

    <label for="isAttack">is the action an attack
      <input type="checkbox" v-model="isAttack" name="isAttack" id="">
    </label>

    <label for="isSpell">is the action a spell
      <input type="checkbox" v-model="isSpell" name="isSpell" id="">
    </label>

    <label for="isFeature">is the action a feature
      <input type="checkbox" v-model="isFeature" name="isFeature" id="">
    </label>

    <label v-if="isAttack" for="attack_type"> is it melee or ranged
      <input type="text" name="attack_type" id="">
    </label>

    <label v-if="isAttack || isSpell || isFeature" for="damage_type">what kind of damage (healing) does it do
      <input type="text" name="damage_type" id="">
    </label>

    <label v-if="isAttack || isSpell" for="location">where do the action come from? (eg inventory, spell scroll)
      <input type="text" name="location" id="">
    </label>

    <label v-if="isAttack" for="properties">what are the properties of the attack
      <input type="text" name="properties" id="">
    </label>

    <label v-if="isAttack" for="proficient">are you proficient with the attack
      <input type="checkbox" name="proficient" id="">
    </label>

    <label v-if="isFeature" for="limited">is the use of the action limited (don't include spells)
      <input type="checkbox" name="limited" id="">
    </label>

    <label v-if="isSpell || isFeature" for="text">what is the description of the action (optional)
      <input type="text" name="text" id="">
    </label>

    <label v-if="isFeature" for="frequency">at what frequency does the action replenish
      <input type="option" name="frequency" id="">
    </label>

    <label v-if="isFeature" for="quantity">how many time can you use the action before needed to rest
      <input type="number" name="quantity" id="">
    </label>

    <label v-if="isSpell" for="level">what level is this spell
      <input type="option" name="level" id="">
    </label>

    <label v-if="isSpell" for="school">what school does this spell come from
      <input type="text" name="school" id="">
    </label>

    <label v-if="isSpell" for="component">what are the components needed for this spell (ie v,S and if need for ingredient adding them)
      <input type="text" name="component" id="">
    </label>

    <label v-if="isSpell" for="duration">what is the duration of the spell
      <input type="text" name="duration" id="">
    </label>
  </div>


</template>

<style scoped>
  .container{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60vw;
    margin: 3rem auto;
  }

  input{
    max-width: 8rem;
  }
</style>