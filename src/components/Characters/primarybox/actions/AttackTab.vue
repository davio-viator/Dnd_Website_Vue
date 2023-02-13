<script setup lang="ts">
  import Attack from './Attack.vue';
  import { useCharacter } from '@/stores/CharacterService';
</script>

<script type="module" lang="ts">

  export default {
    
    props:{
      focused:Boolean
    },

    data(){
      return{
        attacks:useCharacter().character.actions.attacks,
        regular:[],
        bonus:[]
      }
    },

    methods:{
      
    },

    computed:{

    },

    created(){

    },

    mounted(){
      this.attacks.forEach((elem: { bonus: any; }) =>  {
        if(!elem.bonus)this.regular.push(elem as never)
        else if(elem.bonus)this.bonus.push(elem as never)
      })
    }


  }

</script>

<template>
  <div class="wrapper">
    <div class="title"><span class="title-text">actions • </span>Attacks per Action: {{ 1 }}</div>

    <div class="attack-header"><span> </span><span>attack</span><span>range</span><span>hit / dc</span><span>damage</span><span>notes</span></div>

    <Attack 
      v-for="(attack,i) in regular"
      :icon="attack['icon']"
      :name="attack['name']"
      :attack_type="attack['attack_type']"
      :range="attack['range']"
      :range_type="attack['range_type']"
      :hit_dc="attack['hit_dc']+''"
      :damage="attack['damage']"
      :damage_icon="attack['damage_icon']"
      :notes="attack['notes']"
      :damage_type="attack['damage_type']"
    />

    <div v-if="focused" >
      <div class="title"><span class="title-text">bonus actions</span></div>

      <div class="attack-header"><span> </span><span>attack</span><span>range</span><span>hit / dc</span><span>damage</span><span>notes</span></div>

      <Attack 
      v-for="(attack,i) in bonus"
      :icon="attack['icon']"
      :name="attack['name']"
      :attack_type="attack['attack_type']"
      :range="attack['range']"
      :range_type="attack['range_type']"
      :hit_dc="attack['hit_dc']+''"
      :damage="attack['damage']"
      :damage_icon="attack['damage_icon']"
      :notes="attack['notes']"
      :damage_type="attack['damage_type']"
    />
      
    </div>
  </div>
</template>

<style scoped>
  .wrapper{
    padding: 0 12px;
  }

  .title{
    border-bottom: 1px solid #eaeaea;
  }

  .title-text{
    text-transform: uppercase;
    color:red;
    font-weight: bold;
  }

  .attack-header{
    font-family:'Roboto, sans-serif';
    margin-top: 1rem;
    padding: 0 25px;
    text-transform: uppercase;
    display: grid;
    grid-template-columns: 16px 14rem 6.75rem 6.375rem 10rem 17.5rem;
  }

  .attack-container{
    margin: 18px 0;
    display: grid;
    grid-template-columns: 40px 14rem 6.75rem 6.375rem 10rem 17.5rem;
  }

  .attack-name{
    display: flex;
    flex-direction: column;
    text-transform: capitalize;
  }

  .attack-range{
    display: flex;
    flex-direction: column;
    text-transform: capitalize;

  }

  .attack-type{
    color:#838383;
    font-size:12px;
  }

  .clickable{
    border: 1px solid gray;
    border-radius: 0.375rem;
    cursor: pointer;
    text-align: center;
  }

  .clickable:hover{
    background-color: #ced9e0;
  }

  .clickable.hit{
    padding: 8px;
    width: 3.9rem;
    font-size: 20px;
    font-weight: bold;
  }

  .clickable.damage{
    padding: 8px;
    min-width: 4.2rem;
    max-width: max-content;
    font-size: 20px;
    font-weight: bold;
    overflow: hidden;
  }

  .notes{
    margin: auto 0;
    color:#838383;
  }
</style>