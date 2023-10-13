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
        isLimited:false,
        isReaction:false,
        icon:'',
        iconSrc:'',
        name:'',
        subtitle:'',
        range:'',
        hit_dc:'',
        damage:'',
        notes:'',
        attack_type:'',
        damage_type:'',
        location:'',
        properties:'',
        proficient:false,
        text:'',
        frequency:'',
        quantity:'',
        level:'', 
        school:'',
        component:'',
        duration:''
      }
    },

    methods:{
      test(event:any){
        console.log(event.target.files[0]);
        this.icon = event.target.files[0]
        let reader = new FileReader();
          reader.onload = (e:any)=>{
          this.iconSrc = e.target.result
        }
        reader.readAsDataURL(event.target.files[0]) 
      },
      handleSubmit(event: Event){
        const values = {...this}
        console.log(values);
      }
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
    <label class="input-label" for="icon">Choose an icon
      <img v-if="iconSrc !== ''" style="height:30px; aspect-ratio:1/1" :src="iconSrc" alt="icon preview">
      <input @change="test" type="file" accept=".svg" name="icon" id="">
    </label>

    <label class="input-label" for="name">Name of the action
      <input v-model="name" type="text" name="name" id="">
    </label>

    <label class="input-label" for="subtitle">Give a subtype of the action (optional)
      <input v-model="subtitle" type="text" name="subtitle" id="">
    </label>

    <label class="input-label" for="range">The range of the action(leave blank if it doesn't have a range)
      <input v-model="range" type="number" name="range" id="">
    </label>

    <label class="input-label" for="hit_dc">The hit die or the DC for the action to succeed (leave blank if there is no hit die or dc)
      <input v-model="hit_dc" type="text" name="hit_dc" id="">
    </label>

    <label class="input-label" for="damage">The damage (healing) done by the action (leave blank if it doesn't do damage) 
      <input v-model="damage" type="text" name="damage" id="">
    </label>

    <label class="input-label" for="notes">The notes of the action
      <input v-model="notes" type="text" name="notes" id="">
    </label>

    <label class="input-label" for="bonus">Can the action be a bonus action ?
      <input type="checkbox" v-model="isBonusAction" name="bonus" id="">
    </label>

    <label class="input-label" for="reaction">Is the action be a reaction ?
      <input type="checkbox" v-model="isReaction" name="reaction" id="">
    </label>

    <label class="input-label" for="isAttack">Is the action an attack
      <input type="checkbox" v-model="isAttack" name="isAttack" id="">
    </label>

    <label class="input-label" for="isSpell">Is the action a spell
      <input type="checkbox" v-model="isSpell" name="isSpell" id="">
    </label>

    <label class="input-label" for="isFeature">Is the action a feature
      <input type="checkbox" v-model="isFeature" name="isFeature" id="">
    </label>

    <label class="input-label" v-if="isAttack" for="attack_type"> Is it melee or ranged
      <input v-model="attack_type" type="text" name="attack_type" id="">
    </label>

    <label class="input-label" v-if="isAttack || isSpell || isFeature" for="damage_type">What kind of damage (healing) does it do
      <input v-model="damage_type" type="text" name="damage_type" id="">
    </label>

    <label class="input-label" v-if="isAttack || isSpell" for="location">Where do the action come from? (eg inventory, spell scroll)
      <input v-model="location" type="text" name="location" id="">
    </label>

    <label class="input-label" v-if="isAttack" for="properties">What are the properties of the attack
      <input v-model="properties" type="text" name="properties" id="">
    </label>

    <label class="input-label" v-if="isAttack" for="proficient">Are you proficient with the attack
      <input v-model="proficient" type="checkbox" name="proficient" id="">
    </label>

    <label class="input-label" v-if="isFeature" for="limited">Is the use of the action limited (don't include spells)
      <input v-model="isLimited" type="checkbox" name="limited" id="">
    </label>

    <label class="input-label" v-if="isSpell || isFeature" for="text">What is the description of the action (optional)
      <input v-model="text" type="text" name="text" id="">
    </label>

    <label class="input-label" v-if="isFeature" for="frequency">At what frequency does the action replenish
      <input v-model="frequency" type="option" name="frequency" id="">
    </label>

    <label class="input-label" v-if="isFeature" for="quantity">How many time can you use the action before needed to rest
      <input v-model="quantity" type="number" name="quantity" id="">
    </label>

    <label class="input-label" v-if="isSpell" for="level">What level is this spell
      <input v-model="level" type="option" name="level" id="">
    </label>

    <label class="input-label" v-if="isSpell" for="school">What school does this spell come from
      <input v-model="school" type="text" name="school" id="">
    </label>

    <label class="input-label" v-if="isSpell" for="component">What are the components needed for this spell (ie v,S and if need for ingredient adding them)
      <input v-model="component" type="text" name="component" id="">
    </label>

    <label class="input-label" v-if="isSpell" for="duration">What is the duration of the spell
      <input v-model="duration" type="text" name="duration" id="">
    </label>
  </div>

  <button class="submit" type="submit" @click="handleSubmit">Create action</button>

</template>

<style scoped>
  .container{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60vw;
    margin: 3rem auto;
  }

  .input-label{
    padding: 1rem 2rem;
    border: 1px solid black;
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: space-between;
  }

  input{
    max-width: 12rem;
  }

  .submit{

  }
</style>